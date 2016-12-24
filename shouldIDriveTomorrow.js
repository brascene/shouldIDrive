(function shouldIDriveTomorrow(myRegTable="E96-T-234"){
	var initialDay = 24;
	var currentDay = new Date().getDate();
	var result = myRegTable.split("-")[2].split("")[2]%2===0;
	return (currentDay-initialDay)%2===0 ? result : !result; 
}())
