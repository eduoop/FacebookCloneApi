/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'Users/Register.store')
Route.get('/users/register/:key', 'Users/Register.show')
Route.put('/users/register/', 'Users/Register.update')

Route.post('/users/forgot-password', 'Users/ForgotPasswordController.store')
Route.get('/users/forgot-password/:key', 'Users/ForgotPasswordController.show')
Route.put('/users/forgot-password', 'Users/ForgotPasswordController.update')

Route.get('/users', 'Users/MainController.show').middleware('auth')
Route.put('/users', 'Users/MainController.update').middleware('auth')

Route.put('/users/avatar', 'Users/Avatar.update').middleware('auth')
Route.delete('/users/avatar', 'Users/Avatar.destroy').middleware('auth')