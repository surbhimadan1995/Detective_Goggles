$(document).ready(function() {
	console.log("READY");
	$("#goggles").draggable();
	$("#paragraph_box" ).droppable({
      	drop: function( event, ui ) {
      		$(this).css({'border':'2px solid black'});
      		
  			var script=document.createElement('script');
      		script.src='http://localhost:8080/webxray.js';
      		script.className='webxray';
      		document.body.appendChild(script);
      		// Changing the text in the instructions box to reflect the story.
            $("#dotted_box_goggles").detach();
            $("#instr_text_body_id").replaceWith("<p id='crime_1_text' class='instructions_text_body'>Aha, now on the surface this seems like a nice and friendly neighbourhood. But mark my words Watson, there's a criminal tag hiding in here. He is known in the HTML world as a hyperlink. If you fall in with his lot you don't know where you'll end up. Once you locate the hyperlink (<a> tag) make him mend his erroneous ways by making him point to the right kind of website.</p>");
     	}
    });


    $("#paragraph_box_3" ).droppable({
      	drop: function( event, ui ) {
      		$(this).css({'border':'2px solid black'});
      		
  			var script=document.createElement('script');
      		script.src='http://localhost:8080/webxray.js';
      		script.className='webxray';
      		document.body.appendChild(script);
      		$("#crime_1_text").replaceWith("<p id='crime_2_text' class='instructions_text_body' style='margin-left:10%;'>We are not done solving crime for the day Watson. This image of a puppy might look cute and adorable to you. But after my experience with a certain hound in Baskerville I find dogs of any kind intolerable. Replace this puppy by a cat and quick!</p>");

     	}
    });


    $("#paragraph_box_2" ).droppable({
      	drop: function( event, ui ) {
      		$(this).css({'border':'2px solid black'});
      		
  			var script=document.createElement('script');
      		script.src='http://localhost:8080/webxray.js';
      		script.className='webxray';
      		document.body.appendChild(script);
            $("#crime_2_text").replaceWith("<p id='crime_3_text' class='instructions_text_body'>Well Watson this is our last stop for the day. This is Brown University. The text you see is the creed of the students. It's nice, but I think they have their priorities a little mixed up, don't you?</p>");

     	}
    });


});
