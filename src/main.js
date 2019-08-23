//Data request
const getData = async (id) => {
  try {
    const requestData = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?${id}&APPID=fb87b9c8f06748883e104fa7b3091649`)
    const data = requestData.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const selectCountry = document.getElementsByClassName('select-country')

//Getting Id of the radio selected and print data

for (let i = 0; i < selectCountry.length; i++) {
  selectCountry[i].addEventListener('click', () => {
    let valor = selectCountry[i].id
    let ID = 'id=' + valor
    getData(ID).then((data) => {
      printData(data)
    })
  })
}

const printWeather = document.getElementById('print-weather')

//Function to printData

const printData = (data) => {
  printWeather.innerHTML = ''
  const main = data.main
  let result = `
     <h1 class='light-blue-text text-accent-4'>${data.name}</h1>
      <h4>${(main.temp - 273.15).toFixed(1)}°C  /  ${(((main.temp - 273.15) * 1.8000) + 32.00).toFixed(1)}°F</h4>
      <h5> ${data.weather[0].description}</h5>
     <p>Humidity: ${main.humidity} %</p>
  <p>Pressure: ${main.pressure} hPa</p>
   <p>Wind Speed: (${data.wind.speed} km/hr)</p>
  <p>City ​​coordinates: (${data.coord.lon},  ${data.coord.lat})</p>`
  printWeather.insertAdjacentHTML('beforeend', result)
}

const searchBtn = document.getElementById('search-btn')
const search = document.getElementById('input-search')

//Print the searched city

searchBtn.addEventListener('click', () => {
  let name = search.value
  let ID = 'q=' + name
  getData(ID).then((data) => {
    printData(data)
  })
})


const idMexico = 'id='+ 3530597
getData(idMexico).then( data => {
  printData(data)
  })