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
        var that;
        that = this;
        this.$el.fadeOut(300, function() {
          that.$el.html('');
          that.getIcons();
        });
      },
      getIcons: function() {
        var that;
        that = this;
        $.get('/newcards', function(answer) {
          that.icons = answer.apps;
          that.getIconsDoneCallBack();
        });
      },
      getIconsDoneCallBack: function() {
        this.render();
        this.$el.fadeIn(300);
      }
    });
    return VoteView;
  });

}).call(this);
