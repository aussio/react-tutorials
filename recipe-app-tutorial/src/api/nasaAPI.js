export function getNasaPicsOfTheWeek() {
  let last7Dates = last7Days();

  return Promise.all(last7Dates.map(date => getNasaPicOfTheDay(date)));
}

async function getNasaPicOfTheDay(date) {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`;
  const resp = await fetch(url);
  return await resp.json();
}

function last7Days() {
  var result = [];
  for (var i = 0; i < 7; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    result.push(formatDate(d));
  }

  return result;
}

function formatDate(date) {
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  date = yyyy + "-" + mm + "-" + dd;
  return date;
}
