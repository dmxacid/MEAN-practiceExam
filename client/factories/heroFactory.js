app.factory('heroFactory', function($http, $location){
  var factory = {};
  factory.add = function(hero){
    $http.post('/addHero', hero).then(function(hero){

      if(hero.data){

        $location.url('/dash')
      }
    })
  }
  factory.showHero = function(cb){
    $http.get('/showHero').then(function(output){
      // console.log(output);
        cb(output.data)

    })
  }
  factory.like = function(id){
    var x = {id: id}
    $http.post('/like/:id', x).then(function(object){
      cb(object.data)
    })
  }
  return factory;
})
