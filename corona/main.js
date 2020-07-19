function getData() {
  const getData = fetch("https://api.covid19api.com/total/country/indonesia")
    .then(response => response.json())
    .then(data => {
      const currentDayData = data[data.length - 1];
      const previousDayData = data[data.length - 2];

      const diffDataConfirmed =
        currentDayData.Confirmed - previousDayData.Confirmed;
      const diffDataRecovered =
        currentDayData.Recovered - previousDayData.Recovered;
      const diffDataDeaths = currentDayData.Deaths - previousDayData.Deaths;

      document.querySelector("#positif").innerHTML = currentDayData.Confirmed;
      document.querySelector("#meninggal").innerHTML = currentDayData.Deaths;
      document.querySelector("#sembuh").innerHTML = currentDayData.Recovered;

      document.querySelector("#perbedaanDataPositif").innerHTML = `
      <small>
        ${diffDataConfirmed < 0 ? "Turun" : "Naik"}
        <div class="text-warning d-inline">
        ${Math.abs(diffDataConfirmed)}
        </div>
        kasus dari hari sebelumnya
      </small>
      `;

      document.querySelector("#perbedaanDataMeninggal").innerHTML = `
      <small>
        ${diffDataDeaths < 0 ? "Turun" : "Naik"}
        <div class="text-danger d-inline">
        ${Math.abs(diffDataDeaths)}
        </div>
        kasus dari hari sebelumnya
      </small>
      `;

      document.querySelector("#perbedaanDataSembuh").innerHTML = `
      <small>
        ${diffDataRecovered < 0 ? "Turun" : "Naik"}
        <div class="text-success d-inline">
        ${Math.abs(diffDataRecovered)}
        </div>
        kasus dari hari sebelumnya
      </small>
      `;
    })
    .then(() => {
      const swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    })
    .then(() => {
      $(".loading").fadeOut(500);
    });
}

getData();
