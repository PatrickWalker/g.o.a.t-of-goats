const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const gcstore = require('@google-cloud/storage')()
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

exports.syncDBStorage = functions.storage.object.onChange(event => {
    const object = event.data
    const filePath = object.name; // File path in the bucket.
    const resourceState = object.resourceState; // The resourceState is 'exists' or 'not_exists' (for file/folder deletions).
    const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.
    const metaData = object.metadata
    // Exit if this is a move or deletion event.
    if (resourceState === 'not_exists') {
    console.log('This is a deletion event.');
    return;
    }

    // Exit if file exists but is not new and is only being triggered
    // because of a metadata change.
    if (resourceState === 'exists' && metageneration > 1) {
    console.log('This is a metadata change event.');
    return;
    }
    //Ok at this point we know it's a creation event and we have metadata so we should pull our custom ID 
    var ImageID = metaData['customMetadata']['ID']
    //We also really want the download URL as well so we should create a storage ref and grab it
    var downUrl = storage.ref(filePath).getDownloadURL()
    
    const imageRef = ref.child('/goats/${ImageID}')
    return imageRef.update({
        downloadUrl: downUrl,
        filePath: filePath
    })
    
})