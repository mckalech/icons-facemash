(function() {
  define(['jquery', 'underscore', 'backbone', 'views/vote', 'views/share'], function($, _, Backbone, VoteView, ShareView) {
    var $pages, $stats, IconsRouter, shareView, voteView;
    $stats = null;
    shareView = null;
    voteView = null;
    $pages = $('.b-block');
    IconsRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "stats": "routeStats",
        "share/:name1/vs/:name2": "routeShare"
      },
      index: function() {
        $pages.hide();
        voteView.$el.show();
        voteView.clearAndGet();
      },
      routeStats: function() {
        $pages.hide();
        voteView.$el.removeClass('active');
        $stats.show();
      },
      routeShare: function(name1, name2) {
        $pages.hide();
        voteView.$el.removeClass('active');
        shareView.$el.show();
        shareView.showShare(name1, name2);
      }
    });
    return {
      init: function() {
        var iconsRouter;
        voteView = new VoteView();
        $stats = $('.b-stats');
        shareView = new ShareView();
        iconsRouter = new IconsRouter;
        Backbone.history.start();
        return this;
      }
    };
  });

}).call(this);
