
const util = require('util');


function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  const name = req.swagger.params.name.value || 'stranger';
  const hello = util.format('Hello, %s!', name);
  
  // this sends back a JSON response which is a single string
  res.json(hello);
}

module.exports = {
  hello: hello
};