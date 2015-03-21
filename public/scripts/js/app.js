(function() {
  define(['jquery', 'underscore', 'backbone', 'views/vote', 'views/stats', 'views/elo', 'views/shared', 'views/about', 'views/header'], function($, _, Backbone, VoteView, StatsView, EloView, SharedView, AboutView, HeaderView) {
    var $pages, IconsRouter, aboutView, eloView, headerView, iconsRouter, routeAdditional, sharedView, statsView, voteView;
    statsView = null;
    sharedView = null;
    voteView = null;
    headerView = null;
    aboutView = null;
    eloView = null;
    $pages = $('.b-block');
    iconsRouter = null;
    IconsRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "top": "routeStats",
        "elo": "eloStats",
        "share/:name1/vs/:name2": "routeShare",
        "about": "routeAbout"
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
      eloStats: function() {
        routeAdditional(eloView, {
          active: 'top',
          black: true
        });
        eloView.getStats();
      },
      routeShare: function(name1, name2) {
        routeAdditional(sharedView, {
          bigLogo: true,
          black: true
        });
        sharedView.showShare(name1, name2);
      },
      routeAbout: function() {
        routeAdditional(aboutView, {
          active: 'about',
          black: true
        });
        aboutView.showAbout();
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
        eloView = new EloView();
        sharedView = new SharedView();
        aboutView = new AboutView();
        headerView = new HeaderView();
        iconsRouter = new IconsRouter;
        Backbone.history.start();
        return this;
      }
    };
  });

}).call(this);
