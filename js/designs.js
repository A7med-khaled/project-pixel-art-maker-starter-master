


const row_input = $("#input_height");
const col_input = $("#input_width");
// Select color input
var colorValue=$("#colorPicker").val();
$('#colorPicker').change(function(){ 
            colorValue=($(this).val());
  });

// Select size input
$("#set-size").on("click",function () {

	$('#pixel_canvas').html("");

	let gHieght=row_input.val();
	let gWidth=col_input.val();

	for (var k = 1; k <= gHieght; k++) 
	{
     
     $row = $('<tr></tr>');

     	for (var i = 1; i <= gWidth; i++) 
     	{
     	     $row.append('<td></td>');
     	}

	 $('#pixel_canvas').append($row);
	}

});

//reset the canvas
 $("#reset_canvas").on("click",function () {
 	$("td").each(function  (e) {
 		$(this).css("background-color","#fff");
 	});
  });

//paint
$("#pixel_canvas").on("click","td",function(e) {
 	$(this).css("background-color",colorValue);
 	
 });

 














