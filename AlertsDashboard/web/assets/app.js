/**
 * Created by yevgeniy.stebletsov on 14.06.2016.
 */
(function(){
    angular.module('app', ['filter', 'ui.grid', 'ui.grid.autoResize']);
})();
/**
 * Created by yevgeniy.stebletsov on 14.06.2016.
 */
(function(){
    angular.module('filter', []);
})();


/**
 * Created by yevgeniy.stebletsov on 14.06.2016.
 */

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
            $scope.gridOptions = {};
            $scope.gridOptions.columnDefs = [
                { name:'Name', field: 'name', width:150, minWidth: 300},
                { name:'Age', field: 'age', width:100},
                { name:'Born', field: 'born', width:130},
                { name:'Born1', field: 'born1', width:130},
                { name:'Born2', field: 'born2', width:130},
                { name:'Born3', field: 'born3', width:130},
                { name:'Born4', field: 'born4', width:130},
                { name:'Born5', field: 'born5', width:130},
                { name:'Born6', field: 'born6', width:130},
                { name:'Born7', field: 'born7', width:130},
                { name:'Born8', field: 'born8', width:130},
                { name:'Born9', field: 'born9', width:130},
                { name:'Born10', field: 'born10', width:130},
                { name:'Born11', field: 'born11', width:130}


            ];
            $scope.myData = [
                {name: "MoroniMoroniMoroniMoroniMoroni", age: 50, born: '1982', born1: '1982', born2: '1982', born3: '1982', born4: '1982', born5: '1982', born6: '1982', born7: '1982', born8: '1982', born9: '1982', born10: '1982', born11: '1982'},
                {name: "Tiancum", age: 43, born: '1982', born1: '1982', born2: '1982', born3: '1982', born4: '1982', born5: '1982', born6: '1982', born7: '1982', born8: '1982', born9: '1982', born10: '1982', born11: '1982'},
                {name: "Jacob", age: 27, born: '1982', born1: '1982', born2: '1982', born3: '1982', born4: '1982', born5: '1982', born6: '1982', born7: '1982', born8: '1982', born9: '1982', born10: '1982', born11: '1982'},
                {name: "Nephi", age: 29, born: '1982', born1: '1982', born2: '1982', born3: '1982', born4: '1982', born5: '1982', born6: '1982', born7: '1982', born8: '1982', born9: '1982', born10: '1982', born11: '1982'},
                {name: "Enos", age: 34, born: '1982', born1: '1982', born2: '1982', born3: '1982', born4: '1982', born5: '1982', born6: '1982', born7: '1982', born8: '1982', born9: '1982', born10: '1982', born11: '1982'}
            ];
            $scope.gridOptions.data = $scope.myData;
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