const express = require('express');
const router = express.Router();

// Define the product listings route
router.get('/products', (req, res) => {
  res.send('Product listings');
});

module.exports = router;
