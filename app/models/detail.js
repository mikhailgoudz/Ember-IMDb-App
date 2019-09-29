import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    Title: DS.attr('string'),
    Year: DS.attr('string'),
    imdbID: DS.attr('string'),
    Rated: DS.attr('string'),
    Released: DS.attr('string'),
    Runtime: DS.attr('string'),
    Genre: DS.attr('string'),
    Director: DS.attr('string'),
    Writer: DS.attr('string'),
    Actors: DS.attr('string'),
    Plot: DS.attr('string'),
    Awards: DS.attr('string'),
    Poster: DS.attr('string'),
    Metascore: DS.attr('string'),
    imdbRating: DS.attr('string'),
    Website: DS.attr('string')
});
