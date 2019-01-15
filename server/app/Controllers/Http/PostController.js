'use strict'

const Post = use('App/Models/Post')

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
    const post = await Post.find(id)
    console.log(post.user_id)
    if(post.user_id!=user.id){
      return {errmsg:"no auth to delete rocords"}
    }
    await user.Posts().delete(post)
    return post
  }
}

module.exports = PostController
