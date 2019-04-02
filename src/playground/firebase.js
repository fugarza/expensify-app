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

// get a reference to the root of the database
const database = firebase.database()

// wipe database clean
database.ref().remove()
database.ref('expenses').push({
  description: 'Wahoo tickr fit',
  note: 'heart rate monitor',
  amount: 7900,
  createdAt: '4/6/19'
})
// get data
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) =>{
//     const expenses = []

//     snapshot.forEach((childSnapshot) =>{
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
// })

// child_removed subscription
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

//child_added
// anytime child is added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('value', (snapshot) => {
  const expenses = []

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
})

database.ref('expenses').push({
  description: 'Coffee',
  note: '',
  amount: 1900,
  createdAt: '4/6/19'
})


// use push to create object with unique id
// database.ref('notes').push({
//   title: 'Study Javascript',
//   body: 'read about arrays'
// })

// const firebaseNotes = {
//   notes: {
//     abc123: {
//       title: 'first note',
//       body: 'this is the 1st note'
//     }, 
//     abc124: {
//       title: '2nd note',
//       body: 'this is the 2nd note'
//     }
//   }
// };

// database.ref().set(firebaseNotes)

// // delete database
// database.ref().remove()

// // create database
// database.ref().set({
//   name: 'Ron Gaza',
//   age: 42,
//   isSingle: false,
//   location: {
//     city: 'Danville',
//     state: 'CA'
//   },
//   job: {
//     company: 'Cal State Davis',
//     title: 'Student',
//     stressLevel: 0
//   }
// })

// update a specific property
// database.ref('age').set(43)

// // update multipe properties
// database.ref().update({
//   name: 'Karen Gaza',
//   age: 37
// })
// // udpate a nested object
// database.ref('location/city').set('San Diego')

// //remove specific attribute
// database.ref('age').remove()
// // add age back in
// // database.ref('age').set(42)

// //subscription to db to be notified of changes
// // 'value is an eventType
// // choices can be 'child_added', child_changed, child_moved etc..
// database.ref().on('value', (snapshot) =>{
//   const data = snapshot.val()
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// })

// database.ref('age').set(42)
// // get data snapshot at root of database

// database.ref()
//   .once('value')
//   .then((snapshot) =>{
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((error) => {
//     console.log('error fetching data')
//   })

// notify to changes in database
// can set it to a value and pass it along
// can also pass in error notification messageing
// const onValueChange = database.ref().on('value', (snapshot) =>{
//   console.log("subscription notice", snapshot)
// }, (error) =>{
//   console.log(error)
// })


// remove data with null
// database.ref('attributes').set(null)

// database.ref().set({
//   name: 'Ron Gaza',
//   age: 42,
//   isSingle: false,
//   location: {
//     city: 'Danville',
//     state: 'CA'
//   }
// }).then(() =>{
//   console.log('Data is saved!');
// }).catch((error) =>{
//   console.log('this failed', error)
// })

// database.ref('age').set(27);
// database.ref('location/city').set('San Francisco')


// setup then and catch
// then is a function that runs after something has been done
// catch is a function that runs if there is an error

// database.ref('attributes').set(
//   {
//     height: 65,
//     weight: 180
//   }
// ).then(() =>{
//   console.log("height and weight has been set")
// }).catch((error) => {
//   console.log('Operation failed', error)
// })