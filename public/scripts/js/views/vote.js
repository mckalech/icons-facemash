(function() {
  define(['jquery', 'underscore', 'backbone', 'imagesLoaded', 'text!../../templates/pair.html'], function($, _, Backbone, imagesLoaded, iconTemplate) {
    var VoteView;
    VoteView = Backbone.View.extend({
      url: "http://82.146.46.215:8000/apps/competition/",
      el: $('.b-pair'),
      isBlocked: false,
      statsShown: false,
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
        'click .b-link img': 'iconClick',
        'click .b-pair-stats-switcher': 'switchStats'
      },
      iconClick: function(e) {
        var data, winner;
        if (!this.isBlocked) {
          this.isBlocked = true;
          winner = $(e.currentTarget).data('id');
          data = JSON.stringify({
            winner: winner
          });
          this.reRender();
          $.post(this.url + this.currentId + '/', data);
        }
      },
      switchStats: function(e) {
        if (this.statsShown) {
          this.$('.b-link__info').removeClass('b-link__info_active');
          this.$('.b-pair-stats-switcher').removeClass('b-pair-stats-switcher_active');
          this.statsShown = !this.statsShown;
        } else {
          this.$('.b-link__info').addClass('b-link__info_active');
          this.$('.b-pair-stats-switcher').addClass('b-pair-stats-switcher_active');
          this.statsShown = !this.statsShown;
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
          that.statsShown = false;
        });
      }
    });
    return VoteView;
  });

}).call(this);
