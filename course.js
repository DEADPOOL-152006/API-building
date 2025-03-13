const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Handle JSON data (optional)

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index3.html"));
});

class User {
  constructor(user) {
    this.user = user.toLowerCase(); // Store in lowercase
  }
}
const user = [
  // Class 11 - Physics
  new User("Physical World"),
  new User("Units and Measurements"),
  new User("Motion in a Straight Line"),
  new User("Motion in a Plane"),
  new User("Laws of Motion"),
  new User("Work, Energy, and Power"),
  new User("System of Particles and Rotational Motion"),
  new User("Gravitation"),
  new User("Mechanical Properties of Solids"),
  new User("Mechanical Properties of Fluids"),
  new User("Thermal Properties of Matter"),
  new User("Thermodynamics"),
  new User("Kinetic Theory of Gases"),
  new User("Oscillations"),
  new User("Waves"),

  // Class 11 - Chemistry
  new User("Some Basic Concepts of Chemistry"),
  new User("Structure of Atom"),
  new User("Classification of Elements and Periodicity in Properties"),
  new User("Chemical Bonding and Molecular Structure"),
  new User("States of Matter"),
  new User("Thermodynamics"),
  new User("Equilibrium"),
  new User("Redox Reactions"),
  new User("Hydrogen"),
  new User("The s-Block Elements"),
  new User("Some p-Block Elements"),
  new User("Organic Chemistry - Some Basic Principles and Techniques"),
  new User("Hydrocarbons"),
  new User("Environmental Chemistry"),

  // Class 11 - Biology
  new User("Diversity of the Living World"),
  new User("Biological Classification"),
  new User("Plant Kingdom"),
  new User("Animal Kingdom"),
  new User("Morphology of Flowering Plants"),
  new User("Anatomy of Flowering Plants"),
  new User("Structural Organisation in Animals"),
  new User("Cell - The Unit of Life"),
  new User("Biomolecules"),
  new User("Cell Cycle and Cell Division"),
  new User("Transport in Plants"),
  new User("Mineral Nutrition"),
  new User("Photosynthesis in Higher Plants"),
  new User("Respiration in Plants"),
  new User("Plant Growth and Development"),
  new User("Digestion and Absorption"),
  new User("Breathing and Exchange of Gases"),
  new User("Body Fluids and Circulation"),
  new User("Excretory Products and Their Elimination"),
  new User("Locomotion and Movement"),
  new User("Neural Control and Coordination"),
  new User("Chemical Coordination and Integration"),

  // Class 11 - Mathematics
  new User("Sets"),
  new User("Relations and Functions"),
  new User("Trigonometric Functions"),
  new User("Principle of Mathematical Induction"),
  new User("Complex Numbers and Quadratic Equations"),
  new User("Linear Inequalities"),
  new User("Permutations and Combinations"),
  new User("Binomial Theorem"),
  new User("Sequences and Series"),
  new User("Straight Lines"),
  new User("Conic Sections"),
  new User("Introduction to Three Dimensional Geometry"),
  new User("Limits and Derivatives"),
  new User("Mathematical Reasoning"),
  new User("Statistics"),
  new User("Probability"),

  // Class 12 - Physics
  new User("Electric Charges and Fields"),
  new User("Electrostatic Potential and Capacitance"),
  new User("Current Electricity"),
  new User("Moving Charges and Magnetism"),
  new User("Magnetism and Matter"),
  new User("Electromagnetic Induction"),
  new User("Alternating Current"),
  new User("Electromagnetic Waves"),
  new User("Ray Optics and Optical Instruments"),
  new User("Wave Optics"),
  new User("Dual Nature of Radiation and Matter"),
  new User("Atoms"),
  new User("Nuclei"),
  new User("Semiconductor Electronics"),

  // Class 12 - Chemistry
  new User("Solid State"),
  new User("Solutions"),
  new User("Electrochemistry"),
  new User("Chemical Kinetics"),
  new User("Surface Chemistry"),
  new User("General Principles and Processes of Isolation of Elements"),
  new User("The p-Block Elements"),
  new User("The d- and f-Block Elements"),
  new User("Coordination Compounds"),
  new User("Haloalkanes and Haloarenes"),
  new User("Alcohols, Phenols and Ethers"),
  new User("Aldehydes, Ketones and Carboxylic Acids"),
  new User("Organic Compounds Containing Nitrogen"),
  new User("Biomolecules"),
  new User("Polymers"),
  new User("Chemistry in Everyday Life"),

  // Class 12 - Biology
  new User("Reproduction in Organisms"),
  new User("Sexual Reproduction in Flowering Plants"),
  new User("Human Reproduction"),
  new User("Reproductive Health"),
  new User("Principles of Inheritance and Variation"),
  new User("Molecular Basis of Inheritance"),
  new User("Evolution"),
  new User("Human Health and Disease"),
  new User("Strategies for Enhancement in Food Production"),
  new User("Microbes in Human Welfare"),
  new User("Biotechnology - Principles and Processes"),
  new User("Biotechnology and Its Applications"),
  new User("Organisms and Populations"),
  new User("Ecosystem"),
  new User("Biodiversity and Conservation"),
  new User("Environmental Issues"),

  // Class 12 - Mathematics
  new User("Relations and Functions"),
  new User("Inverse Trigonometric Functions"),
  new User("Matrices"),
  new User("Determinants"),
  new User("Continuity and Differentiability"),
  new User("Application of Derivatives"),
  new User("Integrals"),
  new User("Application of Integrals"),
  new User("Differential Equations"),
  new User("Vector Algebra"),
  new User("Three Dimensional Geometry"),
  new User("Linear Programming"),
  new User("Probability"),
];

const k = user.length;

// POST request: Search country by initials
app.post("/submit", (req, res) => {
  let input = req.body.chapters;

  if (!input) {
    return res.send("<h2>Please chapter name according NCERT book!</h2>");
  }

  input = input.toLowerCase(); // Convert input to lowercase for case-insensitivity

  // Filter countries that start with the given initials
  const matches = user.filter((item) => item.user.startsWith(input));

  const no = matches.length;
  if (no === 1) {
    const chapter = matches[0].user.replace(/\s+/g, "_");
    return res.redirect(
      `https://www.nationsonline.org/oneworld/${chapter}.htm`
    );
  }

  if (matches.length > 1) {
    res.send(`<h2>Matching countries: ${matches.map((c) => c.user)}</h2>`);
  } else {
    res.send("<h2>No countries found with that initial.</h2>");
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
