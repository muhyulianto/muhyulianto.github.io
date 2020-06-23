function getData() {
  const getData = fetch("https://api.covid19api.com/total/country/indonesia")
    .then((response) => response.json())
    .then((data) => {
      const arrayData = data[data.length - 1];
      document.querySelector("#positif").innerHTML = arrayData.Confirmed;
      document.querySelector("#meninggal").innerHTML = arrayData.Deaths;
      document.querySelector("#sembuh").innerHTML = arrayData.Recovered;
    }).then(() => {
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    }).then(() => {
      $('.loading').fadeOut(500);
    });
}

getData();
