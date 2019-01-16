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
  async destroy({params,auth}){
    const user = await auth.getUser();
    const {id} = params;
    const post = await Post.find(id);
    AuthService.verifyResource(post,user.id);
    await post.delete()
    return post;
  }
  async update({request, auth ,params}){
    const user = await auth.getUser();
    const {id}= params;
    const post = await Post.find(id);
    AuthService.verifyResource(post,user.id);
    post.merge(request.only('title'))
    await post.save()
    return post
  }
}

module.exports = PostController
