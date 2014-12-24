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
        $('body').removeClass('withbg');
        voteView.$el.show();
        voteView.clearAndGet();
      },
      routeStats: function() {
        $pages.hide();
        $('body').addClass('withbg');
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
    bindMenuLinks = function() {
      $('.b-menu a').on('click', function(e) {
        e.preventDefault();
        iconsRouter.navigate($(this).attr('href'), {
          trigger: true
        });
      });
    };
    return {
      init: function() {
        voteView = new VoteView();
        statsView = new StatsView();
        shareView = new ShareView();
        iconsRouter = new IconsRouter;
        bindMenuLinks();
        Backbone.history.start({
          pushState: true
        });
        return this;
      }
    };
  });

}).call(this);
