(function() {
  define(['jquery', 'underscore', 'backbone', 'imagesLoaded', 'text!../../templates/shared.html'], function($, _, Backbone, imagesLoaded, shareTemplate) {
    var VoteView;
    VoteView = Backbone.View.extend({
      url: "http://82.146.46.215:8000/apps/share/",
      el: $('.b-share'),
      template: _.template(shareTemplate),
      initialize: function(options) {},
      render: function() {
        var that;
        that = this;
        that.$el.html('');
        that.$el.append(that.template({
          icons: this.icons
        }));
      },
      showShare: function(name1, name2) {
        var that, url;
        that = this;
        url = this.url + ("" + name1 + "/vs/" + name2 + "/");
        $.ajax({
          type: "get",
          cache: false,
          url: url,
          success: function(answer) {
            that.icons = answer.apps;
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
        });
      }
    });
    return VoteView;
  });

}).call(this);
