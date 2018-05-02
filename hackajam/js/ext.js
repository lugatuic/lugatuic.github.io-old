function count_exec(txtDate) {
    eventDate = Date.parse(txtDate) / 1000;        // Parse the date string
    currentDate =         Math.floor($.now() / 1000);                                        // Find the timestamp for now
    seconds = eventDate - currentDate;                                        // Find the number of seconds remaining
	if (currentDate > eventDate) {
		seconds = currentDate - eventDate;					// Find the number of seconds past since countdown.
	}


    days =                         Math.floor(seconds / (60 * 60 * 24));                // Divide to find the number of days remaining
    seconds -=                days * 60 * 60 * 24;                                                // Subtract the number of (complete, => 24 hours) days calculated above
    
    hours =                 Math.floor(seconds / (60 * 60));                        // Get the number of hours from that modified number ^
    seconds -=                hours * 60 * 60;
    
    minutes =                 Math.floor(seconds / 60);
    seconds -=                minutes * 60;

    this_sel.find('#days').val(days).trigger('change');
    this_sel.find('#hours').val(hours).trigger('change');
    this_sel.find('#mins').val(minutes).trigger('change');
    this_sel.find('#secs').val(seconds).trigger('change');

} // End of count_exec();

$(document).ready(function(){
	$(".knob").knob({
		'width': 150,
		'readOnly': true,
	});
	startDate = '23 november 2013 10:00:00';
	endDate = '23 november 2013 22:00:00';
	eventDate = Date.parse( startDate ) / 1000; // Start Date of HackaJam 
	currentDate = Math.floor($.now() / 1000);
	if (currentDate > eventDate && currentDate < (eventDate+3600*12)) {
	$('#countdown').countdown( {date: endDate} ); // End Date of HackaJam
		$("#secs").change(function() {
		$("#subtitles span").text("The HackaJam will end in " +
			$("#days").val()
			+ " Days, " 
			+ $("#hours").val() 
			+ " Hours, "
			+ $("#mins").val()
			+ " Minutes, and "
			+ $("#secs").val() 
			+ " seconds!");
	});

	} else if (currentDate > eventDate && currentDate > (eventDate+(3600*12))) {
		$('#countdown').countdown( {date: endDate} );  // End Date of HackaJam
		$("#secs").change(function() {
		$("#subtitles span").text("The HackaJam ended " +
			$("#days").val()
			+ " Days, " 
			+ $("#hours").val() 
			+ " Hours, "
			+ $("#mins").val()
			+ " Minutes, and "
			+ $("#secs").val() 
			+ " seconds ago!");
	});

	}else {
		$('#countdown').countdown( {date: startDate} ); // Start Date of HackaJam
		$("#secs").change(function() {
		$("#subtitles span").text("The HackaJam starts in " +
			$("#days").val()
			+ " Days, " 
			+ $("#hours").val() 
			+ " Hours, "
			+ $("#mins").val()
			+ " Minutes, and "
			+ $("#secs").val() 
			+ " seconds!");
	});

	}

});
