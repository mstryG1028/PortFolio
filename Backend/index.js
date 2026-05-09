
require("dotenv").config();
const express=require("express");
const app=express();
const port=9000;

const cors = require("cors");
const sql=require("mysql2");

app.use(cors());
app.use(express.json());

const conn=sql.createConnection({
    host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

conn.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("successfully connected")

})



app.get("/",(req,res)=>{
    res.send("heloo from backend")
})

app.get("/message", (req, res) => {

  const q = "SELECT * FROM messageTable";

  conn.query(q, (err, result) => {

    if(err){

      console.log(err);

      return res.status(500).json({
        success: false
      });

    }

    res.status(200).json(result);

  });

});
app.post("/message", (req, res) => {

  const { name, email, message } = req.body;

  const q = `
    INSERT INTO messageTable(name,email,message)
    VALUES(?,?,?)
  `;

  conn.query(q, [name, email, message], (err, result) => {

    if(err){

      console.log(err);

      return res.status(500).json({
        success: false
      });

    }

    res.status(200).json({
      success: true
    });

  });

});

app.delete("/message/:id", (req, res) => {

  const { id } = req.params;

  const q = "DELETE FROM messageTable WHERE id = ?";

  conn.query(q, [id], (err, result) => {

    if(err){

      console.log(err);

      return res.status(500).json({
        success: false
      });

    }

    res.status(200).json({
      success: true
    });

  });

});




app.listen(port,()=>{
    console.log(`Listening at:${port}`)
})