import angular from 'angular'
import $ from 'jquery'

angular.module('app', []).controller('appController', function($http) {
  //this.news=["Trump", "Hillary"];
  $http.get('/news').then((response) => {
    console.log(response.data);
    this.news = response.data;
  });

  this.searchAndDisplay = function() {
    $(".button").attr("disabled");
    const searchFor = this.searchText;
    console.log(searchFor);
    //news2=[];
    let mainDiv = $("#newsid");
    angular.forEach(this.news.articles, function(article, key) {
      if (article.title.includes(searchFor)) {
        let row = $('<div />', {
          class: "row"
        });
        let imageDiv = $('<div />', {
          class: "col-md-2"
        });
        let img = $('<img />', {
          src: article.urlToImage
        }).appendTo(imageDiv);

        let detailsDiv = $('<div />', {
          class: "col-md-10"
        });
        let title = $('<p />', {
          text : article.title
        });
        let description = $('<p />', {
          text : article.description
        });

        title.appendTo(detailsDiv);
        description.appendTo(detailsDiv);

        //let author =

        //let date

        //let source

        imageDiv.appendTo(row);
        detailsDiv.appendTo(row);
        row.appendTo(mainDiv);

      }
    });
    $(".button").attr("enabled");
  }
});
