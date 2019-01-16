'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.group(()=>{
  Route.post('register','UserController.register')
  Route.post('login','UserController.login')
  Route.resource('posts','PostController').middleware('auth')
  Route.resource('posts/:post_id/tasks','TaskController').middleware('auth')
}).prefix('api/v1')
