'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class NoResourceException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (err, { response }) {
    return response.status(404).send({
      message:'Resource Not Found'
    })
  }
}

module.exports = NoResourceException
