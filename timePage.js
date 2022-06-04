class TimePage{
    constructor(parentElementSelector)
    {
        this.parentElement=document.querySelector(parentElementSelector);
        this.startday = new Date();
        this.clockStart = this.startday.getTime();
        this.timer=null;
    }
    show(){
        this.parentElement.innerHTML="";
        let h1=document.createElement("h1");
        h1.innerHTML ="Time";
        this.parentElement.appendChild(h1);
        this.divTime=document.createElement("div");
        this.divTime.setAttribute("id","timeOnSite");
        this.parentElement.appendChild(this.divTime);
        this.showTime();
        this.startTime();
    }
     
    getDifference()
    { 
        var myTime = new Date();
        var timeNow = myTime.getTime();
        var timeDiff = timeNow-this.clockStart;
        let diffSecs = timeDiff/1000;
        return Math.floor(diffSecs);
    }
    showTime(){
        if(this.divTime){
            let second=this.getDifference();  
            this.divTime.innerHTML=second+" seconds";
        }
        
    }
    startTime(){
        let getSecond =this.showTime.bind(this);
        if(this.timer!=null){
            clearInterval(this.timer);
        }
        this.timer=setInterval(()=>{
        getSecond()        
        },1000);
    }
    
}
