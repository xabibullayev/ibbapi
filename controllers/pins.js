import Pin from "../models/Pin.js";

export const getPins = async (req, res) => {
  try {
    const pins = await Pin.find();

    res.status(201).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addPin = async (req, res) => {
  try {
    const newPin = new Pin({
      address: req.body.address,
      title: req.body.title,
      type: req.body.type,
      long: req.body.long,
      lat: req.body.lat,
    });

    await newPin.save();

    res.status(201).json("Taza element kiritildi!");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const editPin = async (req, res) => {
  try {
    await Pin.findByIdAndUpdate(req.params.id, req.body);

    res.status(201).json("Element janalandi!");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletePin = async (req, res) => {
  try {
    await Pin.findByIdAndDelete(req.params.id);

    res.status(201).json("Element oshirildi!");
  } catch (err) {
    res.status(500).json(err);
  }
};
