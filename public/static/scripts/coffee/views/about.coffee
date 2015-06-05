define ['jquery', 'underscore', 'backbone', 'imagesLoaded' ,'text!../../templates/about.html'], ($, _, Backbone, imagesLoaded, aboutTemplate) ->	
	AboutView = Backbone.View.extend({
		el : $('.b-about')
		template : _.template(aboutTemplate)
		initialize : (options)->
			return
		render : ()->
			that = @;
			that.$el.html(@template())
			return
		showAbout : () ->
			that = @
			that.render()
			setTimeout(()->
				that.$el.addClass('active')
				return
			,0)
			return

	});
	AboutView;
	
