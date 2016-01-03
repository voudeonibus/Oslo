'use strict'

// Require modules
var _ = require('lodash')

module.exports = function(query, options) {

  var queryDatabase = {}

  _.mapKeys(options, function(value, key) {

    if (_.isArray(value)) {
      var keyFind = false

      _.each(value, function(item){
        if (_.has(query, item) && !keyFind && !_.isUndefined(query[item])) {
          queryDatabase[key] = query[item]
          keyFind = true
        }
      })

    } else if (_.isString(value) && !_.isUndefined(query[value])) {

      queryDatabase[key] = query[value]

    }

  })

  return queryDatabase

}
