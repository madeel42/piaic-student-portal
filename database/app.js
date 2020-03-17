const express = require("express");
const app = express();
let bd = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bd.json());
////////////////////////////for roboAtlas  ////////////
// mongoose.connect('mongodb+srv://adeel123:adeel123@devconnector-pdmbx.mongodb.net/test', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err, data) => {
    // console.log(err || data);
    // console.log('mongodb connected')
// })
////////////////////for locally save data////////////////
mongoose.connect("mongodb://localhost:27017/test").then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
    });
///////////////////////////////////////////////
/////Bring all Routes Here////////////
//////////////////////////////Course_Routes/////////
let { createCourseData } = require("./routes/course");
let { courseDataById } = require("./routes/course");
let { getAllCourseData } = require("./routes/course");
let { getSingleCourse } = require("./routes/course");
let { deleteData } = require("./routes/course");
let { updateCourse } = require("./routes/course");
// let {getQuarterData} = require('./routes/quarter')
/////////////////////////Quarter_Routes////////////////
let { fetchQuarterDataById } = require("./routes/quarter");
let { getQuaterData } = require("./routes/quarter");
let { CreateQuaterData } = require("./routes/quarter");
let { getDetails_By_Quarter_Name } = require("./routes/quarter");
let { singleQuaterData } = require("./routes/quarter");
let { updateQuarterData } = require("./routes/quarter");

//////////////////Routes end/////////////////////////
/////////////////////////Quarter_Routes//////////////
app.post("/createCourse", createCourseData);
app.get("/getSingleCourse/:courseId", getSingleCourse);
app.put("/updateCourse/:courseId", updateCourse);
app.get("/getCourseData", getAllCourseData);
app.delete("/deleteCourseData/:courseId", deleteData);
app.param("courseId", courseDataById);
// app.post('/createQuarterData',CreateQuaterData)
/////////////////////////Quarter_Routes//////////////////
app.post("/createQuarterData/:courseId", CreateQuaterData);
// app.post('/createQuater', getQuarterData);
app.get("/getQuaterData", getQuaterData);
app.get("/quarterAllDetails/:courseId", getDetails_By_Quarter_Name);
app.get("/QuaterDataById/:quarterId", singleQuaterData);
app.put("/updateQuarterData/:quarterId", updateQuarterData);
app.param("quarterId", fetchQuarterDataById);

const port = 9000;
app.listen(port, () => {
  console.log("server started");
});
