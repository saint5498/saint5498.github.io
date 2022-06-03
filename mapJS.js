window.onload=()=>{
  let preloader=document.querySelector(".preloader");
  preloader.remove();
  ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [64.540465, 40.522970],
          zoom: 7
      });
      var placemark = new ymaps.Placemark([64.540465, 40.522970], {}, {
        preset: "islands#circleDotIcon",
        iconColor: '#ff0000'
    });
    myMap.geoObjects.add(placemark);
  }
}

