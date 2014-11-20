define ['jquery', 'underscore', 'backbone', 'imagesLoaded' ,'text!../../templates/icon.html'], ($, _, Backbone, imagesLoaded, iconTemplate) ->	
	VoteView = Backbone.View.extend({
		el : $('.b-pair')
		template : _.template(iconTemplate)
		initialize : (options)->
			@getIcons()
			return
		render : ()->
			that = @;
			that.$el.html('');
			_.each(@icons, (item,index) ->
				that.$el.append(that.template(item))  
				return
			);
			return
		events : 
			'click .b-link' : 'reRender'
		reRender : ()->
			that = @
			@$el.removeClass('active');
			setTimeout(()->
				that.clearAndGet()
				return
			,300)
			return
		clearAndGet : () ->
			@.$el.html('')
			@.getIcons()
			return
		getIcons : ()->
			that = @
			$.get('/newcards',(answer)->
				that.icons = answer.apps
				that.getIconsDoneCallBack();
				return
			)
			return
		getIconsDoneCallBack : ()->
			that = @
			@render()
			@$el.imagesLoaded(()->
				that.$el.addClass('active')
				return
			)
			return
	});
	VoteView;
	
