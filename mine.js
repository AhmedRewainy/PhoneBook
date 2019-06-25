





function displayContent()
{
    var buttonCondition = document.getElementById("formInputs").style.display;
    
    if(buttonCondition=="block")
        {
            document.getElementById("formInputs").style.display="none";
            
            document.getElementById("mybtn").innerHTML="show";
        }
    else
        {
            document.getElementById("formInputs").style.display="block"
            
            document.getElementById("mybtn").innerHTML="hide";
     
            
            
        }
}











function showInputs()
{
    document.getElementById("formInputs").style.display ="block";
}

function hideInputs()
{
    document.getElementById("formInputs").style.display ="none";
}

















var userName=document.getElementById("userName");

var userPhone=document.getElementById("userPhone");

var userEmail=document.getElementById("userEmail");

var userAge=document.getElementById("userAge");


var users=[];

function addUser()
{
    
    var user = {name:userName.value ,
                   phone:userPhone.value,
                   email:userEmail.value,
                   age:userAge.value
                }
    
   users.push(user);
    
    display();
    
    clearData();
  
    
}


function clearData()
{
    userName.value="";
    userPhone.value="";
    userEmail.value="";
    userAge.value="";
}










function display()
{
    
var myBody = document.getElementById("tableBody");

var trs ="";

for(var i =0 ;i<users.length ; i++)
    {
        trs+= "<tr><td>"+users[i].name+"</td><td>"+users[i].phone+"</td><td>"+users[i].email+"</td><td>"+users[i].age+"</td></tr>";
    }

myBody.innerHTML=trs;
}





















