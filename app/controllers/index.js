import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    goToDetails(movie) {
      this.transitionToRoute('details', {
        queryParams: {
          moveID: movie.id
        }
      }
      );
    },

    async searchMovie() {
      let movieTitle = this.get('movieTitle')
      this.set('model', {
        movies: this.store.query('movie', {
          s: movieTitle
        })
      })
    },

    colorToggle(){

     
    
      if(document.querySelector('#theme').className=="dark"){

        document.querySelector('#theme').className="light";

      }
      else{

        document.querySelector('#theme').className="dark";
      }



    }
  }
});
