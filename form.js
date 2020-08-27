
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDHPP3gpUUd12jvztAQ4GnwTPmKQzVH2mY",
    authDomain: "c34-project-7ceb7.firebaseapp.com",
    databaseURL: "https://c34-project-7ceb7.firebaseio.com",
    projectId: "c34-project-7ceb7",
    storageBucket: "c34-project-7ceb7.appspot.com",
    messagingSenderId: "555211842432",
    appId: "1:555211842432:web:b82c5bfa42ea85da125765"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();


  function signUp() {

      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e => alert(e.message));

      alert("Signed Up");
    }


    function signIn() {

        var email = document.getElementById("email");
        var password = document.getElementById("password");
  
        const promise = auth.signInWithEmailAndPassword(email.value,password.value);
        promise.catch(e => alert(e.message));
  
        

        //Take user to a different or home page


    }


    function signOut(){

        auth.signOut();
        alert("Signed Out")

    }



    auth.onAuthStateChanged(function(user){

     if(user){

        var email = user.email;
        alert("Active User"+email);


        //is signed in

      }else{

         alert("No Active User");

        //no user is signed in
      }



    });








