const { Category } = require('../model')
const genericCrud = require('./generic.controller')


module.exports = {
    ...genericCrud(Category)
}