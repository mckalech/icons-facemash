(function() {
  define(['jquery', 'underscore', 'backbone', 'views/vote', 'views/stats', 'views/share'], function($, _, Backbone, VoteView, StatsView, ShareView) {
    var $pages, IconsRouter, bindMenuLinks, iconsRouter, shareView, statsView, voteView;
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
        $pages.hide();
        $('body').removeClass('body_black');
        shareView.$el.removeClass('active');
        voteView.$el.show();
        voteView.clearAndGet();
      },
      routeStats: function() {
        $pages.hide();
        $('body').addClass('body_black');
        voteView.$el.removeClass('active');
        shareView.$el.removeClass('active');
        statsView.getStats();
      },
      routeShare: function(name1, name2) {
        $pages.hide();
        $('body').addClass('body_black');
        voteView.$el.removeClass('active');
        shareView.$el.show();
        shareView.showShare(name1, name2);
      }
    });
    bindMenuLinks = function() {
      $('.b-menu a').on('click', function(e) {});
    };
    return {
      init: function() {
        voteView = new VoteView();
        statsView = new StatsView();
        shareView = new ShareView();
        iconsRouter = new IconsRouter;
        bindMenuLinks();
        Backbone.history.start();
        return this;
      }
    };
  });

}).call(this);
