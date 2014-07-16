angular.module('yann.MiniRSS', ['yann.MiniRSS.FeedList','yann.MiniRSS.googleapis.feed','ngRoute','ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',                          {templateUrl: 'views/list.html',        controller: 'ItemsCtrl'})
            .when('/feed/:id',                  {templateUrl: 'views/list.html',        controller: 'ItemsCtrl'})
            .when('/feed/:id/item/:hashKey',    {templateUrl: 'views/item.html',        controller: 'ItemCtrl'})

    });
