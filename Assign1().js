var myShoppingSite=[{
"Mobiles": [{
"Samsung": [{
"name": "Galaxy Note 8",
"RAM": "6 GB",
"ROM": "64 GB",
"Display": "6 inch",
"Camera": "12 MP",
"Battery": "3300 mAh",
"Price": "67500"
},
{
"name": "Galaxy J7 Next",
"RAM": "3 GB",
"ROM": "32 GB",
"Display": "5.5 inch",
"Camera": "13 MP",
"Battery": "3000 mAh",
"Price": "12990"
}
],
"Mi": [{
"name": "A1",
"RAM": "4 GB",
"ROM": "64 GB",
"Display": "5.5 inch",
"Camera": "12 MP",
"Battery": "3080 mAh",
"Price": "13990"
},

{
"name": "RedMi Note4",
"RAM": "3 GB",
"ROM": "32 GB",
"Display": "5.5 inch",
"Camera": "13 MP",
"Battery": "41000 mAh",
"Price": "9999"
}
]
}],

  "Laptops": [{
"Name": "Dell Inspiron",
"Screen": "14 inch",
"GEN": "7",
"RAM": "4 GB",
"Price": "24000"
},
{
"Name": "Asus E203NA-FD026T",
"Screen": "11.6 inch",
"GEN": "7",
"RAM": "3 RAM",
"Price": "38000"
}

],

"Books": [{
"Entrance": [{
"Name": "Concepts of Physics",
"Author": "HC Verma",
"Publisher": "BHARATI BHAWAN PUB.& DIS-NEW DELHI",
"Edition": "1st Edition, 2017",
"Pages": "462",
"Price": "277"
},
{
"Name": "Understanding Physics for JEE Main & Advanced Optics & Modern Physics",
"Author": "DC Pandey",
"Publisher": "Arihant",
"Edition": "14 Edition, 2017",
"Pages": "462",
"Price": "250"


}

],
"Fiction & Non-Fiction Books": [{
"Name": "Harry Potter and the Cursed Child",
"Author": "JK Rowling",
"Publisher": "Hachette India",
"Edition": "7",
"Pages": "800",
"Price": "789"


},
{
"Name": "Wings of Fire",
"Author": "APJ Abdul Kalam",
"Publisher": "Universities Press",
"Edition": "1st Edition, 1999",
"Pages": "180",
"Price": "245"



}
]
}]
}]


 function readDataFromJson(myShoppingSite){
	
	for(i in myShoppingSite){
		console.log(myShoppingSite[i]);
	}
}



function particularEntryFromJson(myShoppingSite, entryData){
	var flag=0;
	for(i in myShoppingSite){
	for(j in myShoppingSite[i].Mobiles){
	for (k in myShoppingSite[i].Mobiles[j].Samsung) 
	{
		if(myShoppingSite[i].Mobiles[j].Samsung[k].name==entryData)
		{
			flag=1;
			return "Found";
		}
		

			
	
	}

	}

	}
	if(flag==0)
		return "Not found";
		
}
function getEntrybyIndex(myShoppingSite, indexNumber){
	flag=0;
	for(i in myShoppingSite)
	{
	  	for(j in myShoppingSite[i].Books)	
		{

			if(indexNumber>=0 && indexNumber<=myShoppingSite[i].Books[j].Entrance.length)
			{
				flag=1;
				return myShoppingSite[i].Books[j].Entrance[indexNumber].Author;
			}
		}

	
	}
	if(flag==0)
	return "invalid index"
}
readDataFromJson(myShoppingSite);
console.log(particularEntryFromJson(myShoppingSite,"Galaxy J7 Next"));
console.log(getEntrybyIndex(myShoppingSite,0));