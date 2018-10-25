const express = require('express')
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';


app.get("/api/whoami", function(req, res){
  try{
    res.json({ "ipaddress": req.ip, "language": req.headers['content-language'], "software": req.headers['user-agent'] })
  }
  catch(err) {
    res.json({"error": "Invalid Value"})
  }
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);