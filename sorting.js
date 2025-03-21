const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let countries = [];

async function fetchCountries() {
  try {
    const url =
      "https://www.worldometers.info/geography/alphabetical-list-of-countries/";
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    let tempCountries = [];
    let columnIndex = -1;

    $("table thead tr th").each((index, element) => {
      if ($(element).text().trim().toLowerCase() === "country") {
        columnIndex = index;
      }
    });

    if (columnIndex === -1) {
      throw new Error("Country column not found.");
    }

    $("table tbody tr").each((_, row) => {
      const cells = $(row).find("td");
      const countryName = $(cells[columnIndex]).text().trim();
      if (countryName) {
        tempCountries.push(countryName);
      }
    });

    countries = tempCountries;
  } catch (error) {
    console.error("Error fetching country data:", error);
    countries = [];
  }
}

fetchCountries();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index2.html"));
});

app.post("/sorted", (req, res) => {
  let i = req.body.page;
  let j = i;
  let k = 0;
  function sub() {
    k = i - 39;
    return k;
  }
  if (j < 39 && j > 0) {
    let sortedCountries = countries.slice(i * 5, (i + 1) * 5);
    res.json(sortedCountries);
  } else {
    sub();
    let sortedCountries = countries.slice(k * 5, (k + 1) * 5);
    res.json(sortedCountries);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
