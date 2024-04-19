const express = require("express");
const { sequelize } = require("./schema/connect");
const { Qoutes } = require("./schema/qoutes");

const cors = require("cors");
const app = express();

app.use(express.json());

// for connecting backend with frontend
app.use(cors());

// to get all qoutes 
app.get("/", async (req, res) => {
    try {
        const data = await Qoutes.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

app.get('/home', (req, res) => {
    res.send("this is home page")
})


//adding new qoutes
app.post("/qoutes", async (req, res) => {
    const payload = req.body;

    try {
        const data = await Qoutes.create(payload);
        res.status(200).send({ msg: "qoutes added", data: data });
    } catch (error) {
        console.log(error);
    }

});


//  connection string for connecting to mysql database
sequelize.sync().then(() => {
    app.listen(2500, () => {
        console.log("Server is running at port 2500");
        console.log("connected to mysql database");
    })
})