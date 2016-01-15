var passport = require('passport');
var soap = require('soap');
var url = 'https://ws.espol.edu.ec/saac/wsandroid.asmx?WSDL';

module.exports = {
  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },
  login: function(req, res) {
    var username = req.param('email').split('@')[0];
    var password = req.param('password');
    soap.createClient(url,function(err,client){
      client.autenticacion(
        {authUser: username, authContrasenia: password},
        function(err,result){
          console.log(result);
          if (result.autenticacionResult){
            User.findOrCreate({email:req.param('email'),password: password}).exec(function createFindCB(err, record){
              passport.authenticate('local', function(err, user, info) {
                if ((err) || (!user)) {
                  return res.send({
                    message: info.message,
                    user: user
                  });
                }
                req.logIn(user, function(err) {
                  if (err) res.send(err);
                  res.redirect('/orders/list');
                });
              })(req, res);
            });
          }
          console.log(result);
          // return res.json({resultado: result});
        });
    });
  },
  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  }
};

