function Cookie(){
   this.flavor = "oatmeal" ;
   this.neededTime = 10 ;
   this.actualTime = 0 ;
   this.id = new Date().getTime()
};

Cookie.prototype = {
   cookieType : function(flavor){
      this.flavor = flavor ;
   },
   bakeTime : function(time){
      this.neededTime = time ;
   }
};

Cookie.prototype.status = function(){
   if (this.actualTime === 0){
      return "raw"
   } else if (this.actualTime < 5) {
      return "gooey"
   } else if (this.actualTime < 10) {
      return "Good"
   } else { 
      return "Burnt"
   };
};
