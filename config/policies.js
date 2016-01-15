
module.exports.policies = {

   '*': true,

  'PostController': {
    '*': 'isAuthenticated'
  },
  'UserController':{
    '*': true,
  },
  'OrdersController':{
    '*': 'isAuthenticated',
  }
};
