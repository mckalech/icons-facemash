(function() {
  define(['jquery', 'underscore', 'backbone', 'views/vote', 'views/stats', 'views/share'], function($, _, Backbone, VoteView, StatsView, ShareView) {
    var $pages, IconsRouter, iconsRouter, routeAdditional, shareView, statsView, voteView;
    statsView = null;
    shareView = null;
    voteView = null;
    $pages = $('.b-block');
    iconsRouter = null;
    IconsRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "stats": "routeStats",
        "share/:name1/vs/:name2": "routeShare"
      },
      index: function() {
        routeAdditional(voteView, false);
        voteView.clearAndGet();
      },
      routeStats: function() {
        routeAdditional(statsView, true);
        statsView.getStats();
      },
      routeShare: function(name1, name2) {
        routeAdditional(shareView, true);
        shareView.showShare(name1, name2);
      }
    });
    routeAdditional = function(view, black) {
      $pages.hide().removeClass('active');
      if (black) {
        $('body').addClass('body_black');
      } else {
        $('body').removeClass('body_black');
      }
      view.$el.show();
    };
    return {
      init: function() {
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
