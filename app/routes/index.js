import Route from '@ember/routing/route';

export default Route.extend({
  controllerName: 'index',
  model() {
    return {
      movies: this.store.query('movie', {
        s: 'test'

      })
    }
  
    
  }
});
