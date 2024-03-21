const express = require("express");
const app = express();
console.dir(app);

// app.use((req, res) => {
//   console.log("We got a new Request");
//   res.send("<h1>This is my webpage!</h1>");
// });
app.get("/", (req, res) => {
  res.send("This is the home page!!!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit.</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit.</h1>`
  );
});

app.post("/cat", (req, res) => {
  res.send("Post request to /cats!!! This is different");
});

app.get("/cat", (req, res) => {
  res.send("Meow!!");
});

app.get("/dog", (req, res) => {
  res.send("Woff!!");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing Found IF Nothing Search");
  }
  res.send(`hi ${q} !!! `);
});
// /r/Something

app.listen(8080, () => {
  console.log("Listening on port 8080!!");
});

app.get("*", (req, res) => {
  res.send("I don't know that path!");
});
