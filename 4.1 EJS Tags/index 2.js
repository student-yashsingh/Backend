import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// <%= variable %>                       -> js output
// <% console.log("hello") %>            -> js execute
// <%- <h1>Hello</h1> %>                 -> Render Html
// <%%  %%>                              -> show <% or %>
// <%# This is a comment %>              -> stop execution
// <%- include("header.ejs") %>          -> Insert another ejs file