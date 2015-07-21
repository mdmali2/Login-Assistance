function aFunction(){
var AdminUsername = document.getElementById("AUsername").value;
var AdminEmail = document.getElementById("AEmail").value;

var admin;

var href = "SecurityQuestion.html";
var href2 ="Contact.html";


if(AdminUsername == null || AdminUsername == "")
	{
		if(AdminEmail == null || AdminEmail == "")
		{
			window.open(href2,"Contact","",true);	
		}
		else
		{
			admin = [AdminUsername, AdminEmail];
			window.open(href,"Security Question","",true);
			
		}
	}
else
	{
		if(AdminEmail == null || AdminEmail == "")
		{
			admin = [AdminUsername, AdminEmail];
			window.open(href,"Security Question","",true);
		}
		else
		{
			admin = [AdminUsername, AdminEmail];
			window.open(href,"Security Question","",true);
		}
	}
}


function pAFunction()
{
var AdminEmail = document.getElementById("AEmail").value;

var admin;

var href = "SecurityQuestion.html";
var href2 ="Contact.html";


		if(AdminEmail == null || AdminEmail == "")
		{
			window.open(href2,"Contact","",true);	
		}
		else
		{
			admin = [AdminEmail];
			window.open(href,"Security Question","",true);
			
		}
	}

function pFunction()
{
	var PartUsername = document.getElementById("PUsername").value;
	var PartEmail = document.getElementById("PEmail").value;
	var PartUID = document.getElementById("UID").value;
	var PartDOB = document.getElementById("DOB").value;
	
	var part;
	
	var href = "SecurityQuestion.html";
	var href2 ="Contact.html";
	
if(PartUsername == null || PartUsername == "")
	{
		if(PartEmail == null || PartEmail == "")
		{
			if(PartUID == null || PartUID == "")
			{
				if(PartDOB == null || PartDOB == "")
				{
					window.open(href2,"Contact","",true);
				}
				else
				{
					alert("Must enter UID and DOB to proceed. If you dont know your UID contact CBS.");	
				}
			}
			else
			{
				if(PartDOB == null || PartDOB == "")
				{
					alert("Must enter UID and DOB to proceed. If you dont know your UID contact CBS.");	
				}
				else
				{
					part = [PartUID, PartDOB];
					window.open(href,"Security Question","",true);
				}
			}
		}
		else
		{
			part = [PartUsername, PartEmail];
			window.open(href,"Security Question","",true);
			
		}
	}
else
	{
		if(PartEmail == null || PartEmail == "")
		{
			part = [PartUsername, PartEmail];
			window.open(href,"Security Question","",true);
		}
		else
		{
			part = [PartUsername, PartEmail];
			window.open(href,"Security Question","",true);
		}
	}
}

function pPFunction()
{
	var PartEmail = document.getElementById("PEmail").value;
	var PartUID = document.getElementById("UID").value;
	var PartDOB = document.getElementById("DOB").value;
	
	var part;
	
	var href = "SecurityQuestion.html";
	var href2 ="Contact.html";
	

		if(PartEmail == null || PartEmail == "")
		{
			if(PartUID == null || PartUID == "")
			{
				if(PartDOB == null || PartDOB == "")
				{
					window.open(href2,"Contact","",true);
				}
				else
				{
					alert("Must enter UID and DOB to proceed. If you dont know your UID contact CBS.");	
				}
			}
			else
			{
				if(PartDOB == null || PartDOB == "")
				{
					alert("Must enter UID and DOB to proceed. If you dont know your UID contact CBS.");	
				}
				else
				{
					part = [PartUID, PartDOB];
					window.open(href,"Security Question","",true);
				}
			}
		}
		else
		{
			part = [PartEmail];
			window.open(href,"Security Question","",true);
			
		}
	}



function bFunction()
{
var href2 = "Contact.html"
var href3 ="InfoDisplay.html";
var rightAnswer = document.getElementById("Answer").value;	

if(rightAnswer == 7)
{
	window.open(href3,"Account Info","",true);
			
}
else if(rightAnswer !== 7)
{
	window.open(href2,"Contact","",true);
}

}


