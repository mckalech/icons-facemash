(function() {
  define(['jquery', 'underscore', 'backbone', 'views/vote', 'views/stats', 'views/share'], function($, _, Backbone, VoteView, StatsView, ShareView) {
    var $pages, IconsRouter, shareView, statsView, voteView;
    statsView = null;
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
        statsView.getStats();
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
        statsView = new StatsView();
        shareView = new ShareView();
        iconsRouter = new IconsRouter;
        Backbone.history.start();
        return this;
      }
    };
  });

}).call(this);
