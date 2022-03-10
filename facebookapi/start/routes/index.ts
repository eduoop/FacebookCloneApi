import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './users'
import './uploads'
import './search'
import './posts'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/user-register', async ({ view }) => {
  return view.render('emails/register')
})

Route.get('/forgot-password', async ({ view }) => {
  return view.render('emails/forgot-password')
})
