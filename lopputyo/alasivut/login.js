$("document").ready(function(){
    $("#login").click(function(){
        let oikeasalis = "kakkapylly12345";
        let yritys = $("#salasana").val();
        if(oikeasalis === yritys){
            window.location.replace("adminsivu.html");
        }
    });
});