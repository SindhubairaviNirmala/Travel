//selecting the values
var france=document.getElementById("paris")
var parisp=document.getElementById("paris-p")

var indonesia=document.getElementById("bali")
var balib=document.getElementById("bali-b")

var usa=document.getElementById("newyork")
var newyorkn=document.getElementById("newyork-n")


function paris(){
    if(parisp.style.display=="block"){
        parisp.style.display="none"
    }
    else{
        parisp.style.display="block"
    }
}

function bali(){
    if(balib.style.display=="block"){
        balib.style.display="none"
    }
    else{
        balib.style.display="block"
    }
}

function newyork(){
    if(newyorkn.style.display=="block"){
        newyorkn.style.display="none"
    }
    else{
        newyorkn.style.display="block"
    }
}

var pic=document.getElementById("icon")
var nav=document.getElementById("navbar")

function menu(){
    if(nav.style.display=="block"){
        nav.style.display="none"
        
    }
    else{
        nav.style.display="block"
        
    }
}





//selecting the values
var destination=document.getElementById("destination")
var date=document.getElementById("date")
var people=document.getElementById("people")
var result=document.getElementById("booking-result")

function bookTrip(){
    result.textContent="* Trip  booked  to  "+  destination.value +" on "+date.value +" for "+people.value+" people! *"
}

//selecting the values
var you=document.getElementById("name")
var email=document.getElementById("email")
var contact=document.getElementById("contact-result")

function submitContact(){
    contact.textContent="* Thank you,  "+  you.value +". We will contact you at "+email.value +" soon! *"
}