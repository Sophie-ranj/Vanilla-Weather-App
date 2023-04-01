function dis(reponse) {
  console.log("111111", reponse.data.city);
  console.log("222222", reponse.data.country);
}

let apiKey = "382f83908a2d98boe61baf6df768d4tb";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=382f83908a2d98boe61baf6df768d4tb&units=metric`;

axios.get(apiUrl).then(dis);
