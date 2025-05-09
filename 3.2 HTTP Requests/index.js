import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Yash/p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +918595048666</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



"get(request resource), post(sending resource), put(replace resource), patch(patch up a resource), delete(delete resource)"
