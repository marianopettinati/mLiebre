const express = require('express');
const app = express();
app.use(express.static('public'));

const port = process.env.PORT || 4000;

const publicFolderPath = path.resolve(__dirname, "./public")
app.use(express.static(publicFolderPath));


app.listen (port, ()=> {
    console.log("Servidor online")
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res) =>
    res.sendFile (__dirname + '/views/register.html')
)

app.get('/login', (req,res) =>
    res.sendFile (__dirname + '/views/login.html')
)

app.get('/new-product', (req,res) =>
    res.sendFile (__dirname + '/views/new-product.html')
)