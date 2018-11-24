$(document).ready(function(){

let x = true;
    $("#bold").click(function () {
    $("#text").css("font-weight", x? "bold" : "normal")
    x = !x 
    })
    // $("#bold").click(function(){
    //     if ($("#text").css("font-weight") == 400 ){
    //         $("#text").css("font-weight", "bold");
    //     } else {
    //         $("#text").css("font-weight", "normal");
    //     }
    // });
    // function makeitbold (){
    //   if (document.getElementById('text').style.fontWeight == 'bold') {
    //         document.getElementById("text").style.fontWeight="normal";
    //     }else{
    //         document.getElementById("text").style.fontWeight="bold";
    // }}
    let y = true;
    $("#italic").click(function () {
    $("#text").css("font-style", y? "italic" : "normal")
    y = !y 
    })


    // function italic (){
    //     if (document.getElementById('text').style.fontStyle == 'italic') {
    //     document.getElementById("text").style.fontStyle="normal";
    //     }else{
    //     document.getElementById("text").style.fontStyle="italic";
    //     }}
    //     var text = document.getElementById('text');
    let a = true;
    $("#underline").click(function () {
    $("#text").css("text-decoration", a? "underline" : "none")
    a = !a 
    })

    });
    // function underline (){
    //     if (text.style.textDecoration == 'underline') {
    //         text.style.textDecoration="none";
    // }else{
    //     text.style.textDecoration="underline";
    // }} 
    $("#changingfont").change(function(){
    $("#text").css("font-family", $("#changingfont").val());
    })
    // function changingfont (){
    //     var font = document.getElementById("changingfont").value;
    //     console.log(font);
    //     document.getElementById('text').style.fontFamily = font; 
    // }
    $("#changingtextsize").change(function(){
    $("#text").css("font-size", $("#changingtextsize").val());
    })

//     function changingtextsize (){
//         var size = document.getElementById("changing textsize").value;
//         document.getElementById('text').style.fontSize = size;
//     }
$("#changingtextcolour").change(function(){
    $("#text").css("color", $("#changingtextcolour").val());
    })
//     function changingtextcolour (){
//         var color = document.getElementById("changing textcolour").value;
//         document.getElementById('text').style.color = color;
//     }
$("#changingtextdisplay").change(function(){
    $("#text").css("text-align", $("#changingtextdisplay").val());
    })
//     function changingtextdisplay (){
//         var textdisplay = document.getElementById("changing textdisplay").value;
//         document.getElementById('text').style.textAlign = textdisplay;
//     }
// ;
