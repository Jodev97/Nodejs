const express = require('express')
const morgan = require('morgan')
const path = require('path')


const app = express()

app.set('port',process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(express.json())

app.use('/dishes', require('./routes/dishRouter'));
app.use('/promotions', require('./routes/promoRouter'));
app.use('/leaders', require('./routes/leaderRouter'));

app.use(express.static(path.join(__dirname,'public')))
app.listen(app.get('port'),()=>{
    console.log('Server on port: ',app.get('port'))
})
