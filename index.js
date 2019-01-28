const { exec } = require('child_process');

const firebase = require('firebase');

const firebaseConfig = require('./firebase-config.json');

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseDatabase = firebase.database();
const ringRef = firebaseDatabase.ref('ring');

ringRef.on('value', function () {
  exec('python turn-motor.py', (error) => {
    console.log('error', error);
  });
  console.log('ring bell command here');
});