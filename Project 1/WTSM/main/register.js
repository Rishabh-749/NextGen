import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDedV3A4cun9ZglV07rtDIwFuekHnFK6Yo",
    authDomain: "water1-ecf08.firebaseapp.com",
    databaseURL: "https://water1-ecf08-default-rtdb.firebaseio.com",
    projectId: "water1-ecf08",
    storageBucket: "water1-ecf08.appspot.com",
    messagingSenderId: "1026711593729",
    appId: "1:1026711593729:web:4fd960d1c7dfd231e33100",
    measurementId: "G-84Q80ZK9QT"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById('signupButton').addEventListener('click', async () => {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert(`User ${userCredential.user.email} signed up successfully!`);
    } catch (error) {
        console.error('Error signing up:', error);
        alert(`Error: ${error.message}`);
    }
});

document.getElementById('saveDataButton').addEventListener('click', async () => {
    const data = document.getElementById('dataInput').value;
    try {
        const docRef = await addDoc(collection(db, 'data'), {
            content: data,
            timestamp: new Date()
        });
        console.log('water1-ecf08: ', 1026711593729);
        document.getElementById('dataInput').value = '';
        loadData();
    } catch (error) {
        console.error('Error adding document: ', error);
    }
});

async function loadData() {
    const querySnapshot = await getDocs(collection(db, 'data'));
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const li = document.createElement('li');
        li.textContent = `${doc.data().content} - ${doc.data().timestamp.toDate()}`;
        dataList.appendChild(li);
    });
}

loadData();
