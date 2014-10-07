(function() {
  define(['jquery', 'underscore', 'backbone', 'text!../../templates/icon.html'], function($, _, Backbone, iconTemplate) {
    var VoteView;
    VoteView = Backbone.View.extend({
      el: $('.b-pair'),
      template: _.template(iconTemplate),
      initialize: function(options) {
        this.getIcons();
      },
      render: function() {
        var that;
        that = this;
        that.$el.html('');
        _.each(this.icons, function(item, index) {
          that.$el.append(that.template(item));
        });
      },
      events: {
        'click .b-link': 'reRender'
      },
      reRender: function() {
        this.getIcons();
      },
      getIcons: function() {
        var that;
        that = this;
        that.$el.html('');
        $.get('/newcards', function(icons) {
          that.icons = icons;
          that.getIconsDoneCallBack();
        });
      },
      getIconsDoneCallBack: function() {
        this.render();
      }
    });
    return VoteView;
  });

}).call(this);
