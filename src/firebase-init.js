import Firebase from 'firebase'

const fbconfig = {
  apiKey: 'AIzaSyDUa6J_cBuWIKbXPKdb7DzbJFbGIYR_BdY',
  authDomain: 'gdgbelfast-cb650.firebaseapp.com',
  databaseURL: 'https://gdgbelfast-cb650.firebaseio.com',
  projectId: 'gdgbelfast-cb650',
  storageBucket: 'gdgbelfast-cb650.appspot.com',
  messagingSenderId: '431499896844'
}
export const firebaseApp = Firebase.initializeApp(fbconfig)

export const storage = firebaseApp.storage()
export const db = firebaseApp.database()
export const auth = firebaseApp.auth()
