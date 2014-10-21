define ['jquery', 'underscore', 'backbone', 'text!../../templates/icon.html'], ($, _, Backbone, iconTemplate) ->	
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
			@$el.fadeOut(300, ()->
				that.$el.html('');
				that.getIcons()
				return	
			)
			return
		getIcons : ()->
			that = @
			$.get('/newcards',(icons)->
				that.icons = icons
				that.getIconsDoneCallBack();
				return
			)
			return
		getIconsDoneCallBack : ()->
			@render()
			@$el.fadeIn(300)
			return
	});
	VoteView;
	
