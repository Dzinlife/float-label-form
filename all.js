$(document).ready(function() {
	$(".js-float-label-wrapper").FloatLabel();
	$(".js-float-option-wrapper").FloatSelect();

	$(document).on("keypress", function(e) {
		if(e.keyCode == 13){
			e.preventDefault();
		}
	});

	$("input, select").focus(function(){
		$(this).parent(".js-float-label-wrapper ,.js-float-option-wrapper").removeClass("error");
	})

	$("select").change(function(){
		if ($(this)[0].selectedIndex == 0) {
			$(".reason-description").hide(0);
		}else if($(this)[0].selectedIndex >= 1 && $(this)[0].selectedIndex <= 4){
			$(".reason-description").show(0);
			$(".reason-description").children().hide(0);
			$(".reason-description-refund").show(0);
		}else if($(this)[0].selectedIndex == 5){
			$(".reason-description").hide(0);
		}
	})

	var validate = {
		"name": function () {
			if ($("#form-name").val() == '') {
				$("#form-name").parent().addClass("error");
				return false;
			}else{
				return true;
			}
		},
		"phone": function () {
			if (!validatePhone($("#form-phone").val())) {
				$("#form-phone").parent().addClass("error");
				return false;
			}else{
				return true;
			}

			function validatePhone(number) { 
				var regex = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
				return regex.test(number);
			}
		},
		"email": function () {
			if (!validateEmail($("#form-email").val())) {
				$("#form-email").parent().addClass("error");
				return false;
			}else{
				return true;
			}

			function validateEmail(email) { 
				var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return regex.test(email);
			}
		},
		"orderNumber": function () {
			if (!validateOrderNumber($("#form-order-number").val())) {
				$("#form-order-number").parent().addClass("error");
				return false;
			}else{
				return true;
			}

			function validateOrderNumber(number) {
				if (number.length >= 18 && number.length <= 20) {
					return true;
				}else{
					return false;
				}
			}
		},
		"reason": function() {
			if ($("#form-reason")[0].selectedIndex == 0) {
				$("#form-reason").parent().addClass("error");
				return false;
			}else{
				return true;
			}
		}
	}

	$("#form-name").blur(function(){
		validate.name();
	});

	$("#form-phone").blur(function(){
		validate.phone();
	});

	$("#form-email").blur(function(){
		validate.email();
	});

	$("#form-order-number").blur(function(){
		validate.orderNumber();	
	});

	$("#form-reason").blur(function(){
		validate.reason();
	});

	$(".form-wrapper").submit(function(e){
		var formValidateResault = true;
		for (n in validate){
			var thisValidateResault = validate[n]();
			formValidateResault = formValidateResault && thisValidateResault;
		};

		if (formValidateResault) {
			$.ajax({
				type: "POST",
				url: "127.0.0.1:8000",
				data : $(this).serializeArray(),
			}).done(function () {
				alert("done");
			});
		}
		e.preventDefault();
		return false;
	})

})