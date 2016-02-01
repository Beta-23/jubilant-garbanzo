

var distance;
var refNode;

window.onload = function() {
    console.log("linked");
    // document.getElementById("contribute").addEventListener("submit", catchelement); ///<--this code line is without jQuery//
    //Below using jQuery//
    $("#contribute").on("submit", catchelement);
    // grabStorage();
};

function createElement () {
     var $li = $("#li");
    $li.textContent = distance;
    // No jQuery-->var ul = document.getElementById("Post-ul");

    $("#Post-ul").prepend("<li>" + distance + "</li>"); 
    // No jQuery-->ul.appendChild($li); 
    // No jQuery-->document.getElementById("Post-list").insertBefore($li, refNode);
    refNode = $li; 

}

function catchelement(event){
     console.log(this);
     // var count;
	event.preventDefault();
    // No jQuery--> distance = document.getElementById("comment").value;//
     //using jQuery//
     distance = $("#comment").val();
     createElement();
     console.log(this);
     this.reset();
     var thisKey = "blog" + localStorage.length;
     localStorage.setItem(thisKey, distance);//console error, trying to define count//
     
	
     }
     
    // function grabStorage(){
        // for (var key in localStorage){
        //     createElement(localStorage.getItem(key));
        // }
   