function myFunction(){
  var x= document.getElementById("mytopnavi");
    if (x.className === "topnavi") {
      x.className += " responsive";
    }
    else{
      x.className = "topnavi";
    }
  }