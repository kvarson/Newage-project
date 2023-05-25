const express = require("express");
const Contact = require("../models/contact.js");

const router = express.Router();

router.post("/contacts", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const contact = await Contact.create({ name, email, phone });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    console.log(contacts);
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read a single contact
router.get("/contacts/:id", async (req, res) => {
  try {
    const contact = await contact.findByPk(req.params.id);
    if (contact) {
      res.json(contact);
    } else {
      res.status(404).json({ error: "contact not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a contact
router.put("/contacts/:id", async (req, res) => {
  try {
    const { name, email } = req.body;
    const contact = await Contact.findByPk(req.params.id);
    if (contact) {
      await contact.update({ name, email });
      res.json(contact);
    } else {
      res.status(404).json({ error: "contact not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a contact
router.delete("/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (contact) {
      await contact.destroy();
      res.json({ message: "contact deleted successfully" });
    } else {
      res.status(404).json({ error: "contact not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
