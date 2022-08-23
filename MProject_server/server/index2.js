import dotenv from 'dotenv'
import  express, { response }  from "express"
dotenv.config()

const app = express()
const port = process.env.PORT || 3008

app.listen(port,()=> console.log('Server listening on port'+port))
app.get('/', responseText);
app.get('/json',responseJson)
app.use('*',responseNotFound)

function responseText(req, res) {
    res.setHeader('Context-Type','text/plain')
    res.end('Mini PROJECT DUDE')
}

function responseJson(req, res) {
    res.json(
        {
            employee:{
                empId :100,
                firstname : "apip",
                lastname : "rizqon"
            }
        }
    )
}

function responseNotFound(req,res) {
    res.writeHead(404,{'Context-Type' : 'text/plain'})
    res.end('Page Not Found')
}