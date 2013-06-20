$(document).ready (function() {
	$(document).keypress(function(e) {
		$('#robot').append().text(e.type + ':' + e.which);

	})



	// $(document).on('keypress', function(e){
	// 	console.log('key pressed was ' + e.which);
 //    // if(e.which === '37') {
 //    //   // $('#robot').append('<p>hello</p>');
 //    //   console.log('hello');
 //    //   }


	});
	







// });
// keystroke values 
// left = 37
// up = 38
// right = 39
// down = 40