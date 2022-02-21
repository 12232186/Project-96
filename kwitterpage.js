const firebaseConfig = {
    apiKey: "AIzaSyCHgTZMAyTAe0ZLuqkVo15iQX1Rgneg8Rs",
    authDomain: "kwitter-project-2e6fb.firebaseapp.com",
    databaseURL: "https://kwitter-project-2e6fb-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-2e6fb",
    storageBucket: "kwitter-project-2e6fb.appspot.com",
    messagingSenderId: "431013564926",
    appId: "1:431013564926:web:dfb6ebdfc347eb3fbcf0af"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }
  
  