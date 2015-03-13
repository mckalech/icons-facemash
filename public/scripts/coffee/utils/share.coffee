define ['jquery'], ($) ->	
	ShareUtil = 
	    fb: (purl, ptitle, pimg, text) ->
	        url = null
	        url  = 'https://www.facebook.com/sharer/sharer.php?s=100';
	        url += '&p[url]='       + encodeURIComponent(purl);
	        url += '&p[title]='     + encodeURIComponent(ptitle);
	        url += '&p[summary]='   + encodeURIComponent(text);
	        url += '&p[images][0]=' + encodeURIComponent(pimg);
	        @openPopup(url);
	    tw: (purl, ptitle) ->
	        url = null
	        url  = 'http://twitter.com/share?';
	        url += 'text='      + encodeURIComponent(ptitle);
	        url += '&url='      + encodeURIComponent(purl);
	        url += '&counturl=' + encodeURIComponent(purl);
	        @openPopup(url);
	    openPopup: (url) ->
	        window.open(url,'','toolbar=0,status=0,width=526,height=300');
	ShareUtil;
	
