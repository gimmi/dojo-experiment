define([ "dojo/rpc/JsonService" ], function (JsonService) {
    return {
        run: function () {
            var svc = new JsonService({ serviceUrl: '/rpc' });
            svc.callRemote('methodName', [ 1, 2, 3 ]).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
});