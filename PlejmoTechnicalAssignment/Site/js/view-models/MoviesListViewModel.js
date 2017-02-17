/// <reference path="../knockout.js" />
/// <reference path="../jquery-3.1.1.js" />

var MoviesListViewModel = function () {
    var self = this;
    self.movies = ko.observableArray();

    var fakeData = [ {
            "title": "The Martian",
            "genre": "Sci-fi",
            "rating": 80,
            "img": "content/imgs/24-plejmo2016_GENRE_ver2-psd.jpg"
        }, {
            "title": "Dad vs Step-Dad: Daddy's Home",
            "genre": "Commedy",
            "rating": 70,
            "img": "content/imgs/110-plejmo2016_GENRE_ver2-psd.jpg"
        }, {
            "title": "X-MEN Apocalypse",
            "genre": "Action",
            "rating": 80,
            "img": "content/imgs/25-plejmo2016_GENRE_ver2-psd.jpg"
        }, {
            "title": "The Peanuts Movie",
            "genre": "Children",
            "rating": 90,
            "img": "content/imgs/26-plejmo2016_GENRE_ver2-psd.jpg"
        }, {
            "title": "Pride & Prejudice + Zombies",
            "genre": "Action",
            "rating": 50,
            "img": "content/imgs/54-plejmo2016_GENRE_ver2-psd.jpg"
        }, {
            "title": "The Last Witch Hunter",
            "genre": "Action",
            "rating": 70,
            "img": "content/imgs/68-plejmo2016_GENRE_ver2-psd.jpg"
        }, {
            "title": "The BFG",
            "genre": "Fantasy",
            "rating": 80,
            "img": "content/imgs/82-plejmo2016_GENRE_ver2-psd.jpg"
        }, {
            "title": "Batman vs Superman",
            "genre": "Action",
            "rating": 90,
            "img": "content/imgs/96-plejmo2016_GENRE_ver2-psd.jpg"
        }
    ];

    // overrides the ajax function to provide my fake data, preventing cross origin errors
    // in production, it would not be needed, since it would be running on a web server
    $.ajax = function (options) {
        options.success(fakeData);
    };

    self.loadMovies = function () {
        $.ajax({
            url: "../../content/fakedata.json",
            success: function (data) {
                self.movies = ko.observableArray(data);
            }
        });
    }
};