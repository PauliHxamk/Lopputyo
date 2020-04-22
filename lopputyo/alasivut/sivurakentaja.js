let valitturuokalaji = [];
let ostoskori = [];
let ateriat=0;
let lukko = false;
$("document").ready(function(){
    let sivu = $("body").attr("id");
    switch(sivu){
        case "lihat":
            luosivu("liharuoka");
            break;
        case "kanat":
            luosivu("kanaruoka");
            break;
        case "kalat":
            luosivu("kalaruoka");
            break;
        case "kasvit":
            luosivu("kasvisruoka");
            break;
        case "Laktoositon":
            luosivu("Laktoositon");
            break;
        case "Gluteeniton":
            luosivu("Gluteeniton");
            break;
    }



    function luosivu(tyyppi){
        $.ajax({
            url:"../server/data/data.json",
            success:function(data){
                for(let i = 0; i < data.ruokalista.length; i++){
                    //console.log(data.ruokalista[i].ruokalaji);
                    if(tyyppi == data.ruokalista[i].ruokalaji){
                        valitturuokalaji.push(data.ruokalista[i]);
                    }
                    if(data.ruokalista[i].ruokavalio.includes(tyyppi)){
                        valitturuokalaji.push(data.ruokalista[i]);
                    }
                }
                //console.log(valitturuokalaji);
                let table = "<table class='w3-table w3-striped w3-bordered'><tr><th>Aterian nimi</th><th>Hinta</th><th>Ainekset</th><th>Ruokavalio</th></tr>"
                let iidee;
                for(let x=0; x<valitturuokalaji.length; x++){
                    iidee = valitturuokalaji[x].nimi;
                    iidee = iidee.replace(/ /g,'');
                    table += "<tr><td>"+ valitturuokalaji[x].nimi +"</td><td>"+ valitturuokalaji[x].hinta +"</td><td>"+ valitturuokalaji[x].ainekset +"</td><td>"+ valitturuokalaji[x].ruokavalio +"</td><td><button id="+iidee+" class="+valitturuokalaji[x].hinta+">Lisää</button></td></tr>";

                }
                table += "</table>";
                $("#poyta").html(table);

                $("button").on("click",function(){
                    if($(this).attr("class") != "linkki" && $(this).attr("id") != "peruuta"){
                        let valitut = 0;
                        for(let i = 0; i < 6; i++){
                            if(localStorage.key(i)){
                                valitut++;
                                console.log(valitut);
                        }
                    }
                        localStorage.setItem(valitut,($(this).attr("class").substring(1)+$(this).closest("tr").find("td:first").text()));
                        //console.log($(this).closest("tr").find("td:first").text());
                    }
            
                });

                
            }
            
        });
        
    }

    

    

});