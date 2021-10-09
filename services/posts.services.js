const { ObjectId } = require('mongodb');

const mongo = require('../mongo');

const service = {
  async get(req, res) {
    try {
      const data = await mongo.posts.find().toArray();
      res.send(data);
    } catch (err) {
      console.log('error in GET - ', err);
      res.sendStatus(500);
    }
  },
  async post(req, res) {
    try {
      const data = await mongo.posts.insertOne(req.body);
      res.send({ ...req.body, _id: data._id });
    } catch (err) {
      console.log('error in POST - ', err);
      res.sendStatus(500);
    }
  },
  async put(req, res) {
    try {
      console.log(req.params.id);
      const data = await mongo.posts.findOneAndUpdate(
        { _id: ObjectId(req.params.id) },
        { $set: { ...req.body } },
        { returnNewDocument: true }
      );
      console.log(data);
      res.send({ ...req.body });
    } catch (err) {
      console.log('error in POST - ', err);
      res.sendStatus(500);
    }
  },
  async delete(req, res) {
    try {
      await mongo.posts.deleteOne({ _id: ObjectId(req.params.id) });
      res.send({});
    } catch (err) {
      console.log('error in POST - ', err);
      res.sendStatus(500);
    }
  },
};

module.exports = service;
