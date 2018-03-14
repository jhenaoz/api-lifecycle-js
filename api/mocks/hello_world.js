module.exports = {
  hello: hello
};

function hello(req, res) {
  const hello = 'Hello, juan';
  res.json(hello);
}
