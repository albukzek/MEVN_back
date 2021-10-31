const { Product } = require('../model')
const genericCrud = require('./generic.controller')


module.exports = {
    ...genericCrud(Product)
}