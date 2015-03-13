define ['jquery', 'underscore', 'backbone', 'text!../../templates/header.html'], ($, _, Backbone, headerTemplate) ->	
	HeaderView = Backbone.View.extend({
		el : $('.b-header')
		blackClass:'b-header_black'
		template : _.template(headerTemplate)
		initialize : (options)->
			@render()
			return
		render : (options = {})->
			that = @;
			that.$el.html('');
			templateData = {
				active : options.active
			}
			that.$el.append(that.template(templateData))  

			if options.black
				@$el.addClass(@blackClass)
			else
				@$el.removeClass(@blackClass)

			return
	});
	HeaderView;
	
