'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Post extends Model {
  User(){
    return this.belongsTo('App/Models/User')
  }
  Tasks(){
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Post
