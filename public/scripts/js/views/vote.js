(function() {
  define(['jquery', 'underscore', 'backbone', 'imagesLoaded', 'text!../../templates/pair.html'], function($, _, Backbone, imagesLoaded, iconTemplate) {
    var VoteView;
    VoteView = Backbone.View.extend({
      url: "http://82.146.46.215:8000/apps/competition/",
      el: $('.b-pair'),
      isBlocked: false,
      template: _.template(iconTemplate),
      initialize: function(options) {},
      render: function() {
        var that;
        that = this;
        that.$el.html('');
        that.$el.append(that.template({
          icons: this.icons
        }));
      },
      events: {
        'click .b-link img': 'iconClick'
      },
      iconClick: function(e) {
        var data, url, winner;
        if (!this.isBlocked) {
          this.isBlocked = true;
          winner = $(e.currentTarget).data('id');
          data = JSON.stringify({
            winner: winner
          });
          url = $.post(this.url + this.currentId + '/', data);
          this.reRender();
        }
      },
      reRender: function() {
        var that;
        that = this;
        this.$el.removeClass('active');
        setTimeout(function() {
          that.clearAndGet();
        }, 300);
      },
      clearAndGet: function() {
        this.$el.html('');
        this.getIcons();
      },
      getIcons: function() {
        var that;
        that = this;
        $.ajax({
          type: "get",
          cache: false,
          url: that.url,
          success: function(answer) {
            that.icons = answer.apps;
            that.currentId = answer.id;
            that.getIconsDoneCallBack();
          }
        });
      },
      getIconsDoneCallBack: function() {
        var that;
        that = this;
        this.render();
        this.$el.imagesLoaded(function() {
          that.$el.addClass('active');
          that.isBlocked = false;
        });
      }
    });
    return VoteView;
  });

}).call(this);
