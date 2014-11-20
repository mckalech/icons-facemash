(function() {
  define(['jquery', 'underscore', 'backbone', 'views/vote'], function($, _, Backbone, VoteView) {
    var $pair, $stats, IconsRouter, pairClass, statsClass, voteView;
    $pair = null;
    $stats = null;
    pairClass = '.b-pair';
    statsClass = '.b-stats';
    voteView = null;
    IconsRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "stats": "routeStats"
      },
      index: function() {
        $stats.hide();
        $pair.show();
        if (voteView) {
          voteView.clearAndGet();
        } else {
          voteView = new VoteView();
        }
      },
      routeStats: function() {
        $pair.hide().removeClass('active');
        $stats.show();
      }
    });
    return {
      init: function() {
        var iconsRouter;
        $pair = $(pairClass);
        $stats = $(statsClass);
        iconsRouter = new IconsRouter;
        Backbone.history.start();
        return this;
      }
    };
  });

}).call(this);
