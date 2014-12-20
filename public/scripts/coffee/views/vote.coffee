define ['jquery', 'underscore', 'backbone', 'imagesLoaded' ,'text!../../templates/icon.html'], ($, _, Backbone, imagesLoaded, iconTemplate) ->	
	VoteView = Backbone.View.extend({
		url : "http://82.146.46.215:8000/apps/competition/"
		el : $('.b-pair')
		isBlocked: no
		template : _.template(iconTemplate)
		initialize : (options)->
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
			'click .b-link' : 'iconClick'
		iconClick : (e)->
			if not @isBlocked
				@isBlocked = yes
				winner = $(e.currentTarget).data('id')
				data = JSON.stringify({winner:winner})
				url = 
				$.post(@url+@currentId+'/',data)
				@reRender()
			return
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
			$.ajax({
				type:"get"
				cache:false
				url:that.url
				success:(answer)->
					that.icons = answer.apps
					that.icons[0].side = 'left'
					that.icons[1].side = 'right'
					that.currentId = answer.id
					that.getIconsDoneCallBack();
					return
			})
			return
		getIconsDoneCallBack : ()->
			that = @
			@render()
			@$el.imagesLoaded(()->
				that.$el.addClass('active')
				that.isBlocked = no
				return
			)
			return
	});
	VoteView;
	
