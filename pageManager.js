class PageManager{
    constructor(parentElementSelector){
        this.pages={};
        this.pages.resumePage=new ResumePage(parentElementSelector);
        this.pages.mapPage= new MapPage(parentElementSelector);
        this.pages.timePage=new TimePage(parentElementSelector);
    }
    showPage(namePage){
        this.pages[namePage].show();
    }
}