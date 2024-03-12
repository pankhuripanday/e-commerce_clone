let cards = document.querySelector(".cloth-wear");
let card2 = document.getElementById("trend2");
let mainpage = document.querySelector(".hero-msg");
let blog = document.querySelector(".trend");
let foot = document.querySelector(".footer");
let about = document.querySelector(".foot1");
let contact = document.querySelector(".foot2");
let shop = document.querySelector(".cart");


// let contact = document.getElementById("contact");
 function homes(){
    mainpage.style.display = "flex";
      blog.style.display = "block";
     foot.style.display="block";
     cards.style.display="block"; 
     card2.style.display="block";
     about.style.display= "none";
     shop.style.display= "none";

     document.getElementById("home").style.color="rgb(2,173,173)";
     document.getElementById("shop").style.color="black";
     document.getElementById("blog").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
 }
function shops(){
    mainpage.style.display = "none";
      blog.style.display = "none";
     foot.style.display="block";
     about.style.display= "none";
     cards.style.display="block"; 
     card2.style.display="block";
     shop.style.display= "none";
     contact.style.display= "none";

     document.getElementById("shop").style.color="rgb(2,173,173)";
     document.getElementById("blog").style.color="black";
      document.getElementById("home").style.color="black";
      document.getElementById("contact").style.color="black";
      document.getElementById("about").style.color="black";
      
}
 function blogs(){
    
    foot.style.display="block";
     mainpage.style.display = "none";
     cards.style.display = "none";
     card2.style.display= "none";
     about.style.display= "none";
      blog.style.display= "block";
      shop.style.display= "none";
      contact.style.display= "none";
      


      document.getElementById("blog").style.color="rgb(2,173,173)";
      document.getElementById("shop").style.color="black";
      document.getElementById("home").style.color="black";
      document.getElementById("contact").style.color="black";
      document.getElementById("about").style.color="black";
 }

 function abouts(){
        about.style.display= "block";
        mainpage.style.display = "none";
        foot.style.display="block";
        cards.style.display = "none";
        card2.style.display= "none";
        blog.style.display= "none";
        shop.style.display= "none";
        contact.style.display= "none";
        

         document.getElementById("about").style.color="rgb(2,173,173)";
         document.getElementById("blog").style.color="black";
         document.getElementById("shop").style.color="black";
         document.getElementById("home").style.color="black";
         document.getElementById("contact").style.color="black";
         
 }


 function contacts(){
    contact.style.display= "block";
    about.style.display= "none";
    mainpage.style.display = "none";
    foot.style.display="block";
    cards.style.display = "none";
    card2.style.display= "none";
    blog.style.display= "none";
    shop.style.display= "none";
    
     
     document.getElementById("about").style.color="black";
     document.getElementById("blog").style.color="black";
     document.getElementById("shop").style.color="black";
     document.getElementById("home").style.color="black";
     document.getElementById("contact").style.color="black";
     document.getElementById("contact").style.color= "rgb(2,173,173)";
     
}
// cart

function show(img){

    let newImg = document.getElementById("newImg");
    newImg.src = img.src;
    document.querySelector(".cart").style.display = "flex";

    contact.style.display= "none";
    about.style.display= "none";
    mainpage.style.display = "none";
    foot.style.display="none";
    cards.style.display = "none";
    card2.style.display= "none";
    blog.style.display= "none";
    shop.style.display= "block";
}

function addcart(){
    alert("Added To Cart");
    location.reload()
}