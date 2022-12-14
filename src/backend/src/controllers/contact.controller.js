const service = require('../service/index');

const getContact = async (req, res) => {
  const { id } = req.params;

  try {
    const myListContacts = await service.getAllContact(id);

    if (!myListContacts) return res.status(404).json({});

    return res.status(200).json(myListContacts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const newContact = async (req, res) => {
  const {
    name, number, email, userId,
  } = req.body;

  try {
    const myNewContact = await service.creteNewContact({
      name, number, email, userId,
    });

    if (!myNewContact) return res.status(400).json({ message: 'Bad Request' });

    return res.status(201).end();
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateContact = async (req, res) => {
  const {
    id, name, number, email,
  } = req.body;
  try {
    const updatedContact = await service.updateContact({
      id, name, number, email,
    });

    if (!updatedContact) return res.status(400).json({ message: 'Bad Request' });

    return res.status(200).end();
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await service.deleteContact(id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getContact,
  newContact,
  updateContact,
  deleteContact,
};
