import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREABASE_AUTH_DOMAIN,
  databaseURL: process.env.FIRABASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: FIREABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
};
firebase.initializeApp(config);

// get a reference to the root of the database
const database = firebase.database()

export {firebase, database as default};