
module.exports = {
    baseUrl: 'https://api.themoviedb.org/3',
    encoding: 'language=en-US&page=1&include_adult=false',
    imageBase: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2',
    imageFUll: 'https://image.tmdb.org/t/p/w800',
    append: `append_to_response=credits,release_dates`,
    discoverLinks: [
    {
        buttonText: 'Top Rated G Movies',
        link: 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc',
    },
    {
        buttonText: 'Most popular Kids Movies',
        link: 'discover/movie?certification_country=US&certification=G&sort_by=vote_average.desc',
    },
    {
        buttonText: 'Top Bradd Pitt Movies of 2010',
        link: 'discover/movie?with_people=287&primary_release_year=2011&sort_by=vote_average.desc',
    },
    {
        buttonText: 'Best Dramas of 2014',
        link: 'discover/movie?with_genres=18&primary_release_year=2014',
    },
    {
        buttonText: 'Tom Cruise\'s Top Sci-Fi',
        link: 'discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc',
    },
    {
        buttonText: 'Will Ferrel\'s Top Grossing Comedies',
        link: 'discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc',
    },
    {
        buttonText: 'Brad Pitt & Ed Norton Movies',
        link: 'discover/movie?with_people=287,819&sort_by=vote_average.desc',
    },
    {
        buttonText: 'Top Rated Dramas',
        link: 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10',
    },
    {
        buttonText: 'Liam Neeson\'s highest grossing R movies',
        link: 'discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896'
    }
]

};
