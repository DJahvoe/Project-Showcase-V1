// MODAL

// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks the button, open the modal
document.getElementById('myBtn').onclick = function () {
	modal.classList.add('modal-show');
	modal.classList.remove('modal-hide');
};

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName('close')[0].onclick = function () {
	modal.classList.remove('modal-show');
	modal.classList.add('modal-hide');
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.classList.remove('modal-show');
		modal.classList.add('modal-hide');
	}
};

// SEARCH


