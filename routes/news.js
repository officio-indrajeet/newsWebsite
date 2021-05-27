const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("", async (req, res) => {
  try {
    const newsAPI = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey= YOUR API KEY HERE`
    );
    res.render("news", { articles: newsAPI.data.articles });
  } catch (err) {
    if (err.response) {
      res.render("news", { articles: null });
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      res.render("news", { articles: null });
      console.log(err.request);
    } else {
      res.render("news", { articles: null });
      console.log("Error:", err.message);
    }
  }
});

router.post("", async (req, res) => {
  let search = req.body.search;
  try {
    const newsAPI = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey= YOUR API KEY HERE`
    );
    res.render("newsSearch", { articles: newsAPI.data.articles });
  } catch (err) {
    if (err.response) {
      res.render("newsSearch", { articles: null });
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.requiest) {
      res.render("newsSearch", { articles: null });
      console.log(err.requiest);
    } else {
      res.render("newsSearch", { articles: null });
      console.error("Error", err.message);
    }
  }
});

module.exports = router;
