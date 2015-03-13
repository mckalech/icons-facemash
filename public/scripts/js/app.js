(function() {
  define(['jquery', 'underscore', 'backbone', 'views/vote', 'views/stats', 'views/shared'], function($, _, Backbone, VoteView, StatsView, SharedView) {
    var $pages, IconsRouter, iconsRouter, routeAdditional, sharedView, statsView, voteView;
    statsView = null;
    sharedView = null;
    voteView = null;
    $pages = $('.b-block');
    iconsRouter = null;
    IconsRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "top": "routeStats",
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
        routeAdditional(sharedView, true);
        sharedView.showShare(name1, name2);
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
        sharedView = new SharedView();
        iconsRouter = new IconsRouter;
        Backbone.history.start();
        return this;
      }
    };
  });

}).call(this);
