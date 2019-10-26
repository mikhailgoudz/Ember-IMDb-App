# Movie App 

Author : Mikhail Goudz

This application opens with 4 pre selected movies.
On those pre selected movies you can see some general info aswell as aditional info once you click on the poster.
User can also search for movies which will update the table of movies (done using the OMDb Api with Ember Data)


## Time Spent

8-10 Hours

* Watching videos uploaded by the instructer 2 hours
* Additional research reading Ember guides 2 hours
* Coding required stories 5 Hours
* Optional and extras 30 minutes 
* Currently trying to figure out how to complete some of the more tricky difficult ones



## Hiding your API key
* Modify your `.gitignore` file so that it includes a line item for `/config/custom-config.js`
* In your `/config/` folder, create a `custom-config.js` file.
* In your `custom-config.js` file, add this, and replace the string with your API key.
```
exports.config = {
  OMDB_API_KEY: 'insert_your_api_key_here'
};
```
* In your `config/environment.js` file, add the following. You can look at this project repository to see exactly where it was added.
```
  try {
    const custom = require('./custom-config');
    ENV.OMDB_API_KEY = custom.config.OMDB_API_KEY;
  } catch (err) {
    console.log('config/custom-config.js not found');
  }
```
* Check out app/adapters/application.js to see how the API key is then loaded into the application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd data-example`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
