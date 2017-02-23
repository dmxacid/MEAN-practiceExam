var session = require('./../controllers/session.js')
var hero = require('./../controllers/hero.js')

module.exports = function(app){
  app.post('/login', function(req, res){
    session.login(req, res);
  })
  app.post('/addHero', function(req, res){
    hero.addHero(req, res);
  })
  app.post('/like/:id', function(req, res){
    hero.addLike(req, res);
  })
  app.get('/checkuser', function(req, res){
    session.checkUser(req, res);
  })
  app.get('/logout', function(req, res){
    session.logout(req, res);
  })
  app.get('/showHero', function(req, res){
    hero.showHero(req, res);
})
}
