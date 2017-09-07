
var motherDiv=$("div").first();
console.log(motherDiv);
var div=$("<div></div>");
var p=$("<p></p>");
var span=$("<span></span>");

div=div.append(p).append(span.text("span 1"));


//var toAdd=$("<div><p><span>span 1</span></p></div><div><p>1</p></div>");

for(var i=0;i<5;i++){
$("<div></div>").append($("<p></p>")).append($("<span></span>").text("span "+(i+2))).appendTo(motherDiv);

$("<div></div>").append($("<p></p>").text(i+2)).appendTo(motherDiv);
}

$('span').each(function( index, elem ) {
    if((index-1)%2===0){
        $( elem ).css("color","red");
    }

});

//$("span:even").css('color', 'red');

$("p").each(function( index, elem){
    $('<button class="btn" data-tmp="' + index + '">Click me</button>').appendTo($(elem).parent());
});

$("button").each(function( index, elem){
    $(elem).on("click",function(){
    alert($(elem).prev().text());
    }
  );

});



