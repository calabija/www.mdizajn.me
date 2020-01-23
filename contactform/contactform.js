function sendContact() {
	var valid;	
	valid = validateContact();
	if(valid) {
		jQuery.ajax({
		url: "contactform/contactform.php",
		data:'userName='+$("#userName").val()+'&userEmail='+$("#userEmail").val()+'&subject='+$("#subject").val()+'&content='+$(content).val(),
		type: "POST",
		success:function(data){
		$("#mail-status").html(data);
		},
		error:function (){}
		});
	}
}

function validateContact() {
	var valid = true;	
	$(".demoInputBox").css('background-color','');
	$(".demoInputBox").css('border','');
	$(".info1").html('');
	
	if(!$("#userName").val()) {
		$("#userName").css('background-color','#FFFFDF');
		$("#userName").css('border','1px solid red');
		valid = false;
	}
	if(!$("#userEmail").val()) {
		$("#userEmail").css('background-color','#FFFFDF');
		$("#userEmail").css('border','1px solid red');
		valid = false;
	}
	if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
		$("#userEmail").css('background-color','#FFFFDF');
		$("#userEmail").css('border','1px solid red');
		valid = false;
	}
	if(!$("#subject").val()) {
		$("#subject").css('background-color','#FFFFDF');
		$("#subject").css('border','1px solid red');
		valid = false;
	}
	if(!$("#content").val()) {
		$("#content").css('background-color','#FFFFDF');
		$("#content").css('border','1px solid red');
		valid = false;
	}
	
	return valid;
}
