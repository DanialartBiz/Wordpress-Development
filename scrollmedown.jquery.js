// test for infiniti scrolling v0.1;
jQuery(function($){
	$(window).scroll(function(){
		var data = {
			'action': 'loadmore',
			'query': true_posts,
			'page' : current_page
		};

		var marginBottom = 1800;
		if( $(document).scrollTop() > ($(document).height() - marginBottom)){
			$('.loader').remove();
			$.ajax({
				url:ajaxurl,
				data:data,
				type:'POST',
				beforeSend: function( xhr){
					$('body').addClass('loading');
					if(!$('.loader').length > 0) {
					site_container.append('<div class="loader"><i class="icon">!</i></div>');
					$('.loader').addClass('loading').show();
					}

				},
				success:function(data){
					if( data ) { 
						items_container.delay(200).append(data);
						current_page++;
					}
				},
				complete:function() {
					$('.loader').hide();
				}
			});
		}
	});

});