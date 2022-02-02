$(document).ready(function () {



    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));




// compares real mtime to calander time
    var realTime = moment().hours()
    $(".time-block").each(function () {
        rowTime = parseInt($(this).attr("id").split("-")[1]);
        console.log(rowTime, realTime);

        //if statement to compare realtime to row time
        // add past present future classes per current time

        if (rowTime < realTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");    
        }

       else if (rowTime === realTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");  
       }
       
       else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future"); 
       }   
})
    })
   

for (let i = 8; i <= 17; i++) {
    // load saved items
    var savedText = localStorage.getItem("text-" + i);
    //                                    "text-8"
    $("#row-"+i+">textarea").val(savedText);
    // "#row-8>textarea"
        
    var targetBtn = $("#row-"+i+">button")

    // when we click on targetBtn saves
    targetBtn.on("click", function() {
        var text = $("#row-"+i+">textarea").val();

        localStorage.setItem("text-"+i,text);
    }); //application-localstorage-file.save(string task +hour,text jq function)
}









