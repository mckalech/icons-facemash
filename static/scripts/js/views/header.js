(function() {
  define(['jquery', 'underscore', 'backbone', 'utils/share', 'text!../../templates/header.html'], function($, _, Backbone, shareUtils, headerTemplate) {
    var HeaderView;
    HeaderView = Backbone.View.extend({
      el: $('.b-header'),
      blackClass: 'b-header_black',
      sharePhrase: 'Super puper app!!',
      template: _.template(headerTemplate),
      events: {
        'click .b-header__share-item': 'shareClick'
      },
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
          arrow: options.arrow,
          headerSharingWhite: options.headerSharingWhite
        };
        that.$el.append(that.template(templateData));
        if (options.black) {
          this.$el.addClass(this.blackClass);
        } else {
          this.$el.removeClass(this.blackClass);
        }
      },
      shareClick: function(e) {
        var type;
        type = $(e.currentTarget).data('type');
        return shareUtils[type](location.origin, this.sharePhrase, this.sharePhrase);
      }
    });
    return HeaderView;
  });

}).call(this);
