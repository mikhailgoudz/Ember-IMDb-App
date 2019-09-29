import Route from '@ember/routing/route';

export default Route.extend({
  controllerName: 'index',
  async model() {

    var movies = await this.store.query('movie', {
      s: 'test'
    })
    movies = movies.slice(0,5)

    return {
     
      movies: movies

    }
  }
});
