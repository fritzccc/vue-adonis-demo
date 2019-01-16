'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Task extends Model {
  Post(){
    return this.belongsTo('App/Models/Post')
  }
}

module.exports = Task
