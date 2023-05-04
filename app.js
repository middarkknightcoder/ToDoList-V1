// Why we need a templets -- When you are creted a blog website that time you need to send many html file that time you can used html templet file so don't need to write same code all time
// EJS(Embeeded javascript) - This is used for make a templets of the html emposed html file
// res.send("<h1>yoo! I have work</h1>"); This is send only one html line
// res.sendFile(__dirname + "/index.html"); // This is used when you need to send the many html lines

const express = require("express")
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var items = ["Buy Domain", "Get Domain" ," Use Domain"]; // Here items is declare globley


app.get("/", function (req, res) {

    //Here used Data object this is give the current day information
    var Today = new Date(); // This is write the current date

    //getDay() method is used for give a number 0 to 6 wise day
   //  var currentDay = Today.getDay();

   //  var day = ""; // Here taken one empty string for storing data and send the data into the ejs templets

   //  // Here we are used ejs templet for the print the day using current day

   //  if (currentDay === 1) {

   //      day = "Monday";

   //  }
   //  else if(currentDay === 2) {

   //     day = "Tuesday";

   //  }
   //  else if(currentDay === 3) {

   //     day = "Wednesday";

   //  }
   //  else if(currentDay === 4) {

   //     day = "Thursday";

   //  }
   //  else if(currentDay === 5) {

   //     day = "Friday";

   //  }
   //  else if(currentDay === 6) {

   //     day = "Saturday";

   //  }
   //  else if(currentDay === 0) {

   //     day = "Sunday";

   //  }
   //  else {

   //      res.send("Some kind of Error in server !");
   //  }

   const option = { // This is how represent the structure of the date

      weekday: "long",
      day: "numeric",
      month: "long",
      year:"numeric"
   }

   var day = Today.toLocaleDateString("en-US", option);

   res.render("list", { kindOfDay: day ,newListItems: items}); // render method is represet the emposed html file or EJS templet html file in the server 

});

app.post("/", function (req, res) {
   
   var item = req.body.newItem;

   items.push(item);

   res.redirect("/"); // After the all changes redirect the all data into the hoem root route

});



app.listen(3000, function () {
    
   console.log("Server is live on 3000 port");
});