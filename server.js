const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  res.send("This is my response.")
})
app.get('/greeting', (req, res)=>{
  res.send("What's your name, you handsome devil?")
}
)
app.listen(9000, ()=>{
  console.log("server is listening on port 3000.")
})
