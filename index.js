const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/find",(req,res)=>{
	let n1 = parseFloat(req.query.num1);
	let n2 = parseFloat(req.query.num2);
	let ans = n1+n2;
	let msg="addition is="+ans.toFixed(2);
	res.json({"msg":msg});
});

app.listen(8000,()=>{console.log("ready to serve @ port 9000");});


