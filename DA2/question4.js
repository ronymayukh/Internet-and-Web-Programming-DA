function check() {
    cost=0
    var arr
    var price

    document.getElementById("bill").innerHTML += "<strong><u><br><hr>YOUR BILL IS</u> </strong>"

    //Major Dishes
    if(document.getElementById("Aloo Potol Posto").checked==true)
    {
        
        cost+=parseInt(document.getElementById("Aloo Potol Posto").value)
        
        item="<li>" + "Aloo Potol Posto  -  Rs 150" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
        
                
    }
    if(document.getElementById("Ilish Macher Jhol").checked==true)
    {
        cost+=parseInt(document.getElementById("Ilish Macher Jhol").value)
        
        item="<li>" + "Ilish Macher Jhol  -  Rs 390" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
        
    }
    if(document.getElementById("Shukto").checked==true)
    {
        cost+=parseInt(document.getElementById("Shukto").value)
        item="<li>" + "Shukto  -  Rs 150" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
        
         
    }
    if(document.getElementById("Mutton Biryani").checked==true)
    {
        cost+=parseInt(document.getElementById("Mutton Biryani").value)
        item="<li>" + "Mutton Biryani  -  Rs 240" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
         
    }
    if(document.getElementById("Tangra Macher Jhol").checked==true)
    {
        cost+=parseInt(document.getElementById("Tangra Macher Jhol").value)
        item="<li>" + "Tangra Macher Jhol  -  Rs 290" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
         
    }
    if(document.getElementById("Kosha Mangsho").checked==true)
    {
        cost+=parseInt(document.getElementById("Kosha Mangsho").value)
        item="<li>" + "Kosha Mangsho  -  Rs 250" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
         
    }


    //Starter

    if(document.getElementById("Kakori Kebabs").checked==true)
    {
        cost+=parseInt(document.getElementById("Kakori Kebabs").value)
        item="<li>" + "Kakori Kebabs  -  Rs 150" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item 
         
    }
    if(document.getElementById("Stir Fried Chilli Chicken").checked==true)
    {
        cost+=parseInt(document.getElementById("Stir Fried Chilli Chicken").value)
        item="<li>" + "Stir Fried Chilli Chicken  -  Rs 200" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item 
         
    }
    if(document.getElementById("Aloo and Dal ki Tikki").checked==true)
    {
        cost+=parseInt(document.getElementById("Aloo and Dal ki Tikki").value)
        item="<li>" + "Aloo and Dal ki Tikki  -  Rs 125" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item 
         
    }
    if(document.getElementById("Cheese Balls").checked==true)
    {
        cost+=parseInt(document.getElementById("Cheese Balls").value)
        item="<li>" + "Cheese Balls  -  Rs 150" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
         
    }
    if(document.getElementById("Chicken Satay").checked==true)
    {
        cost+=parseInt(document.getElementById("Chicken Satay").value)
        item="<li>" + "Chicken Satay  -  Rs 190" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
         
    }

    //Soft Drinks
    if(document.getElementById("Margarita").checked==true)
    {
        cost+=parseInt(document.getElementById("Margarita").value)
        item="<li>" + "Margarita  -  Rs 250" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
         
    }
    if(document.getElementById("Cosmopolitan").checked==true)
    {
        cost+=parseInt(document.getElementById("Cosmopolitan").value)
        item="<li>" + "Cosmopolitan  -  Rs 240" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
         
    }
    if(document.getElementById("Negroni").checked==true)
    {
        cost+=parseInt(document.getElementById("Negroni").value)
        item="<li>" + "Negroni  -  Rs 270" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
         
    }
    if(document.getElementById("Mojito").checked==true)
    {
        cost+=parseInt(document.getElementById("Mojito").value)
        item="<li>" + "Mojito  -  Rs 260" + "</li>"+"<br>"
        document.getElementById("bill").innerHTML += item
         
    }

    document.getElementById("bill").innerHTML += "<strong>TOTAL : "+cost+"</strong>"


    
}

function restore(){
    document.getElementById("bill").innerHTML=""
}
