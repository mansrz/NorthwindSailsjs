/**
 * CustomersController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  get: function(req, res){
    Customers.find({}).exec(function findCB(err, found){
      return res.json({result: found});
    });
  }
};

