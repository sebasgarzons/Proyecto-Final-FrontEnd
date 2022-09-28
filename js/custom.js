jQuery(document).ready(function($) {
    console.log("Hola");


/*     let nav = document.querySelector('nav');
    let toggle = document.querySelector('.toggle');
    toggle.onclick = function () {
        nav.classList.toggle('active');
    } */

/* 	$("#listCats").click(function () {
		let test = this.src;
		console.log(test);
	}); */

     $(".products_txt ul li").click(function(){
        $(".products_txt ul li").not(this).removeClass("products_txt_actv");
        $(this).addClass("products_txt_actv");
    });

	$("#indx_cts_li_1").click(function() {
        $(".cont_box_slider_cat_display").not("#slider_cat_1").fadeOut();
		$("#slider_cat_1").fadeIn();
	});

	$("#indx_cts_li_2").click(function() {
        $(".cont_box_slider_cat_display").not("#slider_cat_2").fadeOut();
		$("#slider_cat_2").fadeIn();
	});

	$("#indx_cts_li_3").click(function() {
        $(".cont_box_slider_cat_display").not("#slider_cat_3").fadeOut();
		$("#slider_cat_3").fadeIn();
	});

	$("#indx_cts_li_4").click(function() {
        $(".cont_box_slider_cat_display").not("#slider_cat_4").fadeOut();
		$("#slider_cat_4").fadeIn();
	});

	$("#indx_cts_li_5").click(function() {
        $(".cont_box_slider_cat_display").not("#slider_cat_5").fadeOut();
		$("#slider_cat_5").fadeIn();
	});

	/* */

/* ---------------------------------------------------------------- */

	$(".circle_cat").click(function(){
		$(".circle_cat").not(this).removeClass("blur");
		$(".circle_cat img").addClass("blur");
		$(".circle_cat").not(this).removeClass("actv");
		$(this).addClass("actv");
    });

});