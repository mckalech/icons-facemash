(function() {
  define(['jquery', 'underscore', 'backbone', 'text!../../templates/add.html'], function($, _, Backbone, addTemplate) {
    var AddView;
    AddView = Backbone.View.extend({
      el: $('.b-add'),
      template: _.template(addTemplate),
      initialize: function(options) {},
      render: function() {
        var that;
        that = this;
        that.$el.html(this.template());
      },
      showAdd: function() {
        var that;
        that = this;
        that.render();
        setTimeout(function() {
          that.$el.addClass('active');
        }, 0);
      }
    });
    return AddView;
  });

}).call(this);
