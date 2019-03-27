import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBJyd12h3MJpc6o4Gm0Esho_PmWaHiRoKk",
  authDomain: "expensify-d738b.firebaseapp.com",
  databaseURL: "https://expensify-d738b.firebaseio.com",
  projectId: "expensify-d738b",
  storageBucket: "expensify-d738b.appspot.com",
  messagingSenderId: "906724646547"
};
firebase.initializeApp(config);

const database = firebase.database()
database.ref().set({
  name: 'Ron Gaza',
  age: 42,
  isSingle: false,
  location: {
    city: 'Danville',
    state: 'CA'
  }
})

database.ref('age').set(27);
database.ref('location/city').set('San Francisco')
// database.ref('attributes/height').set(65)
// database.ref('attributes/weight').set(180)

database.ref('attributes').set(
  {
    height: 65,
    weight: 180
  }
)