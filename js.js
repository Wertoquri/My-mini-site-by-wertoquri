let theme = false;

$(document).ready(function () {
    $('.theme').on("click", function () {
        theme = !theme
        if(theme){
            $(this).addClass("light");
            $(this).text("Light theme")
            $("body").css("background-image", "linear-gradient(270deg, #123b57 0%, #603767 100%)"
            );
            $("section, footer, a").removeClass("light");
            $("section, footer, a").addClass("dark");
        }else{
            $(this).removeClass("light");
            $(this).text("Dark theme")
            $("body").css("background-image", "linear-gradient(270deg, #237ae 0%, #c16ecf 100%)"
            );
            $("section, footer, a").removeClass("dark");
            $("section, footer, a").addClass("light");
        }
    })
})