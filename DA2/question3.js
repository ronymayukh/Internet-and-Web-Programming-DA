function confirmation()
{
    var x=confirm("Are you sure you want to SUBMIT")
    if(x==true)
        correction()
}
function correction(){
    marks=0;
    //question1
    ele=document.getElementsByName("question1")

    for(i = 0; i < ele.length; i++)
    { 
        if(ele[i].checked)
        {
            if(ele[i].value=="A")
                {
                    marks+=1
                    document.getElementById("1.0").innerHTML+='<img src="tick.jpg" height="15px" width="15px"></img>'
                    document.getElementById("question1").innerHTML='<img src="tick.jpg" height="25px" width="25px"></img>'
                }
            else
            {
                document.getElementById("1.0").innerHTML+='<img src="tick.jpg" height="15px" width="15px"></img>'
                document.getElementById("1."+i).innerHTML+='<img src="cross.jpg" height="15px" width="15px" ></img>'
                document.getElementById("question1").innerHTML='<img src="cross.jpg" height="25px" width="25px"></img>'

            }
        } 
         
    }

    //question2
    ele=document.getElementsByName("question2")

    for(i = 0; i < ele.length; i++)
    { 
        if(ele[i].checked)
        {
            if(ele[i].value=="B")
                {
                    marks+=1
                    document.getElementById("2.1").innerHTML+='<img src="tick.jpg" height="15px" width="15px"></img>'
                    document.getElementById("question2").innerHTML='<img src="tick.jpg" height="25px" width="25px"></img>'
                    
                }
            else
            {
                document.getElementById("2.1").innerHTML+='<img src="tick.jpg" height="15px" width="15px"></img>'
                document.getElementById("2."+i).innerHTML+='<img src="cross.jpg" height="15px" width="15px" ></img>'
                document.getElementById("question2").innerHTML='<img src="cross.jpg" height="25px" width="25px"></img>'

            }
        } 
         
    }

    //question3
    ele=document.getElementsByName("question3")

    for(i = 0; i < ele.length; i++)
    { 
        if(ele[i].checked)
        {
            if(ele[i].value=="C")
                {
                    marks+=1
                    document.getElementById("3.2").innerHTML+='<img src="tick.jpg" height="15px" width="15px"></img>'
                    document.getElementById("question3").innerHTML='<img src="tick.jpg" height="25px" width="25px"></img>'
                }
            else
            {
                document.getElementById("3.2").innerHTML+='<img src="tick.jpg" height="15px" width="15px"></img>'
                document.getElementById("3."+i).innerHTML+='<img src="cross.jpg" height="15px" width="15px" ></img>'
                document.getElementById("question3").innerHTML='<img src="cross.jpg" height="25px" width="25px"></img>'

            }
        } 
         
    }

    //question4
    ele=document.getElementsByName("question4")

    for(i = 0; i < ele.length; i++)
    { 
        if(ele[i].checked)
        {
            if(ele[i].value=="D")
                {
                    marks+=1
                    document.getElementById("4.3").innerHTML+='<img src="tick.jpg" height="15px" width="15px"></img>'
                    document.getElementById("question4").innerHTML='<img src="tick.jpg" height="25px" width="25px"></img>'
                }
            else
            {
                document.getElementById("4.3").innerHTML+='<img src="tick.jpg" height="15px" width="15px"></img>'
                document.getElementById("4."+i).innerHTML+='<img src="cross.jpg" height="15px" width="15px" ></img>'
                document.getElementById("question4").innerHTML='<img src="cross.jpg" height="25px" width="25px"></img>'

            }
        } 
         
    }

    //question5
    ele=document.getElementsByName("question5")

    for(i = 0; i < ele.length; i++)
    { 
        if(ele[i].checked)
        {
            if(ele[i].value=="A")
                {
                    marks+=1
                    document.getElementById("5.0").innerHTML+='<img src="tick.jpg" height="15px" width="15px"></img>'
                    document.getElementById("question5").innerHTML='<img src="tick.jpg" height="25px" width="25px"></img>'
                }
            else
            {
                document.getElementById("5.0").innerHTML+='<img src="tick.jpg" height="15px" width="15px"></img>'
                document.getElementById("1."+i).innerHTML+='<img src="cross.jpg" height="15px" width="15px" ></img>'
                document.getElementById("question5").innerHTML='<img src="cross.jpg" height="25px" width="25px"></img>'

            }
        } 
         
    }

    document.getElementById("marks").innerHTML = "<strong>MARKS SCORED : "+marks+"</strong>"
    clearInterval(timer)
    document.getElementById("my_submit").style.display='none'
  
}

t=600

var timer = setInterval(function () {
t-=1
m=Math.floor(t/60)
s=t%60
document.getElementById("timer").innerHTML="<table border='2'><tr><th colspan='2'>TIMER</th></tr><tr><td>"+m+"</td><td>"+s+"</td></tr></table>"
if(t <= 0){
    clearInterval(timer)
    document.getElementById("my_submit").style.display='none'
    correction()
}
},1000)