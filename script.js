
function populateCountries() {
  const select = document.getElementById("countrySelect");
  for (const code in countries) {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = countries[code].name;
    select.appendChild(option);
  }
}

function generateNumber() {
  const selected = document.getElementById("countrySelect").value;
  const country = countries[selected];
  let number = country.prefix;
  for (let i = 0; i < country.length - country.prefix.length; i++) {
    number += Math.floor(Math.random() * 10);
  }
  document.getElementById("numberDisplay").textContent = number;
}

populateCountries();
