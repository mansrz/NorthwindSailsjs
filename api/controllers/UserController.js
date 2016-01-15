/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  get: function(req, res){
    User.find({}).exec(function (err, found){
      return res.json({result: found});
    });
  },
};

