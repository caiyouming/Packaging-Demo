/**************** accordion *********************/
  //div onclick
    //div .title [data-toggle=collapse] 
    //div .title [data-toggle=collapse]
  //查找触发事件的元素，绑定事件
  $("[data-toggle=collapse]").parent()
  .on("click","[data-toggle=collapse]",e=>
    $(e.target).next(".content").toggleClass("in")
      .siblings(".content").removeClass("in")
  );



//$("#my-accordion").accordion();
jQuery.fn.tabs=function(){
  var $parent=this;//this->$("#my-tabs")
  $parent//侵入: 
  .children(":first-child").addClass("tabs") //ul
  .children().children() //lis>as
  .attr("data-toggle","tab")
  .parent().first().addClass("active");//lis:first

  $parent
  .children(":last").addClass("container")//div
  .children(":first").addClass("active")//第一个子div
  
  $parent.children(":first-child") //ul //事件绑定:
  .on("click","[data-toggle=tab]",e=>{
    e.preventDefault();
    var $tar=$(e.target);
    if(!$tar.parent().is(".active")){
      $tar.parent().addClass("active").siblings().removeClass("active");
      var id=$tar.attr("data-target");
      $(id).addClass("active").siblings().removeClass("active");
    }
  })
}
//$("#my-tabs").tabs();