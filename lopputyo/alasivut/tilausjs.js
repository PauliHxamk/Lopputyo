$("document").ready(function(){
    let hintayht = 0;
    
    //$("#ostostable").addClass("invistilhover");
    let poyta = "<table class='w3-table w3-striped w3-bordered'><tr><th>Aterian nimi</th><th>Hinta</th></tr>";
    for(let i = 0; i < localStorage.length; i++){
        let data = localStorage.getItem(localStorage.key(i));
        let ateria = data.substring(5);
        let hinta = data.substring(0,5);
        hintayht += Number(hinta);
        console.log(ateria + " " + hinta);
        poyta += "<tr><td>" + ateria + "</td><td>€" + hinta + "</td></tr>";
    }
    poyta += "<tr><th>Yhteensä</th><td>€"+hintayht+"</td></tr></table>";
    $("#ostostable").html(poyta);
});