// test for infiniti scrolling v0.1;
	function loadNewPosts(container, selector) {
		$.ajax({
			type:"GET",
			url: window.location.host,
			dataType:"html",
			success: function(data) {
				container.remove();
			}
		})
	} //
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
			loadNewPosts('.latest .items', '.item');
		}
	})