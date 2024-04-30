function handleSubmit(event) {
  const country = document.querySelector("#country");
  const department = document.querySelector("#department");

  //evitar que se recargue la pagina al enviar el formulario
  event.preventDefault();

  if (country.value === "" || department.value === "") {
    alert("Todos los campos son obligatorios");
    return;
  }
  callApi(country.value, department.value);
}

function callApi(country, department) {
  const apiId = "ba5f4ba2f72f3ecf4f365540b778a77a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${department},${country}&appid=${apiId}`;

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((dataJson) => {
      showWeather(dataJson);
    })
    .catch((error) => {
      alert("Ciudad no Encontrada");
      console.log(error);
    });
}

function kelvinToCentigrade(K) {
  return parseInt(K - 273.15);
}

function showWeather(data) {
  const resultClimate = document.querySelector("#result-climate");
  const fechaHoraActual = new Date();
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const nombreDia = diasSemana[fechaHoraActual.getDay()];
  const dia = fechaHoraActual.getDate();
  const hora = fechaHoraActual.getHours();

  const minutos = fechaHoraActual.getMinutes().toString().padStart(2, "0");

  const {
    name,
    main: { temp, temp_min, temp_max },
    weather: [arr],
    sys: { country },
  } = data;

  console.log(country);
  console.log(name);

  const converTemp = kelvinToCentigrade(temp);
  const converTempMin = kelvinToCentigrade(temp_min);
  const converTempMax = kelvinToCentigrade(temp_max);

  resultClimate.innerHTML = `
    <h2 class="text-2xl text-[white]">Temperatura en ${name}</h2>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col justify-center items-center gap-2">
        <div class="w-32 h-24">
          <img
            class="w-full h-auto object-cover"
            src="https://openweathermap.org/img/wn/${arr.icon}.png";
            alt="icon-climate"
          />
        </div>
        <h2 class="text-3xl text-[white]">${converTemp}°C</h2>
      </div>
      <div class="flex gap-8">
        <span class="text-[#87CEEB]">Min: ${converTempMin}°C</span>
        <span class="text-[tomato]">Max: ${converTempMax}°C</span>
      </div>
    </div>
    <p class="text-[white]">${nombreDia} ${dia}, ${hora}:${minutos}</p>
  `;
}

export { handleSubmit, showWeather, callApi };
