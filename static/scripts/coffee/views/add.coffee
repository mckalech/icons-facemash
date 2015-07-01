define ['jquery', 'underscore', 'backbone' ,'text!../../templates/add.html'], ($, _, Backbone, addTemplate) ->	
	AddView = Backbone.View.extend({
		el : $('.b-add')
		url : "http://appsmash.cc/"
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
			e.preventDefault()
			$.post(@url, $(e.currentTarget).serialize())
			return

	});
	AddView;
	
