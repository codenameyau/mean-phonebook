mean-phonebook
==============

Phonebook app with angular-fullstack

###Live Demo
* [Deployed on Heroku](https://mean-phonebook.herokuapp.com/)

###Development Setup
1. Clone this repo
2. Run: `npm install && bower install`
3. Serve: `grunt serve`


###Development Requirements
* [Yeoman](http://yeoman.io/): `sudo npm install -g yo`
* [angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack):
  `sudo npm install -g generator-angular-fullstack`


###Project Structure
* Angular files in: `app/scripts/`
* Express API in: `lib/`

###Deploying angular-fullstack App on Heroku
1. Create an account with a Sandbox Database on [MongoHQ](http://www.mongohq.com/pricing/)
2. In your root project directory, run:

  `yo angular-fullstack:deploy heroku`

3. That command will generate a `dist` folder for production, then:

  `cd dist/`
