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
   



//save button function, stores in allNotes array and local storage data
$(".saveBtn").on("click", function () {
    var di = $(this).data('index');
    allNotes[di] = $(classes[di]).val();
    localStorage.setItem('allNotes', JSON.stringify(allNotes))
    alert("Saved")

})


rowTime = parseInt($(this).attr("id").split("-")[1]);

var di = $(this).data('index');
allNotes[di] = $(classes[di]).val();

<button type="button" class="saveBtn" data-index="4">Save</button>

//grabData function, restores data to rows from local storage
function grabData() {
    allNotes = JSON.parse(localStorage.getItem("allNotes"));
    if (allNotes == null) {
        allNotes = ["", "", "", "", "", "", "", "", "", "", ""];
        return;
    }
    for (i = 0; i < classes.length; i++) {
        ($(classes[i])).val(allNotes[i]);
    }























































