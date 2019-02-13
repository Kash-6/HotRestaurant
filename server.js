// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations and Waiting List
// =============================================================

var reservations = [
  {
    customerName: "Quincy",
    phoneNumber: "215-123-4567",
    customerEmail: "quincy@ihe.me"
  },
  {
    customerName: "Anh",
    phoneNumber: "215-765-4321",
    customerEmail: "anh@penn.edu"
  },
  {
    customerName: "Tony",
    phoneNumber: "215-010-1010",
    customerEmail: "tony@penn.edu"
  }
];

var waitingList = [
    {
      customerName: "Brandon",
      phoneNumber: "215-123-4567",
      customerEmail: "brandon@email.com"
    }
  ];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
}); 

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

// Displays all reservations
app.get("/api/reservations", function(req, res) {
  return res.json(reservations); 
});

// Displays waiting list
app.get("/api/waitlist", function(req, res) {
  return res.json(waitingList); 
});

app.post("/api/reserve", function(req, res) {

 var newReservation = req.body;

 if (reservations.length < 5) {
   reservations.push(newReservation);
   res.json(newReservation);
 }
 else {
   waitingList.push(newReservation);
 }

});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});