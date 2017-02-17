/// <reference path="../jquery-3.1.1.js" />
/// <reference path="jquery.mockjax.js" />
/// <reference path="../view-models/MoviesListViewModel.js" />

var vm;
function initTest() {
    vm = new MoviesListViewModel();
}

$(function () {

    module("MoviesListViewModel", {
        setup: initTest
    });

    test("should have correct number of movies", function () {
        $.ajax = function (options) {
            equal(options.url, "../../content/fakedata.json");
            options.success([{}, {}, {}]);
        };

        vm.loadMovies();
        equal(vm.movies().length, 3);
    });

});