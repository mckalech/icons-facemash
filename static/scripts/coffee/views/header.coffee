define ['jquery', 'underscore', 'backbone','utils/share' , 'text!../../templates/header.html'], ($, _, Backbone, shareUtils, headerTemplate) ->	
	HeaderView = Backbone.View.extend({
		el : $('.b-header')
		blackClass:'b-header_black'
		sharePhrase: 'Super puper app!!'
		template : _.template(headerTemplate)
		events : 
			'click .b-header__share-item' : 'shareClick'
		initialize : (options)->
			@render()
			return
		render : (options = {})->
			that = @;
			that.$el.html('');
			templateData = {
				active : options.active
				bigLogo : options.bigLogo
				arrow: options.arrow
				headerSharingWhite : options.headerSharingWhite
			}
			that.$el.append(that.template(templateData))  

			if options.black
				@$el.addClass(@blackClass)
			else
				@$el.removeClass(@blackClass)

			return
		shareClick : (e) ->
			type = $(e.currentTarget).data('type')
			shareUtils[type](location.origin, @sharePhrase, @sharePhrase)
	});
	HeaderView;
	
