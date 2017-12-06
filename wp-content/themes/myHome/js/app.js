$(document).ready(function() {
//	$("#menu-primary").find("li").addClass("w3-bar-block w3-center");
//	$("#menu-primary").find("a").addClass("w3-bar-item w3-button w3-text-grey w3-hover-black");
	$("#menu-primary").find("a").on("click", function() {
			closeNav();
	});
	
	
});

	function openNav() {
		document.getElementById("mySidebar").style.width = "60%";
		document.getElementById("mySidebar").style.display = "block";
	}

	function closeNav() {
		document.getElementById("mySidebar").style.display = "none";
	}