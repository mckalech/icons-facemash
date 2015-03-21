define ['jquery', 'underscore', 'backbone', 'imagesLoaded' ,'text!../../templates/stats.html'], ($, _, Backbone, imagesLoaded, statsTemplate) ->	
	StatsView = Backbone.View.extend({
		url : "http://82.146.46.215:8000/apps/top/elo"
		el : $('.b-elo')
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
					that.$el.imagesLoaded(()->
						that.$el.addClass('active')
						return
					)
					return
			})
			return

	});
	StatsView;
	
