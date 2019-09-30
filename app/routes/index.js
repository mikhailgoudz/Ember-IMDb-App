import Route from '@ember/routing/route';

export default Route.extend({
  controllerName: 'index',
  async model() {

    var movies = await this.store.query('movie', {
      s: 'Avengers'
    })
    movies = movies.slice(0,4)

    return {
     
      movies: movies

    }
  }
});
