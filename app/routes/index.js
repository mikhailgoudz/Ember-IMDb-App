import Route from '@ember/routing/route';

export default Route.extend({
  controllerName: 'index',
  async model() {

    var movies = await this.store.query('movie', {
      s: 'Toy Story'
    })
    movies = movies.slice(0,4)

    return {
     
      movies: movies

    }
  }
});
