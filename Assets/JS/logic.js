(function($){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#currentTime").text(moment().format("LTS"));

    $(".btn").on("click", function() {
        var time = $(this).parent().attr("id");
        var textcontent = $(this).siblings(".description").val();
        localStorage.setItem(time, textcontent);
        console.log(time, textcontent);
    });

    $(".btn").on("click", function() {
        location.reload()
    });

    function hourUpdater() {
        var currenthour = moment().hours();
        $(".time-block").each(function() {
            var blockhour = parseInt($(this).attr("id").split("-")[1]);
            if (blockhour < currenthour) {
                $(this).addClass("past");
            }
            else if (blockhour === currenthour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    hourUpdater();
    
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    

})(jQuery)