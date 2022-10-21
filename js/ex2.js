const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];
  const suggEl = document.getElementById("suggestions");
  const countryEl = document.querySelector("input");
  const suggFunc = country => {
    const el = document.createElement("div");
    el.classList.add("suggestion");
    el.textContent = country;
    el.addEventListener("click", myFunc => {
      countryEl.value = myFunc.target.textContent;
      suggEl.innerHTML = "";
    });
    return el;
  };
  countryEl.addEventListener("input", () => {
    suggEl.innerHTML = "";
    countryList.forEach(country => {
      if (country.startsWith(countryEl.value)) {
        suggEl.appendChild(suggFunc(country));
      }
    });
  });