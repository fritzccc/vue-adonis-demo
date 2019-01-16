'use strict'
const Post = use('App/Models/Post')
const AuthService = use('App/Services/AuthService');

class TaskController {
  async index({auth,params}){
    const user = await auth.getUser();
    const { post_id } = params;
    const post = await Post.find(post_id);
    AuthService.verifyResource(post,user.id);
    return post.Tasks().fetch();
  }
  async store({auth,request,params}){
    const user = await auth.getUser();
    const { post_id } = params;
    const post = await Post.find(post_id);
    AuthService.verifyResource(post,user.id);
    const description = request.input('description');
    return await post.Tasks().create({
      description,
      completed:false
    });
  }
}

module.exports = TaskController
