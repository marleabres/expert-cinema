//= wrapped

angular
    .module("cinema.index")
    .controller("IndexController", IndexController);

function IndexController(applicationDataFactory, contextPath) {
    var vm = this;

    vm.contextPath = contextPath;

    applicationDataFactory.get().then(function(response) {
        vm.applicationData = response.data;
    });
}
