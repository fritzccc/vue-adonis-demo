'use strict'
const User = use('App/Models/User');

class UserController {
  async register({request}){
    const {email,password}=request.post();
    await User.create({
      email,
      password,
      username:email
    })
    return this.login(...arguments)
  }

  async login({request, auth}){
    const {email,password}=request.post();
    return await auth.attempt(email,password);
  }
}

module.exports = UserController
