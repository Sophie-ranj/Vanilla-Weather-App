function dis(response) {
  console.log("------>", response.data);
  console.log("------>", response.data.condition.icon);
  console.log("------>", response.data.condition.description);
  iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}

function search(city) {
  let apiKey = "382f83908a2d98boe61baf6df768d4tb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(dis);
}

search("Berlin");

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = cityInputElement.value;
  console.log("----------------------->", cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
