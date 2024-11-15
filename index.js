import express from 'express';

const app= express();
// app.get('/',(req,res)=>{
//     res.send("server is ready");
// })
//for login
// app.get('/login',(req,res)=>{
//     res.send("Login is ready");
// })
//list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "The Programmer's Joke",
          content: "I tried to catch depression, but it slipped through my fingers."
        },
        {
          id: 2,
          title: "The Mathematician's Joke",
          content: "I used to think I was indecisive, but now I'm not so sure."
        },
        {
          id: 3,
          title: "The Physicist's Joke",
          content: "I'm reading a book about anti-gravity. It's impossible to put down."
        },
        {
          id: 4,
          title: "The Chemist's Joke",
          content: "I tried to make water dance, but it just waved."
        },
        {
          id: 5,
          title: "The Engineer's Joke",
          content: "I used to think I was indecisive, but now I'm not so sure."
        }
      ];
      
      res.send(jokes)
      console.log(jokes)
})
const port = process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
})
