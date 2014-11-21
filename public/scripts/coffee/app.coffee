define ['jquery', 'underscore', 'backbone','views/vote',], ($, _, Backbone, VoteView) ->
	$stats = null
	$share = null
	voteView = null
	$pages = $('.b-block')

	IconsRouter = Backbone.Router.extend({
		routes :
			"" : "index",
			"stats" : "routeStats"
			"share" : "routeShare"
		index : ()->
			$pages.hide()
			voteView.$el.show()
			voteView.clearAndGet()
			return
		routeStats : ()->
			$pages.hide()
			voteView.$el.removeClass('active')
			$stats.show()
			return
		routeShare : ()->
			$pages.hide()
			voteView.$el.removeClass('active')
			$share.show()
			return
	})
	return {
		init : () -> 
			voteView = new VoteView()
			$stats = $('.b-stats')
			$share = $('.b-share')

			iconsRouter = new IconsRouter
			Backbone.history.start()
			return @
	}

	
