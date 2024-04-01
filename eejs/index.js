import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();//its an javascript object which stores date as data you can give a date in it as argument

  const day = today.getDay();//this javascript function will get the day (mon ,wed ,sat) according to our system date(sunday=0,mon=1,tue=2 etc.)

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {//if its sunday and saturday
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("solution.ejs", { //this data will go to solution .ejs file and it will be displayed
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
