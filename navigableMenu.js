class NavigableMenu{
    constructor(menuSelector,parentElementSelector){
        this.menu=document.querySelector(menuSelector);
        this.managerPage=new PageManager(parentElementSelector);
        this.menu.onclick=this.clickLink.bind(this);
        this.managerPage.showPage("resumePage");
    }
    clickLink(e){
        let target=e.target;
        if(target.tagName!="A"){
            return;
        }
        this.menu.querySelectorAll("a").forEach(element => {
            element.classList.remove("active");
        });
        target.classList.add("active");
        let page=target.getAttribute("data-page");
        this.managerPage.showPage(page);
        return false;
    }
}
let navigableMenu= new NavigableMenu("nav","#content");
