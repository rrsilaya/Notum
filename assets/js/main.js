$(document).ready(function() {
	$('.button-collapse').sideNav();
	$('.collapsible').collapsible();
	$('#post1').modal();
	$('#post2').modal();
	$('#post3').modal();
	$('#post4').modal();
	$('#today').modal();
	$('#others').modal();
	$('#switchorg').modal();
	$('#addpost').modal();
	$('select').material_select();
	$('input#post-subject').characterCounter();
	$('.datepicker').pickadate({
	    selectMonths: true,
	    selectYears: 2
	});
	$('.chips').material_chip();
	$('.chips-placeholder').material_chip({
	    placeholder: 'Enter post tags',
	    secondaryPlaceholder: '+Tag',
	});
	$('.materialboxed').materialbox();
});

$('#clear').click(function() {
	$('#search').val(''); // clear the value of the textbox
});

$('#signout').click(function() {
	leave = confirm("Are you sure you want to sign out of your account?");
	if (leave) {
		window.location.href = '../index.html';
	}
});

$('.save-changes').click(function() {
	Materialize.toast('Successfully saved changes!', 4000);
	$(this).parent().parent().parent().children()[0].click(); // trigger a click to close popup
});

$('.remove-collection').click(function() {
	confirmDelete = confirm("Are you sure you want to remove this?");
	
	if (confirmDelete) {
		Materialize.toast('Successfully removed!', 3000);
		$(this).parent().remove();
	}
});

$('#search').keypress(function(e) {
	if (e.which == 13) {
		console.log('foo');
	}
});

$('#loginbtn').click(function() {
	if ($('#login-email').val() == 'iskolar@up.edu.ph'
			&& $('#login-pass').val() == 123456) {
		window.location.href = 'dashboard/index.html';
	} else {
		Materialize.toast('Incorrect login credentials.', 3000);
	}
});

$('#signupbtn').click(function() {
	window.open('https://accounts.google.com/Login');
	setTimeout(function() {
		window.location.href= 'dashboard/index.html';
	}, 2000);
});

$('#closepost').click(function() {
	close = confirm("Are you sure you want to discard this post?");

	if (close) {
		$('#addpost').modal('close');
		Materialize.toast('Post discarded.', 3000);
	}
});

$('#postpost').click(function() {
	Materialize.toast('Successfully posted!', 3000);
});

$('.no-internet').click(function() {
	Materialize.toast('Ooops, please connect to the internet.', 3000);
});