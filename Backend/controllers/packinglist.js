const { validationResult } = require('express-validator');

const Packinglist = require('../models/packinglist');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await Packinglist.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postPacking = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;
  
  const user = req.body.user;
  const tripname = req.body.tripname;

  const item1 = req.body.item1;
  const item2 = req.body.item2;
  const item3 = req.body.item3;
  const item4 = req.body.item4;
  const item5 = req.body.item5;
  const item6 = req.body.item6;
  const item7 = req.body.item7;
  const item8 = req.body.item8;
  const item9 = req.body.item9;
  const item10 = req.body.item10;

  const checked1 = req.body.checked1;
  const checked2 = req.body.checked2;
  const checked3 = req.body.checked3;
  const checked4 = req.body.checked4;
  const checked5 = req.body.checked5;
  const checked6 = req.body.checked6;
  const checked7 = req.body.checked7;
  const checked8 = req.body.checked8;
  const checked9 = req.body.checked9;
  const checked10 = req.body.checked10;

       

  try {
    const post = {
      user: user,
      tripname: tripname,

      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      item5: item5,
      item6: item6,
      item7: item7,
      item8: item8,
      item9: item9,
      item10: item10,
      checked1: checked1,
      checked2: checked2,
      checked3: checked3,
      checked4: checked4,
      checked5: checked5,
      checked6: checked6,
      checked7: checked7,
      checked8: checked8,
      checked9: checked9,
      checked10: checked10,

      
    };
    const result = await Packinglist.save(post);
    res.status(201).json({ message: 'Posted!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};