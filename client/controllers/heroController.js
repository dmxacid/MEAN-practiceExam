app.controller('heroController', function($scope, heroFactory){
  // $scope.errors = [];
  //
  // sessionFactory.checkUser(function(data){
  //   $scope.curUser = data;
  //
  // });
  //
  $scope.addLikes = function(id){
    heroFactory.like(id)
  }
  $scope.add = function(){
    $scope.errors = [];
    // if(!$scope.hero || !$scope.hero.name){
    //   $scope.errors.push('Please enter a hero name')
    // }
    // if(!$scope.hero || !$scope.hero.power){
    //   $scope.errors.push('Please enter a power')
    // }else{
      heroFactory.add($scope.hero)
    // }
  }
  heroFactory.showHero(function(data){
    var active =[];
    var inactive =[];
    for(var i = 0; i<data.length; i++){
    if(data[i].status == true){
        active.push(data[i]);
    }
    else{
      inactive.push(data[i]);
    }
    $scope.activeHeroes = active;
    $scope.inactiveHeroes = inactive;
  }

  });
})
