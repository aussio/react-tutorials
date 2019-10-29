function getNasaPicsOfTheWeek() {
  const last7Dates = last7Days();

  return Promise.all(last7Dates.map(date => getNasaPicOfTheDay(date)));
}

function last7Days() {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    result.push(formatDate(d));
  }

  return result;
}

async function getNasaPicOfTheDay(date) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`;
  const resp = await fetch(url);
  return resp.json();
}

function formatDate(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${yyyy}-${mm}-${dd}`;
}

export default getNasaPicsOfTheWeek;