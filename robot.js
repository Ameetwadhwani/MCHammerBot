$(document).ready (function() {
	$(document).keydown(function(e) {

		// listens for any navigation keypress activity
			
				switch(e.which) {
					// user presses the "Q" STRAFE LEFT
					case 81: 	$(".Q").addClass("active");
						$(document).keyup(function(e){
						$(".Q").removeClass("active");
						});
						
						break; 
								
					// user presses the "W" key FORWARD
					case 87:	$(".W").addClass("active");
						$(document).keyup(function(e){
						$(".W").removeClass("active");
						});
						
						break;
								
			 		// user presses the "E" key STRAFE RIGHT
					case 69:	$(".E").addClass("active");
						$(document).keyup(function(e){
						$(".E").removeClass("active");
						});
						
						break;
								
					// user presses the "A" key LEFT 
					case 65:	$(".A").addClass("active");
						$(document).keyup(function(e){
						$(".A").removeClass("active");
						});

						break;
								
					// user presses the "S" key REVERSE 
					case 83:	$(".S").addClass("active");
						$(document).keyup(function(e){
						$(".S").removeClass("active");
						});
						
						break; 

					// user presses the "D" key RIGHT
					case 68:	$(".D").addClass("active");
						$(document).keyup(function(e){
						$(".D").removeClass("active");
						});
						
						break;

								// user presses the "X" key STOP
					case 88:	$(".X").addClass("active");
						$(document).keyup(function(e){
						$(".X").removeClass("active");
						});
						
						break;
				}
	})
});

	// $('#robot').append().text(e.type + ':' + e.which);

	// $(document).on('keypress', function(e){
	// 	console.log('key pressed was ' + e.which);
 //    // if(e.which === '37') {
 //    //   // $('#robot').append('<p>hello</p>');
 //    //   console.log('hello');
 //    //   }



	




// http://d2o0t5hpnwv4c1.cloudfront.net/013_keypress/demo/demo.html
// http://net.tutsplus.com/tutorials/javascript-ajax/how-to-create-a-keypress-navigation-using-jquery/


// });
// keystroke values 
// left = 37
// up = 38
// right = 39
// down = 40