
var Oven = { 
   contents : [],
   addFood : function(food){
      this.contents.push(food) ;
   },
   bake : function(){
      for (var i = 0; i < this.contents.length; i++) {
         this.contents[i].actualTime += 1;
      }
   }
};
