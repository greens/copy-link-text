var href = ""
var target = null

document.addEventListener('mousedown', function(event) {
	if ((event.target.tagName == 'a' || event.target.tagName == 'A') && 
		event.shiftKey && event.button == 0) {
		target = event.target
		href = target.getAttribute('href')
		target.removeAttribute('href')
	}
});

document.addEventListener('keyup', function(event) {
	if (event.keyCode == 16 && target != null) {
		target.setAttribute('href', href)
		target = null
	}
});