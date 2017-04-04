import $ from 'jquery';
import Constants from '../Constants';
import config from '../config';

export default function(endpoint, page=1) {
    var apiResults = {};
    var movies = [];
    console.log(endpoint);
    var promise = $.getJSON(endpoint).then((movieData) => {
        console.log(movieData);
        apiResults['page'] = movieData.page;
        return Promise.all(movieData.results.map((result) => {
            var movie = {};
            var id = result.id;
            var detailedUrl = `${Constants.baseUrl}/movie/${id}?${config.apiKey}&${Constants.append}`;

            // Assign the result property values to our own object
            // property values.
            return $.getJSON(detailedUrl).then((detailedResult) => {
                movie.budget = detailedResult.budget;
                movie.id = detailedResult.id;
                movie.homepage = detailedResult.homepage;
                movie.imdb_id = detailedResult.imdb_id;
                movie.overview = detailedResult.overview;
                movie.popularity = detailedResult.popularity;
                movie.poster_path = detailedResult.poster_path;
                movie.release_date = detailedResult.release_date;
                movie.revenue = detailedResult.revenue;
                movie.runtime = detailedResult.runtime;
                movie.status = detailedResult.status;
                movie.tagline = detailedResult.tagline;
                movie.title = detailedResult.title;
                movie.vote_average = detailedResult.vote_average;
                movie.vote_count = detailedResult.vote_count;
                movie.trailer = '';

                // Find the director amongst the crew and assign his or her
                // name to the director property
                var crew = detailedResult.credits.crew;
                for (let member of crew) {
                    if (member.job === 'Director') {
                        movie.director = member.name;
                        break;
                    }
                }
                // Find the US certification and assign that value to the
                // mpaa property
                movie.mpaa = 'NR'
                var releaseCountries = detailedResult.release_dates.results
                for (let country of releaseCountries) {
                    if (country.iso_3166_1 === 'US') {
                        var certifications = country.release_dates;
                        for (let item of certifications) {
                            var mpaa = item.certification;
                            if (mpaa !== '') {
                                movie.mpaa = mpaa;
                                break;
                            }
                        }
                    }
                }
                // Push the object to our movie objects array (state)
                return movies.push(movie);
            });
        }));
    }).then(() => {
        apiResults['movies'] = movies;
        return apiResults
    }).catch((error) => {
        console.log(error);
    });
    return {
        type: 'GET_MOVIES',
        payload: promise
    }
}
