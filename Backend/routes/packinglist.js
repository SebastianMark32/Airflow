const express = require('express');

const { body } = require('express-validator');

const eventController = require ('../controllers/packinglist');

const auth =  require('../middleware/auth');

const router = express.Router();

router.get('/:id', auth, eventController.fetchAll);

router.post('/edit',
    [
      auth,
      body('tripid').trim().isLength({min:1}).not().isEmpty()
    ],
    eventController.editPacking
);

router.post(
    '/create',
    [
      auth,
      body('userId').trim().isLength({ min: 1 }).not().isEmpty(),
      body('tripname').trim().isLength({ min: 1 }).not().isEmpty(),
    ],
    eventController.postPacking
);

module.exports = router;