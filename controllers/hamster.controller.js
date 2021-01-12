const HttpStatus = require("http-status-codes");

const Hamster = require("../models/hamster");

/*
  Gets all devices
  Method: GET
  Url: api/hamster
*/
async function getAll(req, res, next) {
  try {
    const hamsters = await Hamster.find().exec();

    res.json(hamsters);
  } catch (e) {
    next(e);
  }
}

/* 
  Creates new device
  Method: POST
  Url: api/hamster
  Body example: 
  {
    "title": "Random title",
    "description": "Random description..."
  }
*/
async function createHamster(req, res, next) {
  const { title, description } = req.body;

  try {
    const createdHamster = new Hamster({
      title,
      description,
    });

    await createdHamster.save();

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

/*
  Updates a device's current weight and makes a record about it
  Method: PATCH
  Url: api/hamster/:id
  Body example: 
  {
    "title": "Random title",
    "description": "Random description..."
  }
*/
async function updateHamster(req, res, next) {
  try {
    const oldHamster = { _id: req.params.id };
    const updatedHamster = req.body;

    const deviceAfterUpdate = await Hamster.findOneAndUpdate(oldHamster, updatedHamster).exec();

    if (!deviceAfterUpdate) {
      return res.sendStatus(HttpStatus.NOT_FOUND);
    }

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

/*
  Deletes hamster by ID
  Method: DELETE
  Url: api/hamster/:id
*/
async function deleteHamster(req, res, next) {
  const hamsterId = req.params.id;

  try {
    await Hamster.findById(hamsterId).remove().exec();

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getAll,
  createHamster,
  updateHamster,
  deleteHamster,
};
