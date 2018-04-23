// ------------
// Dependencies
// ------------

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// -------
// Calling
// -------

// -----------------
// View Engine Setup
// -----------------

app.use(express.static(path.join(__dirname + '/public')));
app.set('view engine', 'ejs');

// -----------------
// Body-parser Setup
// -----------------

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ------------------
// Routes - Hungarian
// ------------------

app.get('/', (req, res) => {
    res.render('landing');
});

// -----------
// Referencies
// -----------

app.get('/studio-disorder', (req, res) => {
    res.render('references/studio-disorder');
});

app.get('/street-sphere', (req, res) => {
    res.render('references/street-sphere');
});

app.get('/novelith-arts', (req, res) => {
    res.render('references/novelith-arts');
});

// -------------
// Blog Articles
// -------------

app.get('/main-blog/ot-tipp-hogy-jobb-programozova-valj', (req, res) => {
    res.render('main-section/blog-section/ot-tipp');
});

app.get('/main-blog/ui-ux-dizajn', (req, res) => {
    res.render('main-section/blog-section/ui-ux-dizajn');
});

app.get('/main-blog/kuzdelmek-es-aggodalmak', (req, res) => {
    res.render('main-section/blog-section/kuzdelmek-aggodalmak');
});

app.get('/main-blog/webfejlesztes-2018-ban', (req, res) => {
    res.render('main-section/blog-section/webfejlesztes-2018-ban');
});

// ----------------
// Routes - English
// ----------------

app.get('/en', (req, res) => {
    res.render('en/landing-en');
});

// ------------------
// Port Configuration
// ------------------

const port = 4200 || process.env.PORT;

app.listen(port, (req, res) => {
    console.log('Server has started on port ' + port + ".");
});