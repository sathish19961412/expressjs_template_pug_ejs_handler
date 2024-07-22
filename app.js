const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')))

//Template Engine Pug Set
app.set('view engine','ejs');

router.get('/',(req,res,next)=>{
    const courses=[
        {name:'PHP'},
        {name:'Python'},
        {name:'Javascript'},
        {name:'Nodejs'},
        {name:'Reactjs'},
        {name:'Angular'},
        {name:'Vuejs'}
    ]
    res.status(200).render('index',{
        docTitle: "Welcome To Sathish",
        courses,
        path:'index'
    })
})
router.get('/about',(req,res,next)=>{
    const courses=[
        {name:'PHP'},
        {name:'Python'},
        {name:'Javascript'},
        {name:'Nodejs'},
        {name:'Reactjs'},
        {name:'Angular'},
        {name:'Vuejs'}
    ]
    res.status(200).render('about',{
        active:true,
        docTitle: "About Page",
        courses,
        path:'about'
    });
})

router.use((req,res,next)=>{
    res.status(200).render('404',{
        docTitle:'404 Page Not Found',
        path:'404'
    });
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.use(router);

app.listen(3000,() => {
    console.log('Running on 3000')
})