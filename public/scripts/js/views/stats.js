(function() {
  define(['jquery', 'underscore', 'backbone', 'imagesLoaded', 'text!../../templates/stats.html'], function($, _, Backbone, imagesLoaded, statsTemplate) {
    var StatsView;
    StatsView = Backbone.View.extend({
      url: "http://82.146.46.215:8000/apps/top/",
      el: $('.b-stats'),
      template: _.template(statsTemplate),
      initialize: function(options) {},
      render: function() {
        var that;
        that = this;
        that.$el.html('');
        _.each(this.icons, function(item, index) {
          that.$el.append(that.template(item));
        });
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
              that.$el.show();
            });
          }
        });
      }
    });
    return StatsView;
  });

}).call(this);
