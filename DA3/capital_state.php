<?php
$cap = array( "Andhra Pradesh"=>"Amravati","Arunachal Pradesh"=>"Itanagar","Assam"=>"Dispur","Bihar"=>"Patna","Chhatisgarh"=>"Raipur",
"Goa"=>"Panaji","Gujarat"=>"Gandhinagar","Haryana"=>"Chandigarh","Himachal Pradesh"=>"Shimla","Jammu and Kashmir"=>"Srinagar","Jharkhand"=>"Ranchi",
"Karnataka"=>"Bangaluru","Kerala"=>"Thiruvananhapuram","Madhya Pradesh"=>"Bhopal","Maharashtra"=>"Mumbai","Manipur"=>"Imphal","Meghalaya"=>"Shillong",
"Mizoram"=>"Aizwal","Tamil Nadu"=>"Chennai","Telengana"=>"Hyderabad","West Bengal"=>"Kolkata") ;
asort($cap) ;
foreach($cap as $state => $capital)
{
echo "The capital of $state is $capital"."<br>" ;
}
?>