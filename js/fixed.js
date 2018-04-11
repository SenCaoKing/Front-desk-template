var he=$(".header").height();
$(window).scroll(function(){
	var docS=$(document).scrollTop();
	// 2,当滚动的大于等于上面的
	if(docS >= 0){
		// 定位
		$(".header").css({
			"position":'fixed',
			"top":0,
		});

		$(".main").css("margin-top",he+0);
	}else{
		$(".header").css({
			"position":'relative'
		});
		$(".main").css("margin-top",0);
	}
})