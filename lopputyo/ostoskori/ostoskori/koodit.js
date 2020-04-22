//Ostoskori
let ostosKori = [];

$(document).ready(function(){
	$("#tulostaKaikki").click(function(){
		$.ajax({url: "tuoteluettelo.json",success: function(result) { 				
			//lähetetään palvelimelta tullut data (result-array) parsittavaksi.				
			tulostaLuettelo(result); 
		}, error: function(xhr){ //Virheen käsittely, jos esim. tiedostoa ei löydy
			alert("Virhe!"); //Tähän tulee tilanteeseen sopiva virheen käsittely
		}
	});
});

//Ostoskorin tulostus
$("#tulostaOstoskori").click(function(){
		//Haetaan palvelimelta tiedosto tuoteluettelo.json
		$.ajax({url: "tuoteluettelo.json",success: function(result) { 				
				let ostosKoriRivi = "";
				for(i = 0;i < ostosKori.length; i++){ 		
					ostosKoriRivi += "<br/> id: " + ostosKori[i] + " Tuote: " + result[ostosKori[i] - 1].tuote + "<br/>";	
				}
				$("#tulostusAlue").html(ostosKoriRivi);
		}, error: function(xhr){ //Virheen käsittely, jos esim. tiedostoa ei löydy
			alert("Virhe!"); //Tähän tulee tilanteeseen sopiva virheen käsittely
		}
	});
});
	
//Ostoskoriin lisääminen
	$("#tulostusAlue").on("click",".valintaNappi",function(e){
				e.preventDefault();
				alert( "Lisätty ostokoriin tuote " + $(this).attr("id"));
				let id = $(this).attr("id");
				ostosKori.push(id);				
	});
});


//***********************************************************************
//Tulostetaan kaikki tuotteet ja nappi, jolla voi lisätä ostoskoriin 
function tulostaLuettelo(result){ //saa koko tiedoston
	var luettelo = "<table id='taulukko' border='1'>"; 
	for(i = 0;i < result.length; i++){ 
		luettelo += "<tr><td>" + result[i].id + "</td><td>" + result[i].tuote +  "</td><td><button class='valintaNappi' id='" + result[i].id + "'>Lisää ostoskoriin</button></td></tr>";		
	}
	luettelo += "</table>"; //taulukon lopetus
	
	//tulostus diville		
	$("#tulostusAlue").html(luettelo);		
};


	