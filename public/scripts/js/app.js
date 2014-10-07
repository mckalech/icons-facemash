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
        if (voteView) {
          voteView.reRender();
        } else {
          voteView = new VoteView();
        }
        $pair.show();
      },
      routeStats: function() {
        $pair.hide();
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
