angular.module('yann.MiniRSS.FeedList', ['yann.LocalObjectStorage'])
    .service('FeedList', function ($rootScope, LocalObjectStorage) {

        this.delete = function (id) {
            var list = this.get();

            for (var i = list.length - 1; i >= 0; i--) {
                if (list[i].id == id) {
                    list.splice(i, 1);
                }
            }

            LocalObjectStorage.setObject('FeedList', list);
            $rootScope.$broadcast('FeedList', list);
        };

        this.get = function () {
            if (LocalObjectStorage.contains('FeedList')) {
                return LocalObjectStorage.getObject('FeedList');
            }

            return new Array({
                url: 'http://cacodaemon.de/index.php?rss=1',
                title: 'Cacomania',
                id: 0
            });
        };

        this.getById = function(id) {
            var list = this.get();

            for (var i = list.length - 1; i >= 0; i--) {
                if (list[i].id == id) {
                    return list[i];
                }
            }

            return null;
        };

        this.getMinId = function () {
            var list = this.get();
            var minId = Number.MAX_VALUE;

            for (var i = list.length - 1; i >= 0; i--) {
                minId = Math.min(minId, list[i].id);
            }

            return minId;
        };
    });
