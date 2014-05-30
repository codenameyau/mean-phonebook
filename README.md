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


###Project File Structure
* Angular files in: `app/scripts/`
* Express API in: `lib/`


###Deploying angular-fullstack App on Heroku
1. Create an account with a Sandbox Database on [MongoHQ](http://www.mongohq.com/pricing/)

2. After you create a database, create a mongoDB user in `Admin -> Overview -> Users`

3. You'll need the `Mongo URI` in `Admin -> Overview -> Connection Strings` later

4. In your root project directory, run:

  `yo angular-fullstack:deploy heroku`

5. That command will generate a `dist` folder for production, then:

  `cd dist/`

6. In your `dist/` files, open `lib/config/env/production.js`

7. Change the line `'mongodb://localhost/fullstack-dev'` to the `Mongo URI` from step 3.

8. Make sure to change <user> and <password> to the mongoDB user you created during step 2.

9. Commit and push your changes to heroku

  ```
  git add --all
  git commit -m "Deploying...!"
  git push heroku master
  ```

10. In your terminal, there should be a prompt saying `<URL> deployed to Heroku`
