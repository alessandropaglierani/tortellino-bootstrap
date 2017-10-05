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
        var chisiamoanchor = $("#chi-siamo-a");
        var mission = $("#mission");

        var contatti = $("#contatti");
        console.log(jumbotron);
        console.log(chisiamo);
        console.log(mission);
        console.log(contatti);

        //set jumbotron height and position
        jumbotron.height(altezzaelementi + "px");
        jumbotron.css('margin-top', headerheight);

        //set chisiamo height and position
        chisiamo.height(altezzaelementi + "px");
        chisiamoanchor.css('top', -headerheight + "px");

        //set mission height and position
        mission.height(altezzaelementi + "px");
        $("#mission-a").css('top', -headerheight + "px");

        //set contatti height and position
        contatti.height(altezzaelementi + "px");
        $("#contatti-a").css('top', -headerheight + "px");


        console.log("Eseguito dinamic height");

    }


    dynamicheight(headerheight,screenheight);

    console.log("Eseguito dinamic height");

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    //auto collapse navbar
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
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

