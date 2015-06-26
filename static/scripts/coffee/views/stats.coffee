define ['jquery', 'underscore', 'backbone', 'imagesLoaded' ,'text!../../templates/stats.html'], ($, _, Backbone, imagesLoaded, statsTemplate) ->	
	StatsView = Backbone.View.extend({
		url : "http://appsmash.cc/apps/top"
		el : $('.b-stats')
		template : _.template(statsTemplate)
		initialize : (options)->
			return
		render : ()->
			that = @;
			that.$el.html('');
			that.$el.append(that.template({icons:@icons}))  
			return
		getStats : ()->
			that = @
			$.ajax({
				type:"get"
				cache:false
				url:that.url
				success:(answer)->
					that.icons = answer.apps
					that.render()
					that.$el.addClass('active')
					#that.$el.imagesLoaded(()->
					#	return
					#)
					return
			})
			return

	});
	StatsView;
	
