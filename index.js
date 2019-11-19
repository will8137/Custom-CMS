const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const PROJECT_NAME = "Baud";

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

//Get Lists (Models)
const userSchema = require("./lists/user");
const albumSchema = require("./lists/album");
const songSchema = require("./lists/song");
const artistSchema = require("./lists/artist");
const labelSchema = require("./lists/label");

//Create Lists
keystone.createList('User', userSchema);
keystone.createList('Song', songSchema);
keystone.createList('Album', albumSchema);
keystone.createList('Artist', artistSchema);
keystone.createList('recordLabel', labelSchema);


const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    // To create an initial user you can temporarily remove the authStrategy below
    new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
  ],
};
