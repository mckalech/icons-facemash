(function() {
  define(['jquery', 'underscore', 'backbone', 'imagesLoaded', 'text!../../templates/about.html'], function($, _, Backbone, imagesLoaded, aboutTemplate) {
    var AboutView;
    AboutView = Backbone.View.extend({
      el: $('.b-about'),
      template: _.template(aboutTemplate),
      initialize: function(options) {},
      render: function() {
        var that;
        that = this;
        that.$el.html(this.template());
      },
      showAbout: function() {
        var that;
        that = this;
        that.render();
        setTimeout(function() {
          that.$el.addClass('active');
        }, 0);
      }
    });
    return AboutView;
  });

}).call(this);
