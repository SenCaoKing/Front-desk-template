$(function(){
	$(".log>li>a").hover(function(){
		$(this).addClass("shouye");
	},function(){
		$(this).removeClass("shouye");
		$("#sy").addClass("shouye");
	})
	$(".small li a").click(function(){
		$(this).addClass("all").siblings().removeClass("all");
		var index = $(this).index();
		var newUl=$(this).parents('.cosplay').siblings('.tt').find('ul');
		newUl.eq(index).addClass('active').siblings().removeClass('active');
	})
	$('.small li a:eq(0)').click(function(){
		// $('.tt .tabchange').addClass('active');
	})
	$('.answer a').click(function(){
		var n=$(this).index();
		var e=$(this).parents('.cosplay').siblings('.clothes').find('.que');
		e.eq(n).addClass('active').siblings().removeClass('active');
	});




	
})

