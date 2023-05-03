const express = require('express');
const router = express.Router();

const { getClients, insertClient, deleteClient, updateClient } = require('../../database/db');

// GET(read) Client (".../api/Client")
router.get('/', async (req, res) => {
  await getClients((err, clients) => {
    if(err) {
      return console.log(err);
    }

    return res.send({ clients });
  });
});

// POST(create) Client
router.post('/', async (req, res) => {
  try {
    await insertClient({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      createdAt: new Date()
    });
  
    return res.status(200).send({ success: 'Client Save Successfuly!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Data Was Unsuccesffull Try Again...' });
  }
});

// PUT(update) Client
router.put('/edit/:id', async (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone = req.body.phone;

  try {
    await updateClient(req.params.id, { first_name,last_name, phone });

    return res.status(200).send({ success: 'Client Edited Successfully!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Data Was Unsuccesffull Try Again...' });
  }
});

// DELETE Client
router.delete('/delete/:id', async (req, res) => {
  try {
    await deleteClient(req.params.id);

    return res.status(200).send({ success: 'Client Deleded Succesfully!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Data Was Unsuccesffull Try Again...' });
  }
});

module.exports = router;