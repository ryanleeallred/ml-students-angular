// /*
//  * Send GET request with parameters from Angular
//  * https://angular.io/api/http/RequestOptionsArgs
//  */

// import { Http, Headers } from '@angular/http';

// // Prepare the header 
// let headers: Headers = new Headers();
// headers.set('parameter-name' , 'parameter-value');

// // Send request with parameters 
// url = 'https://cdn.rawgit.com/ryanleeallred/bcb3735f0221b60f8cf0ef9a453fb456/raw/bd1c3f598cf966f991d0a5e4140127c05fc3e403/students.json'

// this.http.get(url, {
//   headers: headers
// }).subscribe(res => resolve(res.json()));            

// // In order get the request value 
// let params = req.headers['parameter-name'];
//             


const functions = require('firebase-functions'); 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
exports.addMessage = functions.https.onRequest((req, res) => {
  const original = req.query.text;
  admin.database().ref('/messages').push({original: original}).then(snapshot => {
    res.redirect(303, snapshot.ref);
  });
});