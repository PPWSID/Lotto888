//----------- Require Router -----------// 


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


//------- PORT ------//


module.exports = server
