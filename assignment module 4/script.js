var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";

for(var i=0; i<=names.length;i++){
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
		document.write("Goodbye " + names[i]);
	}else{
		document.write("Hello " + names[i]);
	}

	
	if(names[i]!==undefined){
		document.write( "<br>");
	}


	
}



