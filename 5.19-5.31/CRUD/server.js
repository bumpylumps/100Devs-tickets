const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://bumpyLumps:colliedog2@cluster0.rjwgj.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true})
 .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs')


    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))

    app.put('/quotes', (req, res) => {
        quotesCollection.findOneAndUpdate(
            {name: 'Jackson'},
            {
                $set: {
                    name: req.body.name,
                    quote: req.body.quote
                }
            },
            {
                upsert: true
            }
        )
        .then(result => { 
            res.json('Success')
        })
        .catch(error => console.error(error))
    }
    )
 
    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
        .then(results => {
            res.render('index.ejs', { quotes: results })
        })
        .catch(error => console.error(error))
        
        })
    
    app.post('/quotes', (req,res)=> {
        quotesCollection.insertOne(req.body)
        .then(result => {
            res.redirect('/')
        })
        .catch(error => console.error(error))
        })

    app.delete('/quotes', (req, res) => {
        quotesCollection.deleteOne(
            {name: req.body.name}
        )
        .then(result => {
            if(result.deletedCount === 0){
                return res.json('No quote to delete')
            }
            res.json(`Deleted Barry's quote`)
        })
        .catch(error => console.error(error))
    })
    
    
    app.listen(3000, function() {
    console.log('listening on 3000')})
    })




