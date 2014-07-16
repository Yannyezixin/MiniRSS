angular.module('yann.MiniRSS')
    .controller('ItemCtrl', function ($scope, $routeParams, FeedList, HashString) {
        var feed = FeedList.getById($routeParams.id);

        FeedLoad.fetch({q: feed.url, num:50}, {}, function (data) {
            $scope.feed = data.responseData.feed;
            $scope.id = $routeParmas.id;
            var entries = data.respanseData.feed.entries;

            for (var i = entries.length - 1; i >=0; i--) {
                if (HashString.perform(entries[i].title) == $routeParmas.hashKey) {
                    $scope.item = entries[i];
                }
            }
        })
    })
