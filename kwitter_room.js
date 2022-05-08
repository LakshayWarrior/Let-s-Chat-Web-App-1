
var firebaseConfig = {
      apiKey: "AIzaSyCdUwyS0jLa4JjlMnkM0FjPmrH9WDaK11w",
      authDomain: "kwitter-ec612.firebaseapp.com",
      databaseURL: "https://kwitter-ec612-default-rtdb.firebaseio.com",
      projectId: "kwitter-ec612",
      storageBucket: "kwitter-ec612.appspot.com",
      messagingSenderId: "349789344795",
      appId: "1:349789344795:web:08fcdf9be123deb49654be"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      console.log("Room names - " + room_name);
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomnames(this.id)'>#"+room_name+"<div><hr>";
      document.getElementById("output").innerHTML+= row;;
      //End code
      });});}
getData();
function redirectToRoomnames(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function login(){
      localStorage.addItem("user_name");
}