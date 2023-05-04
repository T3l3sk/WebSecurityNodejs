const express = require('express');
const app = express();
const indexRouter = require('./routers/loginRouter.js');
const { engine } = require('express-handlebars');

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.use('/',indexRouter)

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
