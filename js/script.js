$("document").ready(function() {
    var headerheight =  $("#header-nav").outerHeight();
    var screenheight =  $(window).innerHeight();

    function dynamicheight (headerheight, screenheight){

        var altezzaelementi = screenheight - headerheight;
        console.log("altezza elementi: " + altezzaelementi);
        console.log("altezza header: " + headerheight);
        console.log("altezza schermo: " + screenheight);

        var jumbotron = $("#jumbotron");
        var chisiamo = $("#chi-siamo");
        var mission = $("#mission");
        var contatti = $("#contatti");
        console.log(jumbotron);
        console.log(chisiamo);
        console.log(mission);
        console.log(contatti);

        jumbotron.height(altezzaelementi + "px");
        jumbotron.css('margin-top', 150);
        console.log("margin-top jumbotron: " + jumbotron.marginTop);
        console.log("altezza jumbotron: " + jumbotron.height());
        chisiamo.height(altezzaelementi + "px");
        console.log("altezza chi-siamo: " + chisiamo.height());
        mission.height(altezzaelementi + "px");
        contatti.height(altezzaelementi + "px");

        console.log("Eseguito dinamic height");

    }

    dynamicheight(headerheight,screenheight);

    console.log("Eseguito dinamic height");
});

$(window).resize(function() {
    var headerheight =  $("#header-nav").outerHeight();
    var screenheight =  $(window).innerHeight();
    var jumbotron = $("#jumbotron");
    var chisiamo = $("#chi-siamo");

    function dynamicheight (headerheight, screenheight){

        var altezzaelementi = screenheight - headerheight;
        // console.log("altezza elementi: " + altezzaelementi);
        // console.log("altezza header: " + headerheight);
        // console.log("altezza schermo: " + screenheight);
        //
        //
        // console.log(jumbotron);
        // console.log(chisiamo)

        jumbotron.height(altezzaelementi + "px");
        jumbotron.css("margin-top", '"'+ headerheight +'px"');
        // console.log("margin-top jumbotron: " + jumbotron.marginTop);
        // console.log("altezza jumbotron: " + jumbotron.height());
        chisiamo.height(altezzaelementi + "px");
        // console.log("altezza chi-siamo: " + chisiamo.height());
        //
        // console.log("Eseguito dinamic height");

    }

    dynamicheight(headerheight,screenheight);
    console.log("Eseguito dinamic height");

    if ($(window).innerWidth() <= 767) {
        jumbotron.attr("class", "extrasmall");
        console.log("InnerWidth < 767, Inserito classe extrasmall")
    } else {
        jumbotron.removeClass("extrasmall");
        jumbotron.addClass("jumbotron");
        console.log("Classe extrasmall rimossa o non esistente");
    }

    if ($(jumbotron).hasClass("extrasmall")) {

        $(jumbotron).removeAttr("style");
        console.log("Extrasmall esistente: rimosso attributo style");
    }


});
