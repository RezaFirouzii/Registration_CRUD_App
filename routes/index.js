const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../db');
const collection = 'Clients';

/* GET Forms */
router.get('/', (req, res) => {
  db.getDB().collection(collection).find({}).toArray((err, documents) => {
    if (err) console.log(err);
    else res.render('index', { docs: documents });
  });
});

/* POST a Form */
router.post('/', (req, res) => {
  db.getDB().collection(collection).insertOne(req.body, (err, result) => {
    if (err) console.log(err);
    else res.json(result);
  });
});

module.exports = router;
