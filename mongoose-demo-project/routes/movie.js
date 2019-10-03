const {Movie, validate} = require('../models/movie');
const {Genre} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await Movie.find().sort('name');
  res.send(movies);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid Genre');

  const movies = new Movie( { 
      title: req.body.title ,
        genre: {
          _id: genre._id,
          name: genre.name
      } ,   //only _id and name properti will use here
      numberInStock: req.body.numberInStock ,
      dailyRentalRate: req.body.dailyRentalRate 
    } ) ;
   await movies.save();
  
  res.send(movies);
} ) ;

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid Genre');
  
  const movies = await Movie.findByIdAndUpdate(req.params.id, { 
    title: req.body.title ,
    genre: {
        _id: genre._id,
        name: genre.name
    } ,
    numberInStock: req.body.numberInStock ,
    dailyRentalRate: req.body.dailyRentalRate 
    }, {new: true });

  if (!movies) return res.status(404).send('The movies with the given ID was not found.');
  
  res.send(movies);
});

router.delete('/:id', async (req, res) => {
  const movies = await Movie.findByIdAndRemove(req.params.id);

  if (!movies) return res.status(404).send('The movies with the given ID was not found.');

  res.send(movies);
});

router.get('/:id', async (req, res) => {
  const movies = await Movie.findById(req.params.id);

  if (!movies) return res.status(404).send('The movies with the given ID was not found.');

  res.send(movies);
});

module.exports = router;