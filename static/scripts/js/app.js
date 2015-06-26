(function() {
  define(['jquery', 'underscore', 'backbone', 'views/vote', 'views/stats', 'views/shared', 'views/about', 'views/add', 'views/header'], function($, _, Backbone, VoteView, StatsView, SharedView, AboutView, AddView, HeaderView) {
    var $pages, IconsRouter, aboutView, addView, headerView, iconsRouter, routeAdditional, sharedView, statsView, voteView;
    statsView = null;
    sharedView = null;
    voteView = null;
    headerView = null;
    aboutView = null;
    addView = null;
    $pages = $('.b-block');
    iconsRouter = null;
    IconsRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "top": "routeStats",
        "share/:name1/vs/:name2": "routeShare",
        "about": "routeAbout",
        "add": "routeAdd"
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
          black: true,
          arrow: true
        });
        statsView.getStats();
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
          black: true,
          arrow: true
        });
        aboutView.showAbout();
      },
      routeAdd: function() {
        routeAdditional(addView, {
          active: 'add',
          black: true,
          arrow: true
        });
        addView.showAdd();
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
        aboutView = new AboutView();
        addView = new AddView();
        headerView = new HeaderView();
        iconsRouter = new IconsRouter;
        Backbone.history.start();
        return this;
      }
    };
  });

}).call(this);
