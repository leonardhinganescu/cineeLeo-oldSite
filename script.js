$(function() {

	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			var content = this.nextElementSibling;
			if (content.style.display === "block") {
				content.style.display = "none";
			} else {
				content.style.display = "block";
			}
		});
	}



	var selectedClass = "";

	$(".actiune").click(function(){ 

		selectedClass = $(this).attr("data-rel"); 

		var butoane_filtru = document.getElementsByClassName("actiune");

		var i;
		for (i = 0; i < butoane_filtru.length; i++) {
			butoane_filtru[i].classList.remove("butonactiv");
		}
		this.classList.toggle("butonactiv");

		$("#portfolio").fadeTo(100, 0);

		$("#portfolio div").not("."+selectedClass).delay(200).fadeOut().removeClass('scale-anm');

		setTimeout(function() {
			$("."+selectedClass).fadeIn().addClass('scale-anm');
		}, 100); 

		setTimeout(function() {
			$("#portfolio").fadeTo(1000, 1);
		}, 500);

	});

});