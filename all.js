$(document).ready(function() {
	$(".js-float-label-wrapper").FloatLabel();
	$(".js-float-option-wrapper").FloatSelect();

	$(document).on("keypress", function(e) {
		if(e.keyCode == 13){
			e.preventDefault();
		}
	});

	$(".form-wrapper").submit(function(e){
		e.preventDefault();
		if (true) {
			$(this).submit();
		};	
	})

	$("input, select").focus(function(){
		$(this).parent(".js-float-label-wrapper ,.js-float-option-wrapper").removeClass("error");
	})

	$("select").change(function(){
		if ($(this)[0].selectedIndex == 0) {
			$(".reason-description").hide(0);
		}else if($(this)[0].selectedIndex == 1){
			$(".reason-description").show(0);
			$(".reason-description").children().hide(0);
			$(".reason-description-refund").show(0);
		}else if($(this)[0].selectedIndex == 2){
			$(".reason-description").show(0);
			$(".reason-description").children().hide(0);
			$(".reason-description-return").show(0);
		}else if($(this)[0].selectedIndex == 3){
			$(".reason-description").show(0);
			$(".reason-description").children().hide(0);
			$(".reason-description-exchange").show(0);
		}else if($(this)[0].selectedIndex == 4){
			$(".reason-description").show(0);
			$(".reason-description").children().hide(0);
			$(".reason-description-repair").show(0);
		}else if($(this)[0].selectedIndex == 5){
			$(".reason-description").hide(0);
		}
	})

	$("#form-name").blur(function(){
		if ($(this).val() == '') {
			$(this).parent().addClass("error");
		}
	});

	$("#form-phone").blur(function(){
		if (!validatePhone($(this).val())) {
			$(this).parent().addClass("error");
		}

		function validatePhone(number) { 
			var regex = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
			return regex.test(number);
		}
	});

	$("#form-email").blur(function(){
		if (!validateEmail($(this).val())) {
			$(this).parent().addClass("error");
		}

		function validateEmail(email) { 
			var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regex.test(email);
		}
	});

	$("#form-order-number").blur(function(){
		if (!validateOrderNumber($(this).val())) {
			$(this).parent().addClass("error");
		}

		function validateOrderNumber(number) {
			if (number.length >= 18 && number.length <= 20) {
				return 1;
			}else{
				return 0;
			}
		}
	});

	$("#form-reason").blur(function(){
		if ($(this)[0].selectedIndex == 0) {
			$(this).parent().addClass("error");
		}
	});


})