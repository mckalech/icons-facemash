define ['jquery', 'underscore', 'backbone', 'imagesLoaded' ,'text!../../templates/pair.html'], ($, _, Backbone, imagesLoaded, shareTemplate) ->	
	VoteView = Backbone.View.extend({
		url : "http://82.146.46.215:8000/apps/share/"
		el : $('.b-share')
		template : _.template(shareTemplate)
		initialize : (options)->
			return
		render : ()->
			that = @;
			that.$el.html('');
			that.$el.append(that.template({icons:@icons}))  
			return

		showShare : (name1, name2)->
			that = @
			url = @url+"#{name1}/vs/#{name2}/"
			$.ajax({
				type:"get"
				cache:false
				url:url
				success:(answer)->
					that.icons = answer.apps
					that.getIconsDoneCallBack()
					return
			})
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
	
