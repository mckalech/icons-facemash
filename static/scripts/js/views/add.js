(function() {
  define(['jquery', 'underscore', 'backbone', 'text!../../templates/add.html'], function($, _, Backbone, addTemplate) {
    var AddView;
    AddView = Backbone.View.extend({
      el: $('.b-add'),
      url: "http://appsmash.cc/apps/add/",
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
        var that;
        that = this;
        e.preventDefault();
        $.post(this.url, $(e.currentTarget).serialize()).done(function(data) {
          console.log('ok');
        }).fail(function(e) {
          that.showErrors($.parseJSON(e.responseText));
        });
      },
      showErrors: function(errors) {
        var that;
        that = this;
        that.$el.find('.b-add__input').removeClass('b-add__input_error');
        $.each(errors, function(key, val) {
          return that.$el.find("[name='" + key + "']").addClass('b-add__input_error');
        });
      }
    });
    return AddView;
  });

}).call(this);
