(function() {
  define(['jquery', 'underscore', 'backbone', 'views/vote', 'views/stats', 'views/shared', 'views/header'], function($, _, Backbone, VoteView, StatsView, SharedView, HeaderView) {
    var $pages, IconsRouter, headerView, iconsRouter, routeAdditional, sharedView, statsView, voteView;
    statsView = null;
    sharedView = null;
    voteView = null;
    headerView = null;
    $pages = $('.b-block');
    iconsRouter = null;
    IconsRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "top": "routeStats",
        "share/:name1/vs/:name2": "routeShare"
      },
      index: function() {
        routeAdditional(voteView, {
          black: false
        });
        voteView.clearAndGet();
      },
      routeStats: function() {
        routeAdditional(statsView, {
          active: 'top',
          black: true
        });
        statsView.getStats();
      },
      routeShare: function(name1, name2) {
        routeAdditional(sharedView, {
          active: 'logo',
          black: true
        });
        sharedView.showShare(name1, name2);
      }
    });
    routeAdditional = function(view, headerOptions) {
      $pages.hide().removeClass('active');
      headerView.render(headerOptions);
      view.$el.show();
    };
    return {
      init: function() {
        voteView = new VoteView();
        statsView = new StatsView();
        sharedView = new SharedView();
        headerView = new HeaderView();
        iconsRouter = new IconsRouter;
        Backbone.history.start();
        return this;
      }
    };
  });

}).call(this);
