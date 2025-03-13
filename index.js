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
  res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/countries", async (req, res) => {
  if (countries.length === 0) {
    await fetchCountries();
  }
  res.json(countries);
});

app.post("/submit", async (req, res) => {
  let input = req.body.country;
  if (!input) {
    return res.send("<h2>Please enter a country name or initial!</h2>");
  }

  if (countries.length === 0) {
    await fetchCountries(); 
  }

  input = input.toLowerCase(); 

  
  const matches = countries.filter((country) =>
    country.toLowerCase().startsWith(input)
  );

  console.log("Matched Countries:", matches);

  if (matches.length === 1) {
    const country = matches[0].replace(/\s+/g, "_"); 
    return res.redirect(
      `https://www.nationsonline.org/oneworld/${country}.htm`
    );
  }

  if (matches.length > 1) {
    return res.send(
      `<h2>Matching countries:</h2><ul>${matches
        .map((c) => `<li>${c}</li>`)
        .join("")}</ul>`
    );
  }

  return res.send("<h2>No countries found with that initial.</h2>");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
