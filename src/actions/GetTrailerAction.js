import $ from 'jquery';
import Constants from '../Constants';
import config from '../config';

export default function(id) {
    var url = `${Constants.baseUrl}/movie/${id}/videos?${config.apiKey}`;
    var youtubeLink;
    var thePromise = $.getJSON(url).then((trailerData) => {
        let trailer = trailerData.results[0].key;
        youtubeLink = `https://www.youtube.com/embed/${trailer}?autoplay=1`;
    }).then(() => {
        return youtubeLink
    });
    return{
        type: "GET_TRAILER",
        payload: thePromise
    }
}
