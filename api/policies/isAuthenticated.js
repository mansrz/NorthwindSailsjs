module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
      console.log('dd');
      return next();
    }
    else{
        return res.redirect('/login');
    }
};
