var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.teamSchema = new Schema({
    name : String,
    shortName: String,
    location: String,
    conference: String,
    division : String
});

exports.gameSchema = new Schema({
    week : Number,
    gameTime: Date,
    home: { team : String, score: { type: Number, default: 0 }},
    away: { team: String, score: { type: Number, default: 0}}
});

exports.pickSchema = new Schema({
    user : String,
    gameId : [exports.gameSchema],
    pick: {team:String, homeScore: Number, awayScore: Number}
});