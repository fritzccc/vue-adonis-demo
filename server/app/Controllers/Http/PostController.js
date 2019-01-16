'use strict'

const Post = use('App/Models/Post')
const AuthService = use('App/Services/AuthService');
class PostController {
  async store({request,auth}){
    const user = await auth.getUser();
    const post = new Post();
    post.fill(request.post());
    await user.Posts().save(post);
    return post;
  }
  async index({auth}){
    const user = await auth.getUser();
    return await user.Posts().fetch();
  }
  async destroy({params,auth,response}){
    const user = await auth.getUser();
    const {id} = params;
    const post = await Post.find(id);
    AuthService.verifyResource(post,id);
    await user.Posts().delete(post);
    return post;
  }
}

module.exports = PostController
