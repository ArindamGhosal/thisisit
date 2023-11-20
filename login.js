
// import { getAuth, signInWithRedirect } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2n08_FOeIGz100L_9lGtvQJNRhdrpY5U",

    authDomain: "school-website-f7bad.firebaseapp.com",

    projectId: "school-website-f7bad",

    storageBucket: "school-website-f7bad.appspot.com",

    messagingSenderId: "92715865877",

    appId: "1:92715865877:web:6809fb0644372b437dbb1c",

    measurementId: "G-CSK54CW5TF"

});
const db=firebase.firestore();
const auth=firebaseApp.auth();


const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email,password)
    .then((res) =>{
        console.log(res.user)
    })

    .catch((err) =>{
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })

    // console.log(email,password)

}

const login = () =>{
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email,password)
    .then((res) =>{
        console.log(res.user)
    })
    

    .catch((err) =>{
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
    if(email=='rkghmnarhatta@gmail.com'&& password=='Agl12345'){
        window.location.assign('resources.html');
        alert("Login Successfully");
    }
    else{
        alert("Home page not allowed");
        return;
    }
}
const saveData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    db.collection('users')
    .add({
        email:email,
        password:password
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

}
const readData = () => {
    db.collection('users')
    .get()
    .then((data) => {
        console.log(data.docs.map((item) => {
            return {...item.data(), id: item.id}
        }))
    })
}

const updateData = () => {
    db.collection('users').doc('7cD6VNZWHPaTieRXmsyN')
    .update({
        email: 'ashishisagoodboy1234@gmail.com',
        password: '123456'
    })
    .then(() => {
        alert('Data Updated')
    })
}

const deleteData = () => {
    db.collection('users').doc('TZf3TlQHE8O5kMAHI9kIEySIads2').delete()
    .then(() => {
        alert('Data Deleted')
    })
    .catch((err) =>{
        console.log(err)
    })
}
// }
// const loginWithGoogle= () => {
    

//     const provider = new GoogleAuthProvider();
//     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    

// const auth = getAuth();
// auth.languageCode = 'it';
// // To apply the default browser preference instead of explicitly setting it.
// // firebase.auth().useDeviceLanguage();
// provider.setCustomParameters({
//     'login_hint': 'user@example.com'
//   });
  

// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
  

//   const auth = getAuth();
//   signInWithRedirect(auth, provider);
//   import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

// const auth = getAuth();
// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

//   };

// async function loginWithGoogle(){
//     try{
//       var provider = new firebase.auth.GoogleAuthProvider();
//     const result =  await firebase.auth()
//     .signInWithPopup(provider)  
//     console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }

const loginWithGoogle= () =>{
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  firebase.auth().signInWithRedirect(provider);

  firebase.auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
