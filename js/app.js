$(function(){
	$(".usbok").hide();
	$(".reseauok").hide();
	$(".mario").hide();
	$(".cci").hide();
	$(".rodezagglo").hide();
	$(".edn").hide();
	$(".mairie").hide();
	$(".briquette").hide();

	$(".usbko").click(function(){
		$(".usbko").hide();
		$(".usbok").show();


	    $('.usbok').draggable({
	    	axis: 'y',
	    	snap: '.portusb',
	    	revert : true,

	    });

	    $('.ribbon').droppable({
	    	revert: "valid",
	    	drop : function(){
				$(".right").animate({"left": "+=50px"},"slow");
	    		$(".arrow").hide();
	    		$(".ribbon").hide(200);
	    		$(".reseauko").hide()
	    		$('.reseauok').show();
	    		$(".usbok").hide();
	    		$(".helloworld").hide(400);
	    		$(".mario").show(1000);
				$(".edn").show(3500);			    		
				$(".rodezagglo").show(3500);
				$(".mairie").show(3500);
	    		$(".cci").show(3500);
	    		$(".briquette").show();
    		}
	    });
	});



	// $(".portusb").click(function() {
	// $(".left").animate(
	// 		{"width": "80px"},
	// 		"fast");

	// });
	// $(".portusb").click(function() {
	// $(".right").animate(
	// 		{"width": "-80px"},
	// 		"fast");

	// });
});

