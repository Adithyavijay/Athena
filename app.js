const express =require('express')
const app = express()
const adminRoute =require('./routes/adminRoute')
const userRoute =require('./routes/userRoute')




app.use('/admin',adminRoute)
app.use(userRoute)


app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found </h2>')
})
console.log('hellooo')
app.listen(3000,()=>{
    console.log('server running on port 3000')
})