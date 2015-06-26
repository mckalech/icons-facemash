define ['jquery', 'underscore', 'backbone' ,'text!../../templates/add.html'], ($, _, Backbone, addTemplate) ->	
	AddView = Backbone.View.extend({
		el : $('.b-add')
		template : _.template(addTemplate)
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

	});
	AddView;
	
