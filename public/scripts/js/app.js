(function() {
  define(['jquery', 'underscore', 'backbone', 'views/vote'], function($, _, Backbone, VoteView) {
    var $pages, $share, $stats, IconsRouter, voteView;
    $stats = null;
    $share = null;
    voteView = null;
    $pages = $('.b-block');
    IconsRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "stats": "routeStats",
        "share": "routeShare"
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
      routeShare: function() {
        $pages.hide();
        voteView.$el.removeClass('active');
        $share.show();
      }
    });
    return {
      init: function() {
        var iconsRouter;
        voteView = new VoteView();
        $stats = $('.b-stats');
        $share = $('.b-share');
        iconsRouter = new IconsRouter;
        Backbone.history.start();
        return this;
      }
    };
  });

}).call(this);
