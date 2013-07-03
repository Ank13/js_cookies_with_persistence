//////// OVER VIEW
var ovenSlot = 0
function addToOvenView(itemToMove){
  $("#rack_"+ovenSlot).html("<div data-id=" + itemToMove.id + ">" + itemToMove.flavor + "," + itemToMove.status() + "</div>");
  ovenSlot += 1
};

//////PREP TABLE VIEW 
function foodForm(foodItem){
   this.form = "<li>"+ foodItem.flavor + "<button data-id="+foodItem.id+" class='batch'>Add to oven</button> </li>";
};

function itemById(id) {
  for(var i = 0; i < prepTable.tableTop.length; i++) {
    if (prepTable.tableTop[i].id === id)
      break;
      return prepTable.tableTop[i];
  };
  return false;
};

function ovenItemById(id) {
  for(var i = 0; i < Oven.contents.length; i++) {
    if (Oven.contents[i].id === id)
      break;
      return Oven.contents[i];
  };
  return false;
};


var Controller = {
  init: function() {
    $("#prep_batches").on("click", ".batch", function(){
      var id = $(this).attr("data-id");
      itemToMove = itemById(id);
      addToOvenView(itemToMove);
      prepTable.removeItem(itemToMove);
      Oven.addFood(itemToMove);
      $(this).parent().remove();
   });

   // prep cookie controller
   $('#new_batch').on('submit', function(event){
      event.preventDefault();
      // create action
      var batchType = $('input[name=batch_type]').val();
      var bakeTime  = $('input[name=bake_time]').val();
      // build new cookie for cookie model
      var newCookie = new Cookie;
      
      newCookie.bakeTime(bakeTime);
      newCookie.cookieType(batchType);
      // push new cookie into the prep table object
      prepTable.tableTop.push(newCookie);
      // list the new cookie on the DOM
      var newFoodForm = new foodForm(newCookie);
      $("#prep_batches").append(newFoodForm.form)
   });

   $("#bake").on('click', function(){
      Oven.bake();
      var id0 = $("#rack_0").attr("data-id");
      var cookie0 = ovenItemById(id0);
      $("#rack_0").html();
      $("#rack_0").html("<div data-id=" + cookie0.id + ">" + cookie0.flavor + ", " + cookie0.status() + "</div>"); 

   });
  }
}

$(document).ready(function(){
  Controller.init();
});
