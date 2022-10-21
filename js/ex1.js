/*
Game of Thrones characters
*/

// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};
const liEl = text => {
    const el = document.createElement("li");
    el.textContent = text;
    return el;
  };
const optionEl = (text, value) => {
  const el = document.createElement("option");
  el.textContent = text;
  el.value = value;
  return el;
};
const houseEl = document.querySelector("select");
houses.forEach(house => {
  houseEl.appendChild(optionEl(house.name, house.code));
});

houseEl.addEventListener("change", myFunc => {
  const characters = getCharacters(myFunc.target.value);
  const characterEl = document.getElementById("characters");
  characterEl.innerHTML = "";
  characters.forEach(character => {
    characterEl.appendChild(liEl(character));
  });
});