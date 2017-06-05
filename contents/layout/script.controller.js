(function () {

  angular
    .module("app.layout")
    .controller("LayoutController", LayoutController);

  LayoutController.$inject = ["$scope", "$rootScope", "layoutService", "$templateCache"];

  function LayoutController($scope, $rootScope, layoutService, $templateCache) {
    var vm = this;
    activate();

    function activate() {
      $scope.$on("$viewContentLoaded",
        function (event, toState, toParams, fromState, fromParams) {
          $.AdminLTE.layout.fix();
          // $.AdminLTE.layout.fixSidebar();
          // $.AdminLTE.layout.activate();
        });
      $scope.$on("$stateChangeSuccess",
        function (event, toState, toParams, fromState, fromParams) {
          $templateCache.removeAll();
        });
    };
  };

})();