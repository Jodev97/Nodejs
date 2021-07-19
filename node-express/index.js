const express = require('express')
const morgan = require('morgan')
const app = express()

app.set('port',process.env.PORT || 3000)

app.use(morgan('dev'))

app.use(express.static(__dirname+'/public'))
app.use((req,res,next)=>{
    
    res.statusCode=200
    res.setHeader('Content-type','text/html')
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')

})
app.listen(app.get('port'),()=>{
    console.log('Server on port: ',app.get('port'))
})
