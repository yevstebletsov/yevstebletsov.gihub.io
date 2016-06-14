/**
 * Created by yevgeniy.stebletsov on 14.06.2016.
 */
(function(){
    angular.module('app')
        .controller('IndexController', function($scope)
        {
            var show = true;
            var showdash = false;
            $scope.show = show;
            $scope.showdash = showdash;

            $scope.alerts = function(){
                $scope.show = true;
                $scope.showdash = false;
            }

            $scope.dashboard = function(){
                $scope.show = false;
                $scope.showdash = true;
            }
        })
    ;
})();