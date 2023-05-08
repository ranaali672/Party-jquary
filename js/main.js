$(".box").click(function(){
    let left = $(".setting").css("left");
    if(left =="0px"){
          let widthOuter = $(".inner").outerWidth(true);
    $(".setting").animate({left:`-${widthOuter}px`},1000)

    }else{
        $(".setting").animate({left:`0px`},1000)
    }
})
$("#myIcon").click(function(){
    let left = $(".setting").css("left");
    if(left =="0px"){
          let widthOuter = $(".inner").outerWidth(true);
    $(".setting").animate({left:`-${widthOuter}px`},1000)

    }else{
        $(".setting").animate({left:`0px`},1000)
    }

})



$(document).ready(function () {
    // $("#details div:first").css("display", "block");
    $("#details h3").click(function () {
        $(this).next().slideToggle(500);
        $("#details div").not($(this).next()).slideUp(500);
    });
});


// setInterval(()=>{
 
//     let day = new Date()
//     document.getElementById("day").innerHTML=`${day.getDay()}D`
// },1000)
// setInterval(()=>{
 
//     let hour = new Date()
//     document.getElementById("hour").innerHTML=`${hour.getHours()>12 ? hour.getHours()-12:hour.getHours()}H`
// },1000)
// setInterval(()=>{
 
//     let min = new Date()
//     document.getElementById("min").innerHTML=`${min.getMinutes()}M`
// },1000)
// setInterval(()=>{
 
//     let sec = new Date()
//     document.getElementById("sec").innerHTML=`${sec.getSeconds()}S`
// },1000)



function countdown() {
    var now = new Date();
    var eventDate = new Date(2023, 4, 3);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("day").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("hour").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("min").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("sec").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown, 1000);
}

countdown();



// textCount
// count
$(function valid(){
    var max = 100;
    $("#textCount").keyup(function () {
        var length = $(this).val().length;
        var character = max - length; 
        console.log(character)   //100-150=0
        if (character <= 0) {
            $("#count").text("your available character finished");
        } else {
            $("#count").text(character);
        }
    })
   
})