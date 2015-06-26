(function() {
  define(['jquery', 'underscore', 'backbone', 'text!../../templates/header.html'], function($, _, Backbone, headerTemplate) {
    var HeaderView;
    HeaderView = Backbone.View.extend({
      el: $('.b-header'),
      blackClass: 'b-header_black',
      template: _.template(headerTemplate),
      initialize: function(options) {
        this.render();
      },
      render: function(options) {
        var templateData, that;
        if (options == null) {
          options = {};
        }
        that = this;
        that.$el.html('');
        templateData = {
          active: options.active,
          bigLogo: options.bigLogo,
          arrow: options.arrow
        };
        that.$el.append(that.template(templateData));
        if (options.black) {
          this.$el.addClass(this.blackClass);
        } else {
          this.$el.removeClass(this.blackClass);
        }
      }
    });
    return HeaderView;
  });

}).call(this);
