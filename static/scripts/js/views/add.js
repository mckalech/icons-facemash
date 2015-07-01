(function() {
  define(['jquery', 'underscore', 'backbone', 'text!../../templates/add.html'], function($, _, Backbone, addTemplate) {
    var AddView;
    AddView = Backbone.View.extend({
      el: $('.b-add'),
      url: "http://appsmash.cc/",
      template: _.template(addTemplate),
      events: {
        'submit .b-add__form': 'submitForm'
      },
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
      },
      submitForm: function(e) {
        e.preventDefault();
        $.post(this.url, $(e.currentTarget).serialize());
      }
    });
    return AddView;
  });

}).call(this);
