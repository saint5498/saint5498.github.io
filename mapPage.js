class MapPage{
    constructor(parentElementSelector)
    {
        this.parentElement=document.querySelector(parentElementSelector);
    }
    show(){
        this.parentElement.innerHTML="";
        let h1=document.createElement("h1");
        this.parentElement.appendChild(h1);
        h1.innerHTML ="Map";
        let divMap=document.createElement("div");
        divMap.setAttribute("id","map");
        this.parentElement.appendChild(divMap);
        let divPreloader=document.createElement("div");
        divPreloader.classList.add("preloader");
    
        divMap.appendChild(divPreloader);
        let divLoader=document.createElement("div");
        divLoader.classList.add("loader");
        divPreloader.appendChild(divLoader);
        ["L","O","A","D","I","N","G"].forEach(item=>{
            let span=document.createElement("span");
            span.innerHTML=item;
            divLoader.appendChild(span);
        });
        let divCovers=document.createElement("div");
        divCovers.classList.add("covers");
        divLoader.appendChild(divCovers);
        ["","","","","","",""].forEach(item=>{
            let span=document.createElement("span");
            span.innerHTML=item;
            divCovers.appendChild(span);
        });
        this.showMap();
    }
    showMap(){
        
        ymaps.ready(init);
        function init(){
            let preloader=document.querySelector(".preloader");
            preloader.remove();
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
}
