import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('details',()=>{
    this.route('details', { path: 'details:movieID' });
  });
});

export default Router;
