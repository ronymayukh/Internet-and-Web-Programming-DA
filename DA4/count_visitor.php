<?php

error_reporting(0);
session_start();

if((!$_SESSION['userid'] || !$_SESSION['password']) && isset($_POST['save']) )
{
    //$_SESSION['userid'] = prompt("Please enter your user ID");
    $_SESSION['userid']=$_POST['id'];
    $_SESSION['password'] = $_POST['password'];
}

else if ($_SESSION['userid'] && $_SESSION['password'] && !isset($_POST['Delete_Session']))
{
    $text="Your USER ID is: ".$_SESSION['userid']." and PASSWORD is: ".$_SESSION['password'];
    echo "<font size=8><center>".$text."<br></font></center>";

    
}

if (!isset($_COOKIE['kookie'])) {
$pagecount=0;
setcookie("kookie",$pagecount,time()+36000000);
echo "<font size=8><center>This is the first time u have accessed
this page<br>"."</font></center>";
echo "<center>A cookie was sent to u & stored in ur
computer<br>"."</font></center>";
}
else {
$pagecount = ++$_COOKIE['kookie'];
setcookie("kookie",$pagecount);
echo "<center><font size=10 color = red> view count:
".$_COOKIE['kookie']."</font></center>";
}

if(isset($_POST['Delete_Cookie'])) { 
    echo "<br><center><font size=10 color = red> Your count cookie is deleted</font></center>";
    setcookie("kookie","",time()-3600);
}

if(isset($_POST['Delete_Session'])) { 
    echo "<br><center><font size=10 color = red> Your session id and password is deleted</font></center>";
    session_destroy();
}

?> <html><body>
<b> <center> <font size=8 color=blue> Refresh button will refresh the page
and the page count</b></font></center> 
<form method="post" align="center">

USER ID: <input type=text name="id" > <br>
PASSWORD: <input type=password name="password" > <br>
<input type=checkbox name="save" value="save">SAVE ID PASSWORD <br>
        
        <input type=checkbox name="Delete_Cookie" value="Delete_Cookie">DELETE COOKIES <br>
        <input type=checkbox name="Delete_Session" value="Delete_Session">DELETE SESSION <br>


        <input type="submit" name="Submit" value="Refresh"/>
                </form>

</body> </html>
