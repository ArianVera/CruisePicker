// main.js


/*------------------------ DECLARE VARIABLES ----------------------------*/
    var http_request = new XMLHttpRequest();
	var FEED_URL = "https://api.myjson.com/bins/2gr36";
	var frm = document.forms.radioForm;
	var total_price = document.getElementById("total_amount");
	
	
	//CRUISE 1
	var cruise_line1_name = document.getElementById("cruise_line1_name");
	var cruise_ship1_name = document.getElementById("cruise_ship1_name");
	var cruise_sailing_title1 = document.getElementById("cruise_sailing_title1");
	var sailing1_date1 = document.getElementById("sailing1_date1");
	var sailing1_date1_price = document.getElementById("sailing1_date1_price");
	var sailing1_date2 = document.getElementById("sailing1_date2");
	var sailing1_date2_price = document.getElementById("sailing1_date2_price");
	var sailing1_date3 = document.getElementById("sailing1_date3");
	var sailing1_date3_price = document.getElementById("sailing1_date3_price");		
	var sailing1_img = document.getElementById("sailing1_img");
	var starting_price1 = document.getElementById("starting_price1"); 
	var radio1_1 = document.getElementById("radio1_1");
	var radio1_2 = document.getElementById("radio1_2");
	var radio1_3 = document.getElementById("radio1_3");
	radio1_1.checked=false;
	radio1_2.checked=false;
	radio1_3.checked=false;
	
	//CRUISE 2
	var cruise_line2_name = document.getElementById("cruise_line2_name");
	var cruise_ship2_name = document.getElementById("cruise_ship2_name");
	var cruise_sailing_title2 = document.getElementById("cruise_sailing_title2");
	var sailing2_date1 = document.getElementById("sailing2_date1");
	var sailing2_date1_price = document.getElementById("sailing2_date1_price");
	var sailing2_date2 = document.getElementById("sailing2_date2");
	var sailing2_date2_price = document.getElementById("sailing2_date2_price");
	var sailing2_date3 = document.getElementById("sailing2_date3");
	var sailing2_date3_price = document.getElementById("sailing2_date3_price");		
	var sailing2_img = document.getElementById("sailing2_img");
	var starting_price2 = document.getElementById("starting_price2"); 	
	var radio2_1 = document.getElementById("radio2_1");
	var radio2_2 = document.getElementById("radio2_2");
	var radio2_3 = document.getElementById("radio2_3");	
	radio2_1.checked=false;
	radio2_2.checked=false;
	radio2_3.checked=false;
	
	
	//CRUISE 3
	var cruise_line3_name = document.getElementById("cruise_line3_name");
	var cruise_ship3_name = document.getElementById("cruise_ship3_name");
	var cruise_sailing_title3 = document.getElementById("cruise_sailing_title3");
	var sailing3_date1 = document.getElementById("sailing3_date1");
	var sailing3_date1_price = document.getElementById("sailing3_date1_price");
	var sailing3_date2 = document.getElementById("sailing3_date2");
	var sailing3_date2_price = document.getElementById("sailing3_date2_price");
	var sailing3_date3 = document.getElementById("sailing3_date3");
	var sailing3_date3_price = document.getElementById("sailing3_date3_price");		
	var sailing3_img = document.getElementById("sailing3_img");	
	var starting_price3 = document.getElementById("starting_price3"); 	
	var radio3_1 = document.getElementById("radio3_1");
	var radio3_2 = document.getElementById("radio3_2");
	var radio3_3 = document.getElementById("radio3_3");	
	radio3_1.checked=false;
	radio3_2.checked=false;
	radio3_3.checked=false;
	
/*----------------------------------- Retrieve Data from API ------------------------------ */
	
	http_request.onreadystatechange=function() {

    	if (http_request.readyState == 4 && http_request.status == 200) {
		  	var data = JSON.parse(http_request.responseText);



/*-------------------------  Assign Data from JSON to Variables --------------------------- */			
			//CRUISE 1
			cruise_line1_name.innerHTML = data.cruise_lines[0].cruise_line_name;
			cruise_ship1_name.innerHTML= data.cruise_lines[0].cruise_ship_name;
			cruise_sailing_title1.innerHTML= data.sailings[0].sailing_name;
			sailing1_date1.innerHTML = data.sailings[0].sailing_options[0].sailing_date;
			sailing1_date1_price.innerHTML = "$"+ data.sailings[0].sailing_options[0].sailing_price;
			sailing1_date2.innerHTML = data.sailings[0].sailing_options[1].sailing_date;
			sailing1_date2_price.innerHTML = "$"+ data.sailings[0].sailing_options[1].sailing_price;
			sailing1_date3.innerHTML = data.sailings[0].sailing_options[2].sailing_date;
			sailing1_date3_price.innerHTML = "$"+ data.sailings[0].sailing_options[2].sailing_price;
			sailing1_img.style.backgroundImage = 'url('+data.sailings[0].sailing_main_image+')';
			starting_price1.innerHTML = "$"+ lowest(data.sailings[0].sailing_options[0].sailing_price, data.sailings[0].sailing_options[1].sailing_price, data.sailings[0].sailing_options[2].sailing_price);
			radio1_1.setAttribute('data-price', data.sailings[0].sailing_options[0].sailing_price);
			radio1_2.setAttribute('data-price', data.sailings[0].sailing_options[1].sailing_price);
			radio1_3.setAttribute('data-price', data.sailings[0].sailing_options[2].sailing_price);
			
			
			
			//CRUISE 2
			cruise_line2_name.innerHTML = data.cruise_lines[1].cruise_line_name;
			cruise_ship2_name.innerHTML= data.cruise_lines[1].cruise_ship_name;
			cruise_sailing_title2.innerHTML= data.sailings[1].sailing_name;
			sailing2_date1.innerHTML = data.sailings[1].sailing_options[0].sailing_date;
			sailing2_date1_price.innerHTML = "$"+ data.sailings[1].sailing_options[0].sailing_price;
			sailing2_date2.innerHTML = data.sailings[1].sailing_options[1].sailing_date;
			sailing2_date2_price.innerHTML = "$"+ data.sailings[1].sailing_options[1].sailing_price;
			sailing2_date3.innerHTML = data.sailings[1].sailing_options[2].sailing_date;
			sailing2_date3_price.innerHTML = "$"+ data.sailings[1].sailing_options[2].sailing_price;
			sailing2_img.style.backgroundImage = 'url('+data.sailings[1].sailing_main_image+')';
			starting_price2.innerHTML = "$"+ lowest(data.sailings[1].sailing_options[0].sailing_price, data.sailings[1].sailing_options[1].sailing_price, data.sailings[1].sailing_options[2].sailing_price);
			radio2_1.setAttribute('data-price', data.sailings[1].sailing_options[0].sailing_price);
			radio2_2.setAttribute('data-price', data.sailings[1].sailing_options[1].sailing_price);
			radio2_3.setAttribute('data-price', data.sailings[1].sailing_options[2].sailing_price);
			
			
			
			//CRUISE 3
			cruise_line3_name.innerHTML = data.cruise_lines[2].cruise_line_name;
			cruise_ship3_name.innerHTML= data.cruise_lines[2].cruise_ship_name;
			cruise_sailing_title3.innerHTML= data.sailings[2].sailing_name;
			sailing3_date1.innerHTML = data.sailings[2].sailing_options[0].sailing_date;
			sailing3_date1_price.innerHTML = "$"+ data.sailings[2].sailing_options[0].sailing_price;
			sailing3_date2.innerHTML = data.sailings[2].sailing_options[1].sailing_date;
			sailing3_date2_price.innerHTML = "$"+ data.sailings[2].sailing_options[1].sailing_price;
			sailing3_date3.innerHTML = data.sailings[2].sailing_options[2].sailing_date;
			sailing3_date3_price.innerHTML = "$"+ data.sailings[2].sailing_options[2].sailing_price;
			sailing3_img.style.backgroundImage = 'url('+data.sailings[2].sailing_main_image+')';
			starting_price3.innerHTML = "$"+ lowest(data.sailings[2].sailing_options[0].sailing_price, data.sailings[2].sailing_options[1].sailing_price, data.sailings[2].sailing_options[2].sailing_price);				
			radio3_1.setAttribute('data-price', data.sailings[2].sailing_options[0].sailing_price);
			radio3_2.setAttribute('data-price', data.sailings[2].sailing_options[1].sailing_price);
			radio3_3.setAttribute('data-price', data.sailings[2].sailing_options[2].sailing_price);
			
			    
    	}
	}

/*-------------------------------------- Send HTTP Request ----------------------------------*/
	http_request.open("GET", FEED_URL);
	http_request.send();
	





/*------------------------ Dynamically Change Total Value from Radio Selection -------------*/

	
	frm.onchange = function(e) {
    var tot = 0;
    for( var i = 0, l = frm.elements.length; i < l; i++ ) {
        if( frm.elements[i].checked ) {
            tot +=  parseInt((frm.elements[i].getAttribute('data-price')));
        }  
    }
    document.getElementById('total_amount').innerHTML = tot/1;
	};

	
/*------------------------- Get lowest price from each Cruise Line -------------*/
	
	function lowest(price1, price2, price3){
			return Math.min(price1,price2,price3);	
						
	};