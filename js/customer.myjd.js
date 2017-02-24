$(function(){
	
	//头部导航条悬浮显示/隐藏
	$('#jd_area, #change_arrow, #jd_mobile, #jd_focus, #jd_custom, #jd_3w, #shopcar').hover(function(){
		$(this).find('.drop_layer').show();
	},function(){
		$(this).find('.drop_layer').hide();
	});

	//送至地区切换-选中地区名字
	$('div.dd div.area_infor div ul li a').hover(function (){
		var t_class = $(this).attr('class');
		if(t_class != undefined && 
			t_class.indexOf('area_select') != -1){
		}else{
			$(this).attr('class', 'area_hover');
		}
	},function(){
		var t_class = $(this).attr('class');
		if(t_class != undefined && 
			t_class.indexOf('area_select') == -1){
				$(this).attr('class', '');
		}
	});

	//送至地区切换-获取地区名字
	$('div.dd div.area_infor div ul li a').click(function(){
		$('span#sendToCity').text($(this).html());
		$('div.dd div.area_infor div ul li a').each(function(){
			$(this).attr('class', '');
		});
		$(this).attr('class', 'area_select');
		
	});
	

	//全部商品分类
	$('.all-goods .item').hover(function(){
		$(this).addClass('active').find('s').hide();
		$(this).find('.product-wrap').show();
	},function(){
		$(this).removeClass('active').find('s').show();
		$(this).find('.product-wrap').hide();
	});
	});
	
	
	// 今日推荐
	$(document).ready(function(e) {
		/***不需要自动滚动，去掉即可***/
		time = window.setInterval(function(){
			$('.og_next').click();	
		},5000);
		/***不需要自动滚动，去掉即可***/
		linum = $('.mainlist li').length;//图片数量
		w = linum * 250;//ul宽度
		$('.piclist').css('width', w + 'px');//ul宽度
		$('.swaplist').html($('.mainlist').html());//复制内容
		
		$('.og_next').click(function(){
			
			if($('.swaplist,.mainlist').is(':animated')){
				$('.swaplist,.mainlist').stop(true,true);
			}
			
			if($('.mainlist li').length>4){//多于4张图片
				ml = parseInt($('.mainlist').css('left'));//默认图片ul位置
				sl = parseInt($('.swaplist').css('left'));//交换图片ul位置
				if(ml<=0 && ml>w*-1){//默认图片显示时
					$('.swaplist').css({left: '1000px'});//交换图片放在显示区域右侧
					$('.mainlist').animate({left: ml - 1000 + 'px'},'slow');//默认图片滚动				
					if(ml==(w-1000)*-1){//默认图片最后一屏时
						$('.swaplist').animate({left: '0px'},'slow');//交换图片滚动
					}
				}else{//交换图片显示时
					$('.mainlist').css({left: '1000px'})//默认图片放在显示区域右
					$('.swaplist').animate({left: sl - 1000 + 'px'},'slow');//交换图片滚动
					if(sl==(w-1000)*-1){//交换图片最后一屏时
						$('.mainlist').animate({left: '0px'},'slow');//默认图片滚动
					}
				}
			}
		});
		$('.og_prev').click(function(){
			
			if($('.swaplist,.mainlist').is(':animated')){
				$('.swaplist,.mainlist').stop(true,true);
			}
			
			if($('.mainlist li').length>4){
				ml = parseInt($('.mainlist').css('left'));
				sl = parseInt($('.swaplist').css('left'));
				if(ml<=0 && ml>w*-1){
					$('.swaplist').css({left: w * -1 + 'px'});
					$('.mainlist').animate({left: ml + 1000 + 'px'},'slow');				
					if(ml==0){
						$('.swaplist').animate({left: (w - 1000) * -1 + 'px'},'slow');
					}
				}else{
					$('.mainlist').css({left: (w - 1000) * -1 + 'px'});
					$('.swaplist').animate({left: sl + 1000 + 'px'},'slow');
					if(sl==0){
						$('.mainlist').animate({left: '0px'},'slow');
					}
				}
			}
		})    
	});
	
	$(document).ready(function(){
		$('.og_prev,.og_next').hover(function(){
				$(this).fadeTo('fast',1);
			},function(){
				$(this).fadeTo('fast',0.7);
		});

	
	//tab切换
	$('.demo1').Tabs();
	$('.demo2').Tabs();
	$('.demo3').Tabs();
	$('.demo4').Tabs();
	$('.demo5').Tabs();
	$('.demo6').Tabs();
	$('.demo7').Tabs();
	$('.demo8').Tabs();
	$('.demo9').Tabs();
	$('.demo10').Tabs();
	$('.demo11').Tabs();
	$('.demo12').Tabs();
	
	//轮播图 -start
	//楼层
	$(".chinaz, .img2, .fl_22banner, .fl_33banner, .fl_10banner, .fl_12banner").hover(function(){
		$(this).find(".prev,.next").fadeTo("show",0.7);
	},function(){
		$(this).find(".prev,.next").hide();
	});

	//轮播点
	$(".chinaz").slide({ titCell:".num ul" , mainCell:".51buypic" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	$(".img2").slide({ titCell:".num ul" , mainCell:".1change" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	$(".fl_22banner").slide({ titCell:".num ul" , mainCell:".twochange" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	$(".fl_33banner").slide({ titCell:".num ul" , mainCell:".thchange" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	 $(".fl_10banner").slide({ titCell:".num ul" , mainCell:".tenchange" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	 $(".fl_12banner").slide({ titCell:".num ul" , mainCell:".twchange" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	//轮播图 -end
	
	//热门晒单的间歇滚动
	$("#fl_10main").rollGallery({
			direction:"bottom",
			speed:3000,
			showNum:2
		});
			
	
	// 楼层右侧的导航条@ 给窗口加滚动条事件
	$(window).scroll(function () {
	// 获得窗口滚动上去的距离
	var ling = $(document).scrollTop();
	// 在标题栏显示滚动的距离
	//document.title = ling;
	// 如果滚动距离大于1306的时候让滚动框出来
	if (ling > 1306) {
	$('#box').show();
	}
	if (1306 < ling && ling < 2520) {
	// 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
	$('#box ul li').eq(0).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(0).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 3380) {
	$('#box ul li').eq(1).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(1).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 3955) {
	$('#box ul li').eq(2).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(2).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 4530) {
	$('#box ul li').eq(3).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(3).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 5245) {
	$('#box ul li').eq(4).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(4).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 5820) {
	$('#box ul li').eq(5).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(5).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 6395) {
	$('#box ul li').eq(6).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(6).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 6970) {
	$('#box ul li').eq(7).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(7).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 7685) {
	$('#box ul li').eq(8).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(8).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 8260) {
	$('#box ul li').eq(9).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(9).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 8835) {
	$('#box ul li').eq(10).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(10).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	}else if (ling < 9410) {
	$('#box ul li').eq(11).find('.num').hide().siblings('.word').css('display', 'block');
	$('#box ul li').eq(11).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	}
	if (ling > 9410 || ling < 1306) {
	$('#box').css('display','none'); // @ 这一句和下一句效果一样。
	$('#box').hide();
	}
	})
	
	//楼层点击事件 定位到楼层
	$(".word").click(function () {
		var id = $(this).attr("data-id");
		var h = $("#item-" + id).offset().top;
		$('body,html').animate({ scrollTop: h }, 200);
		});
	});
	

	//楼层左侧楼层跳转
	$(function(){
		$('#box ul li').hover(function () {
		$(this).find('.num').hide().siblings('.word').css({ 'display': 'block', 'background': '#CB1C39', 'color': 'white' });
		}, function () {
			$(this).find('.num').css({ 'display': 'block', 'background': 'white', 'color': '#666' }).siblings('.word').hide().css({ 'display': 'none', 'background': '', 'color': '' });
	
	});
	
	//首页右下固定导航条
	$('.toolbar-tab').hover(function (){ 
	$(this).find('.tab-text').addClass("tbar-tab-hover");
	$(this).find('.footer-tab-text').addClass("tbar-tab-footer-hover");
	$(this).addClass("tbar-tab-selected");
	},function(){
		$(this).find('.tab-text').removeClass("tbar-tab-hover");
		$(this).find('.footer-tab-text').removeClass("tbar-tab-footer-hover");
		$(this).removeClass("tbar-tab-selected"); });
	$("#return_top").click(function(){if(scroll=="off") return;
	$("html,body").animate({scrollTop: 0}, 600);})
	//返回顶部
	$("#return_top").click(function(){if(scroll=="off") return;$("html,body").animate({scrollTop: 0}, 600);})


});	