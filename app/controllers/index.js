import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        searchMovie() {
          let movieTitle = this.get('movieTitle')
 
          let movies = this.store.query('movie', {
            s: movieTitle
          }).then(movies =>{
         
            this.set('model',{movies:movies}) //= movies
           
          })
        }
      }
});
