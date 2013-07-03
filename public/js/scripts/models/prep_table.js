var prepTable = { 
   tableTop : [],

  removeItem : function(itemToRemove){
   this.tableTop.splice(prepTable.tableTop.indexOf(itemToRemove), 1) 
   // console.log("removed")
   // console.log(this.tableTop.length)
  }


}

