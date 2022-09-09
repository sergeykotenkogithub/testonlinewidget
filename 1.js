

let url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.1289771&lon=-84.0832646&appid=81e9d77e5339d6601b69f80f0e235644';

//  postData('', data)
//   .then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
// });


fetch(url)
  .then(response => response.json())
  .then(commits => console.log(commits));



// 81e9d77e5339d6601b69f80f0e235644

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=81e9d77e5339d6601b69f80f0e235644


// https://api.openweathermap.org/data/2.5/weather?lat=37.1289771&lon=-84.0832646&appid=81e9d77e5339d6601b69f80f0e235644



// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=81e9d77e5339d6601b69f80f0e235644