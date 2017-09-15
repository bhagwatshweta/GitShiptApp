/* GET home page. */
exports.index = function(req, res){
  console.log('inside route')
  res.render('index', { title: 'Express' });
};
