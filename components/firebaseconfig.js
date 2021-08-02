import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'

const APIKEY = process.env.API_KEY
const AUTHDOMAIN = process.env.AUTH_DOMAIN
const PROJECTID = process.env.project_ID 
const STORAGEBUCKET = process.env.storagebucket
const MESSAGESENDINGID = process.env.messagesendingid
const APPID = process.env.appid
const MEASUREMENTID = process.env.measurementid

const firebaseConfig = {
    apiKey: "AIzaSyC0r_IIO7sq5rKR3waqpyce4oFFBEhmexE",
    authDomain: "dating-app-login-4f42d.firebaseapp.com",
    projectId: "dating-app-login-4f42d",
    storageBucket: "dating-app-login-4f42d.appspot.com",
    messagingSenderId: "250459106047",
    appId: "1:250459106047:web:7ed0a737595af75c87baca",
    measurementId: "G-G2NNDCJXFV"
}

firebase.initializeApp(firebaseConfig)


