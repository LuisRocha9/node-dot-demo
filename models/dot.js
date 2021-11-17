const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DotSchema = Schema({
    x: Number,
    y: Number
}, {collection: 'Dots'});


const Dot = mongoose.model('Dot', DotSchema);

module.exports = Dot;
