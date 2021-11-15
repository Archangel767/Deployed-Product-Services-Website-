const express = require('express');
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Image = require('../models/image');
const Member = require('../models/member');
const Subscriber = require('../models/subscriber');

// Image Entry route

app.get('/gallery', (req, res) => {
  let image = null
  Image.find((err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    }
    else {
      image = data
      console.log(data)
      if (typeof image !== 'undefined' && Array.isArray(image)) {
        res.send(image)
      } else {
        res.status(404)
        res.send({ error: 'File Not Found' })
      }
    }
  })
})

// Image Item Route:

app.get('/gallery/:name', (req, res) => {
  let image
  Image.findOne({ name: req.params.name }, function (err, data) {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      image = data
      console.log(image)
      if (typeof image === 'object' && image !== null) {
        res.send(image)
      } else {
        res.status(404)
        res.send({ error: 'File Not Found' })
      }
    }
  });
})

// Member Entry route

app.get('/member', (req, res) => {
  let member = null
  Member.find((err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    }
    else {
      member = data
      console.log(data)
      if (typeof member !== 'undefined' && Array.isArray(member)) {
        res.send(member)
      } else {
        res.status(404)
        res.send({ error: 'File Not Found' })
      }
    }
  })
})

// Member Item Route:

app.get('/member/:name', (req, res) => {
  let member
  Member.findOne({ name: req.params.name }, function (err, data) {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      member = data
      console.log(member)
      if (typeof member === 'object' && member !== null) {
        res.send(member)
      } else {
        res.status(404)
        res.send({ error: 'File Not Found' })
      }
    }
  });
})

// Subscriber Entry route

app.get('/subscriber', (req, res) => {
  let subscriber = null
  Subscriber.find((err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    }
    else {
      subscriber = data
      console.log(data)
      if (typeof subscriber !== 'undefined' && Array.isArray(subscriber)) {
        res.send(subscriber)
      } else {
        res.status(404)
        res.send({ error: 'File Not Found' })
      }
    }
  })
})

// Subscriber Item Route:

app.get('/subscriber/:name', (req, res) => {
  let subscriber
  Subscriber.findOne({ name: req.params.name }, function (err, data) {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      subscriber = data
      console.log(subscriber)
      if (typeof subscriber === 'object' && subscriber !== null) {
        res.send(subscriber)
      } else {
        res.status(404)
        res.send({ error: 'File Not Found' })
      }
    }
  });
})


// app.post('/subscriber', function(request, response){
//   const subscriber = new Subscriber(req.body);

//   subscriber.save(function(error, data){
//     if(error){
//       res.send('Problem submitting form. please try again.');
//     }
//     res.send('Subscriber created!');
//   })
// });

app.post('/subscriber', async (req, res) => {

  try {
    const subscriber = new Subscriber(req.body)
  
    await subscriber.save()
  
    console.log(subscriber)
    res.send('Subscriber created!')

  } catch(err) {

    console.log(err)
    res.send('Problem submitting form. please try again.')
    
  }
})

module.exports = app




