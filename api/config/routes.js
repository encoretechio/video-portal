/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': {
  //   view: 'homepage'
  // },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  '/': 'HomepageController.index',

  // user routes
  'GET /user/:user_id': 'UserController.getUser',
  'GET /user': 'UserController.getUsers', 
  'POST /user': 'UserController.createUser',
  'POST /user/:user_id': 'UserController.editUser',
  'DELETE /user/:user_id': 'UserController.deleteUser',

  // role endpoints
  'GET /role': 'RoleController.getRoles', 
  'POST /role': 'RoleController.createRole',
  'DELETE /role/:role_id': 'RoleController.deleteRole',
  'POST /role/:role_id/add_playlists': 'RoleController.addPlaylists',
  'POST /role/:role_id/remove_playlists': 'RoleController.removePlaylists',

  // video routes
  // 'GET /video/:video_id/users_who_can_answer_comments': 'VideoController.getUsersWhoCanAnswerComments',

  // playlist routes
  'GET /playlist/:playlist_id/users_who_can_answer_comments': 'PlaylistController.getUsersWhoCanAnswerComments',

};

// HTTP Method  URL         Description
// POST         /user       creates a new user
// GET          /user/2     gets a user with ID of 2
// GET          /user       gets a list of all users
// PUT          /user/2     updates a user with ID of 2
// DELETE       /user/2     deletes a user with ID of 2

// POST         /role       creates a new role
// GET          /role/2     gets a role with ID of 2
// GET          /role       gets a list of all roles
// PUT          /role/2     updates a role with ID of 2
// DELETE       /role/2     deletes a role with ID of 2
