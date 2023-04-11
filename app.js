const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')))

router.get('/',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'views','index.html'));
})
router.get('/about',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'views','about.html'));
})

router.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.use(router);

app.listen(8000,() => {
    console.log('Running on 8000')
})