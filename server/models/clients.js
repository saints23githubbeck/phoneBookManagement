const mongoose= require('mongoose');

const clientSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Client', clientSchema)

