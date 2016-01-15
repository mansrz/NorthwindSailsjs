/**
 * OrdersController
 *
 * @description :: Server-side logic for managing Orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  get: function(req, res){
    Orders.find({}).exec(function (err, found){
      return res.json({result: found});
    });
  },
  list: function(req, res){
    orders = {};
    Orders.find({}).populate('CustomerID').exec(function(err, orders){
      res.view({orders: orders});
    });
  },
};

