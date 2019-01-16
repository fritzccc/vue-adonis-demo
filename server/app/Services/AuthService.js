const InvalidAccess = use('App/Exceptions/InvalidAccessException')
const NoResource = use('App/Exceptions/NoResourceException')

class AuthService{
  verifyResource(resource,user_id){
    if(!resource){
      throw new NoResource();
    }
    if(resource.user_id !== user_id){
      throw new InvalidAccess();
    }
  }
}

module.exports = new AuthService()