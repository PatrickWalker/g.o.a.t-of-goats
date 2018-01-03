const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const ref = admin.database().ref()

exports.createUserAccount = functions.auth.user().onCreate(event => {
    const uid = event.data.uid
    const email = event.data.email
    const newUserRef = ref.child('/users/${uid}')
    return newUserRef.set({
        email: email
    })
})

exports.cleanupUser = functions.auth.user().onDelete(event => {
    const uid = event.data.uid
    const email = event.data.email
    const UserRef = ref.child('/users/${uid}')
    return newUserRef.update({
        deleted: true
    })
})