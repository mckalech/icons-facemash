(function() {
  define(['jquery'], function($) {
    var ShareUtil;
    ShareUtil = {
      fb: function(purl, ptitle, text, pimg) {
        var url;
        url = null;
        url = 'https://www.facebook.com/sharer/sharer.php?s=100';
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        return this.openPopup(url);
      },
      tw: function(purl, ptitle) {
        var url;
        url = null;
        url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(ptitle);
        url += '&url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        return this.openPopup(url);
      },
      openPopup: function(url) {
        return window.open(url, '', 'toolbar=0,status=0,width=526,height=300');
      }
    };
    return ShareUtil;
  });

}).call(this);
