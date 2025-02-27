const createError = require('http-errors');

const { Contact } = require('../../models');

const updateContactById = async (req, res, next) => {
  const { contactId } = req.params;

  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
    timestamps: true,
  });

  if (!updatedContact) {
    throw createError(404, `Contact with id=${contactId} was not found`);
  }

  res.json(updatedContact);
};

module.exports = updateContactById;