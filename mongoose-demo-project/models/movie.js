const mongoose = require('mongoose') ;
const Joi = require('joi') ;
const {genreSchema} = require('./genre');

const Movie = mongoose.model('Movie', new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength:5,
        maxlength: 50
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
}));

function validateMovie(movie) {
    const Schema = {
        title: Joi.string().min(5).max(50).required() ,
        genreId: Joi.objectId().required() , // client will send GENRE ID here
        numberInStock: Joi.number().min(0).max(255).required() ,
        dailyRentalRate: Joi.number().min(0).max(255).required()
    };

    return Joi.validate(movie, Schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
