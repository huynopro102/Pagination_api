const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const modelitem = require('./model/connectDB')
const app = express()
app.use( jsonParser = bodyParser.json() )
app.use( urlencodedParser = bodyParser.urlencoded({ extended: true }) )

//err cors
app.use(cors())

// morgan
app.use(morgan('combined'))

// đường dẫn đến thư mục public express.static(path.join(__dirname,'public') 
// '/public' là router để truy cập đến file static
app.use('/public',express.static(path.join(__dirname,'/public')))
app.use('/img',express.static(path.join(__dirname,"/img")))

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
    // đọc file ở thư mực public 
})
    const PAGE_SIZE = 2
app.get('/user',(req,res)=>{
   let page = req.query.page
   page = parseInt(page)
   if(page ){
       if(page < 1 ){
           page = 1
        }
        const skip = (page-1)* PAGE_SIZE
        modelitem.find({})  
        .skip(skip)
        .limit(PAGE_SIZE)
        .then(data=>{
            const currentdata = data
            modelitem.find({})
            .then(data=>{
                const totalPage = Math.floor( data.length )
                console.log(totalPage)
              res.send({
                data : currentdata , 
                total : totalPage 
              })
            })
           
        })
        .catch(data=>{
            res.status(200).send("errer");
        })
    }else{
        modelitem.find({})
        .then(data=>{
            res.send("tim all " + data)
        })
        .catch(data=>{
            res.status(200).send("error");
        })
    }
})
app.listen('3333',(req,res)=>{
    console.log("server listening .... ")
})
