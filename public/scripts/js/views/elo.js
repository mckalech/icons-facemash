(function() {
  define(['jquery', 'underscore', 'backbone', 'imagesLoaded', 'text!../../templates/stats.html'], function($, _, Backbone, imagesLoaded, statsTemplate) {
    var StatsView;
    StatsView = Backbone.View.extend({
      url: "http://82.146.46.215:8000/apps/top/elo",
      el: $('.b-elo'),
      template: _.template(statsTemplate),
      initialize: function(options) {},
      render: function() {
        var that;
        that = this;
        that.$el.html('');
        that.$el.append(that.template({
          icons: this.icons
        }));
      },
      getStats: function() {
        var that;
        that = this;
        $.ajax({
          type: "get",
          cache: false,
          url: that.url,
          success: function(answer) {
            that.icons = answer.apps;
            that.render();
            that.$el.imagesLoaded(function() {
              that.$el.addClass('active');
            });
          }
        });
      }
    });
    return StatsView;
  });

}).call(this);
