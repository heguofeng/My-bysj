
window.onload=function(){	
	/*导航条固定位置*/
	$(window).scroll(function(){
		var top=$(this).scrollTop();
		var nav=$('.nav');
		var navTop=nav.offset().top;
		if(top>110){
			nav.addClass("wrap_logo_fixed");
			nav.removeClass("wrap_logo");
		}else{
			nav.addClass("wrap_logo");
			nav.removeClass("wrap_logo_fixed");
		}
		if(top>=400){
			$('#to_top').css("display","block");
		}else{
			$('#to_top').css("display","none");
		}
	});	
	//给左侧菜单做个当前页面效果
		$(".content_l_list").find("li").click(function(){
				$(".content_l_list").find("li").each(function(){
					$(this).css({"border":"none","border-bottom":"1px solid #E5E5E5"});
					$(this).find("span").css("color","#a9a9a9");
				});
				$(this).css("border-bottom","2px solid #ff6347");	
				$(this).find("span").css("color","#ff6347");
		});
	
	//封装一个ajax异步更新按钮事件			
	function btnClick(btn,newhtml){
		$(btn).on("click",function(){
			$(".content_right").css("display","block");
			$(".content_right2").css("display","none");
			$(".content_right").load(newhtml);
		})
	}
	//左侧菜单按钮事件
	btnClick("#charges","c_charges.php");
	btnClick("#about","c_about.php?id=3");
	btnClick("#services","c_about.php?id=4");
	btnClick("#knowledge","c_knowledge.php?id=2");
	btnClick("#professional","c_knowledge.php?id=1");
	btnClick("#contact","c_contact.php");
	$("#environment").on('click',function(){
		$(".content_right").css("display","none");
		$(".content_right2").css("display","block");
	});
	
	
	/*个人信息页面的按钮*/
	btnClick(".info_title_txt","infoEdit.php");
	btnClick("#editmsg","infoEdit.php");
	btnClick("#editpwd","infoEditPwd.php");	
	btnClick("#editTx","infoEditTx.php");	
	btnClick("#account","infoAccount.php");
	btnClick("#pay","infoPay.php");

//回到顶部
$('#to_top').click(function(){
		$('body,html').animate({scrollTop:0},500);
});


}
