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

