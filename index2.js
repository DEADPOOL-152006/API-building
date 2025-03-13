const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Handle JSON data (optional)

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index2.html"));
});

class User {
  constructor(user) {
    this.user = user.toLowerCase(); // Store in lowercase
  }
}

const user = [
  new User("afghanistan"),
  new User("albania"),
  new User("algeria"),
  new User("andorra"),
  new User("angola"),
  new User("antigua and barbuda"),
  new User("argentina"),
  new User("armenia"),
  new User("australia"),
  new User("austria"),
  new User("azerbaijan"),
  new User("bahamas"),
  new User("bahrain"),
  new User("bangladesh"),
  new User("barbados"),
  new User("belarus"),
  new User("belgium"),
  new User("belize"),
  new User("benin"),
  new User("bhutan"),
  new User("bolivia"),
  new User("bosnia and herzegovina"),
  new User("botswana"),
  new User("brazil"),
  new User("brunei"),
  new User("bulgaria"),
  new User("burkina faso"),
  new User("burundi"),
  new User("cabo verde"),
  new User("cambodia"),
  new User("cameroon"),
  new User("canada"),
  new User("central african republic"),
  new User("chad"),
  new User("chile"),
  new User("china"),
  new User("colombia"),
  new User("comoros"),
  new User("congo"),
  new User("costa rica"),
  new User("croatia"),
  new User("cuba"),
  new User("cyprus"),
  new User("czechia"),
  new User("denmark"),
  new User("djibouti"),
  new User("dominica"),
  new User("dominican republic"),
  new User("ecuador"),
  new User("egypt"),
  new User("el salvador"),
  new User("equatorial guinea"),
  new User("eritrea"),
  new User("estonia"),
  new User("eswatini"),
  new User("ethiopia"),
  new User("fiji"),
  new User("finland"),
  new User("france"),
  new User("gabon"),
  new User("gambia"),
  new User("georgia"),
  new User("germany"),
  new User("ghana"),
  new User("greece"),
  new User("grenada"),
  new User("guatemala"),
  new User("guinea"),
  new User("guyana"),
  new User("haiti"),
  new User("honduras"),
  new User("hungary"),
  new User("iceland"),
  new User("india"),
  new User("indonesia"),
  new User("iran"),
  new User("iraq"),
  new User("ireland"),
  new User("israel"),
  new User("italy"),
  new User("jamaica"),
  new User("japan"),
  new User("jordan"),
  new User("kazakhstan"),
  new User("kenya"),
  new User("kiribati"),
  new User("kuwait"),
  new User("kyrgyzstan"),
  new User("laos"),
  new User("latvia"),
  new User("lebanon"),
  new User("lesotho"),
  new User("liberia"),
  new User("libya"),
  new User("liechtenstein"),
  new User("lithuania"),
  new User("luxembourg"),
  new User("madagascar"),
  new User("malawi"),
  new User("malaysia"),
  new User("maldives"),
  new User("mali"),
  new User("malta"),
  new User("marshall islands"),
  new User("mauritania"),
  new User("mauritius"),
  new User("mexico"),
  new User("micronesia"),
  new User("moldova"),
  new User("monaco"),
  new User("mongolia"),
  new User("montenegro"),
  new User("morocco"),
  new User("mozambique"),
  new User("myanmar"),
  new User("namibia"),
  new User("nauru"),
  new User("nepal"),
  new User("netherlands"),
  new User("new zealand"),
  new User("nicaragua"),
  new User("niger"),
  new User("nigeria"),
  new User("north korea"),
  new User("north macedonia"),
  new User("norway"),
  new User("oman"),
  new User("pakistan"),
  new User("palau"),
  new User("panama"),
  new User("papua new guinea"),
  new User("paraguay"),
  new User("peru"),
  new User("philippines"),
  new User("poland"),
  new User("portugal"),
  new User("qatar"),
  new User("romania"),
  new User("russia"),
  new User("rwanda"),
  new User("saudi arabia"),
  new User("senegal"),
  new User("serbia"),
  new User("seychelles"),
  new User("sierra leone"),
  new User("singapore"),
  new User("slovakia"),
  new User("slovenia"),
  new User("solomon islands"),
  new User("somalia"),
  new User("south africa"),
  new User("south korea"),
  new User("south sudan"),
  new User("spain"),
  new User("sri lanka"),
  new User("sudan"),
  new User("suriname"),
  new User("sweden"),
  new User("switzerland"),
  new User("syria"),
  new User("taiwan"),
  new User("tajikistan"),
  new User("tanzania"),
  new User("thailand"),
  new User("timor-leste"),
  new User("togo"),
  new User("tonga"),
  new User("tunisia"),
  new User("turkey"),
  new User("turkmenistan"),
  new User("tuvalu"),
  new User("uganda"),
  new User("ukraine"),
  new User("united arab emirates"),
  new User("united kingdom"),
  new User("united states"),
  new User("uruguay"),
  new User("uzbekistan"),
  new User("vanuatu"),
  new User("venezuela"),
  new User("vietnam"),
  new User("yemen"),
  new User("zambia"),
  new User("zimbabwe"),
];
users = user.sort();
//console.log(users);
//const k = user.length;

// POST request: Search country by initials
app.post("/submit", (req, res) => {
  users = user.sort();
  var i, j, k;
  const countries = [];
  for (i = 0; i < users.length; i++) {
    for (j = 0; j < 5; j++) {
      k = j + 5 * i;

      countries.push(users[k]);
      console.log(countries);
    }
    res.send(
      `<ul>${countries.map((c) => `<li>${c.country}</li>`).join("")}</ul>`
    );
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
