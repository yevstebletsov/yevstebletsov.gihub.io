/**
 * Created by yevgeniy.stebletsov on 14.06.2016.
 */
(function(){
    angular.module('app', ['filter']);
})();
/**
 * Created by yevgeniy.stebletsov on 14.06.2016.
 */

/**
 * Created by yevgeniy.stebletsov on 14.06.2016.
 */
(function(){
    angular.module('filter', []);
})();


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
/**
 * Created by yevgeniy.stebletsov on 14.06.2016.
 */
(function(){
    angular.module('filter')
        .directive('filters', function()
        {
            return {
                templateUrl: "app/filter/filters.html",
                controller: LabelsController,
                controllerAs: "FiltersCtrl"
            };

            LabelsController.$inject = ['$scope', 'FilterService'];

            function LabelsController($scope, FilterService)
            {
                var vm = this;


            }
        })
    ;
})();


/**
 * Created by yevgeniy.stebletsov on 14.06.2016.
 */
(function(){
    angular.module('app')
        .factory('FilterService', function($http)
        {
            return {
                filter: filter
            };

            function filter(){
                
            }
        })
    ;
})();