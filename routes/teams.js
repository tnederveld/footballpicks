var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schemas = require('./../bin/schemas');

mongoose.connect('mongodb://localhost/nflpicks');

var Team = mongoose.model('Team', schemas.teamSchema);

//get all
router.get('/', function(req, res, next){
    var query = Team.find({});
    return query.exec(function(err,teams){
        if(err){console.log(err);}
        res.render('teams');
    });
});

// search by shortName
router.get('/find/:shortName', function(req,res,next){
    var myShort = req.params.shortName;
    return Team.findOne({shortName: myShort}, function(err, team){
        if (err) { console.log(err); }
        res.json(team);
    });
});

//post one team
router.get('/addTeam', function(req,res,next){
    res.render('addTeam');
});
router.post('/addTeam', function(req,res,next){
    var newTeam = new Team({
        name: req.body.name,
        shortName: req.body.shortName,
        conference: req.body.conference,
        division: req.body.division,
        location: req.body.location
    });

    newTeam.save(function(err){
        if(!err){
            return console.log('created!');
        }else{
            return console.log(err);
        }
    });
    return res.send(newTeam);
});

//update one team
router.put('updateTeam', function(req,res,next){
    //find the team
    //update the team
});

//delete a team
router.delete('deleteTeam', function(req,res,next){
    //find the team
    // delete the team
});

module.exports = router;
