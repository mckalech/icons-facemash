define ['jquery', 'underscore', 'backbone', 'imagesLoaded' ,'text!../../templates/stats.html'], ($, _, Backbone, imagesLoaded, statsTemplate) ->	
	StatsView = Backbone.View.extend({
		url : "http://82.146.46.215:8000/apps/top/"
		el : $('.b-stats')
		template : _.template(statsTemplate)
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
						that.$el.show()
						return
					)
					return
			})
			return

	});
	StatsView;
	
