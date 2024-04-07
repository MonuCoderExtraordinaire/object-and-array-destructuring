//Complex Object
const obj = {
  name: "Monu",
  age: 22,
  college: "IIIT Kota",
  greet: (name, age) => `Hello ${name}, your age is ${age}`,
  fav: {
    Movies: [
      {
        Marvel: ["Avengers Endgame", "Avengers Infinity Wars", "Deadpool"],
        DC: ["Batman", "Joker"],
      },
    ],
    Food: ["Rajma Chawal", "Burger"],
    Places: {
      Horror: "Bhangarh Fort",
      Mountains: " Kali Pahadi",
    },
  },
};

//const [one, two] = [1,2,3] -> array destructring using index matching
//const {name, age} = obj;
const {
  name: Name,
  age,
  college: College,
  fav: {
    Movies: [
      {
        Marvel: marvel,
        DC: [Batman, Lund],
      },
    ],
    Food: [Rajma, Burger],
    Places: { Horror: horror, Mountains: mountains },
  },
} = obj;

console.log(
  Name,
  Lund,
  age,
  College,
  marvel,
  Batman,
  Rajma,
  Burger,
  horror,
  mountains
);
/**
 * Concept :
 * 1. Key -> colon lagega fir destructure hoga,same for object
 * 2. Array : direct destructure ho jaayega
 */
