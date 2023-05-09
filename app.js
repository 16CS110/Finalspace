const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

const pubDir = path.join(__dirname, './public')
const viewDir = path.join(__dirname, './templates/views')
const partialsDir = path.join(__dirname, './templates/parti')

app.set('view engine', 'hbs');
app.set('views', viewDir);
hbs.registerPartials(partialsDir);

app.use(express.static(pubDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Final Space',
        name: 'Thejas T Gowda'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Thejas T Gowda'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some useful text.',
        title: 'Help',
        name: 'Thejas T Gowda'
    })
})

app.listen(8000, () => {
    console.log('Server is up on port 8000.')
})