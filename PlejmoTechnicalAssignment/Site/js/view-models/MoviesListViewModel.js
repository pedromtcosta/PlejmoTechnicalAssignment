/// <reference path="../knockout.js" />
/// <reference path="../jquery-3.1.1.js" />

var MoviesListViewModel = function () {
    var self = this;
    self.movies = ko.observableArray();

    self.doSomething = function () {
        $.ajax({
            url: "../../content/fakedata.json",
            success: function (data) {
                self.movies = ko.observableArray(data);
            }
        })
    }
};