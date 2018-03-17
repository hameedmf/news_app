import angular from 'angular'
import $ from 'jquery'

angular.module('app', []).controller('appController', function($http) {
  //this.news=["Trump", "Hillary"];
  $http.get('/news').then((response) => {
    console.log(response.data);
    this.news = response.data;
  });
});
