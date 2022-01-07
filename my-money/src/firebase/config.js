import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "yourApiKey",
  authDomain: "testing-123-c16fc.firebaseapp.com",
  projectId: "testing-123-c16fc",
  storageBucket: "testing-123-c16fc.appspot.com",
  messagingSenderId: "934001709223",
  appId: "your App Id",
  measurementId: "G-3L5DFDF70R"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }