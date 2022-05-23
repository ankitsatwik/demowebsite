

const express = require("express");

const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFFnpm
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug',params);
})
app.get('/Contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug',params);
})
app.post('/Contact',(req,res)=>{
    n=req.body.name;
    phone=req.body.phone;
    address=req.body.address;
    more=req.body.details;
    email=req.body.email;

    let output=`Name of the person is ${n}, Phone number is ${phone}and address is ${address}, More details about him/her is ${more}, Email id is ${email}`;
    fs.writeFileSync('output.txt',output);
    // console.log(req.body); //this is used to execute the data in the terminal section...
    const params={'message':'The form has been submitted succesfully'}
    res.status(200).render('contact.pug',params);
})
app.listen(port,()=>{
    console.log(`Application has started in port ${port}`);
})