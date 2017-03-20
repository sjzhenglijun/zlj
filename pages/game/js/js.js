;(function (win,doc){
			function change(){
				doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px';
			}
			change();
			win.addEventListener('resize',change,false);
		})(window,document);
$(function(){
				$('.tanceng_c').click(function(){
					$('.tanceng').css('display','none');
					$('.tanceng div').animate({top:'-7rem'});
				});
				$('.cham a').click(function(){
					$('.tanceng').css('display','block');
					$('.tanceng div').animate({top:'8.5rem'});
				});
				
			});