console.log("Me is here!");

var needToConfirm = true;

jQuery('a').click(function() { 

  var needToConfirm = false;

});

window.onbeforeunload = confirmExit;

function confirmExit() {
	if (needToConfirm == true) {
		return "Heb je alles opgeslagen?";
	}
}