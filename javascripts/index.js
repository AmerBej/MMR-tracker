var datum = new Date();
var dd = String(datum.getDate()).padStart(2, "0");
var mm = String(datum.getMonth() + 1).padStart(2, "0");
var yyyy = datum.getFullYear();

datum = dd + "." + mm + "." + yyyy;

window.onload = function(){
    test();
    function test(){
        document.getElementById("currentDate").innerHTML = datum;
    }
}

let add = document.getElementById("increment")
let remove = document.getElementById("decrement")
let mmr = document.getElementById("rankingPoints")

let int = document.getElementById("counter")
let integer = 0;
let integer2 = 0;
var text = datum + "   " + integer +"w/l   " + integer2 +"mmr"

add.addEventListener("click", function (){
    integer+=1;
    int.innerHTML = integer;
    integer2+=30;
    mmr.innerHTML = integer2;  

    text = datum + "   " + integer +"w/l   " + integer2 +"mmr"
})
remove.addEventListener("click", function (){
    integer-=1;
    int.innerHTML = integer;
    integer2-=30;
    mmr.innerHTML = integer2;
    text = datum + "   " + integer +"w/l   " + integer2 +"mmr"
})
let saveNew = document.getElementById("saveBtn");


saveNew.addEventListener("click",function (){
    document.getElementById("savedData").innerHTML = text;
})


