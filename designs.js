// Select color input
console.log($("#colorPicker").val());

// Select size input
//console.log($("#inputHeight").val());
//console.log($("#inputWeight").val());

$("input[type='submit']").on("click", function(event) {
    event.preventDefault();

    const height = ($("#inputHeight").val());
    const width = ($("#inputWeight").val());

    $("#pixelCanvas").empty();

    makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()
/*function madeGrid(height,width) {
    console.log(height,width);
}*/

function makeGrid(height, width) {
    //gridHeight
    //const gridHeight = 5;

    //const gridWidth = 5;

    //for each number up to gridHeight
    for(let i = 0;  i < height; i++) {

        //add row to table element 
        //console.log("row"+i);
        $("#pixelCanvas").append($("<tr></tr>"));

        //for each number up to gridWidth
        for(let j = 0; j < width; j++) {

            
            //add td to row element
            //console.log("td"+j);
            $("tr").last().append($("<td><td>"));
        }
    }

    //color square when clicked
    $("#pixelCanvas").on("click", "td", function() {

        //change the background color to event target's
        $(this).css("background-color", $("#colorPicker").val());
    });
        
}