//----------- Require Router -----------// 
require('./config/config')


//----------- Require Router -----------// 
const Login = require('./route/login')
const Register = require('./route/register')


//---- Config -----//
const app = express()
app.use(bodyParser.json({limit: '512mb'}));
app.use(bodyParser.urlencoded({limit: '512mb', extended: true}));
app.use(express.json())

app.use(cors())


app.get('/', (req, res) => {
  res.send('Welcome to Lotto888')
})



//------------- Route -------------//
app.use('/login',Login)
app.use('/register',Register)




//------- PORT ------//

console.log('[success] task 1 start service port : ' + GLOBAL_VALUE.NODE_PORT)
const server = app.listen(GLOBAL_VALUE.NODE_PORT).on('error', err => {
    console.log(err)
})



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});


module.exports = server
