class ResumePage{
    constructor(parentElementSelector)
    {
        this.parentElement=document.querySelector(parentElementSelector);
    }

    show(){
        this.parentElement.innerHTML="";
        let h1=document.createElement("h1");
        h1.innerHTML ="Resume";
        this.parentElement.appendChild(h1);
        let sectionPhoto=document.createElement("section");
        this.parentElement.appendChild(sectionPhoto);
        let image=document.createElement("img");
        image.src="img/front.jpg";
        image.alt="MyPhoto";
        sectionPhoto.appendChild(image);
        let sectionAbilities=document.createElement("section");
        this.parentElement.appendChild(sectionAbilities);
        let ul=document.createElement("ul");
        ul.classList.add("abilities");
        sectionAbilities.appendChild(ul);
        ["HTML","CSS","JavaScript","BootStrap","Алгоритмы"].forEach(item=>{
            let li=document.createElement("li");
            li.innerHTML=item;
            ul.appendChild(li);
        });
        let sectionAboutMe=document.createElement("section");
        this.parentElement.appendChild(sectionAboutMe);
        let h2 =document.createElement("h2");
        h2.innerHTML="Information";
        sectionAboutMe.appendChild(h2);
        let p=document.createElement("p");
        p.innerHTML="Тут будет текст о себе";
        this.parentElement.appendChild(p);
    }
}
