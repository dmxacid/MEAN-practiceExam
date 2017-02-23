var mongoose = require('mongoose');
var Hero = mongoose.model('Hero');
var x = 0;
module.exports = (function(){
  return {
    addHero:function(req, res){
      var hero = new Hero({
      name: req.body.name,
      power: req.body.power,
      likes: 0,
      status: true
    });
  },
  addLike:function(req, res){
    Hero.findOne({_id:req.body.id}, function(err, results){
      var x = 0;
      x = results.likes;
      x++;
      Hero.update({_id: req.body.id}, {likes: x},function(err){
        if(err) {
          console.log('something went wrong updating');
        } else { // else console.log that we did wkell and then redirect to the root route
          console.log('successfully updated a hero!');
        }
      })
    })

  },
    showHero : function(req, res) {
      Hero.find({}, function(err, results){
        if(err) {
          console.log(err);
        }
          res.json(results);
        });
    }
  }
})()
