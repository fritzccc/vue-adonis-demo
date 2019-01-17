'use strict'
const Post = use('App/Models/Post')
const Task = use('App/Models/Task')
const AuthService = use('App/Services/AuthService');

class TaskController {
  async index({auth, params}){
    const user = await auth.getUser();
    const { post_id } = params;
    const post = await Post.find(post_id);
    AuthService.verifyResource(post,user.id);
    return post.Tasks().fetch();
  }

  async store({auth, request, params}){
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

  async update({auth, request, params}){
    const user = await auth.getUser();
    const { id } = params;
    const task = await Task.find(id);
    const post = await task.Post().fetch();
    AuthService.verifyResource(post,user.id);
    task.merge(request.post());
    await task.save();
    return task
  }

  async destroy({auth, params}){
    const user = await auth.getUser();
    const { id } = params;
    const task = await Task.find(id);
    const post = await task.Post().fetch();
    AuthService.verifyResource(post,user.id);
    task.delete();
    return task;
  }

}

module.exports = TaskController
