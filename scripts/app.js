angular.module('yann.MiniRSS', ['yann.MiniRSS.FeedList','yann.MiniRSS.googleapis.feed','ngRoute','ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',              {templateUrl: 'views/list.html',        controller: 'ItemsCtrl'})
    });
