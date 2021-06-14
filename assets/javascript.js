
var currentDate = moment().format("MMMM Do YYYY");
console.log(currentDate);
console.log(moment().format("H"));
console.log($(".time-block #6").attr("id"))
$("#currentDay").append(currentDate);
currentTime = moment().format("H")

currentTimeColor = function() {
 
    for (let i =5; i<19; i++) {
        var getID = $(".time-block #i").attr("id")
        debugger;
        if (moment(getID).isBefore(currentTime)) {
            $("#i").addClass("past")
            
        }
    }

}
currentTimeColor();