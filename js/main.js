
// Hide / sign in modal / display sign in modal
function signUp() {

	$('#signIn #register').click(function () {
		$('#signIn').modal('hide');
	})

}


// Doc Ready Scripts
$(document).ready(function() {
	signUp();
});