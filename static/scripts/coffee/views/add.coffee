define ['jquery', 'underscore', 'backbone' ,'text!../../templates/add.html'], ($, _, Backbone, addTemplate) ->	
	AddView = Backbone.View.extend({
		el : $('.b-add')
		url : "http://appsmash.cc/apps/add/"
		template : _.template(addTemplate)
		events : 
			'submit .b-add__form' : 'submitForm'
		initialize : (options)->
			return
		render : ()->
			that = @;
			that.$el.html(@template())
			return
		showAdd : () ->
			that = @
			that.render()
			setTimeout(()->
				that.$el.addClass('active')
				return
			,0)
			return
		submitForm:(e) ->
			that = @
			e.preventDefault()
			$.post(@url, $(e.currentTarget).serialize()).done((data)->
				that.$el.find('.b-add__form, .b-title').fadeOut(400,()->
					that.$el.find('.b-add__success').fadeIn()
				)
				return
			).fail((e)->
				that.showErrors($.parseJSON(e.responseText))
				return
			)
			return
		showErrors: (errors) ->
			that = @
			that.$el.find('.b-add__input').removeClass('b-add__input_error')
			$.each(errors, (key, val)->
				that.$el.find("[name='#{ key }']").addClass('b-add__input_error')
			)
				 
			return

	});
	AddView;
	
