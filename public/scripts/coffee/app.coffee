define ['jquery', 'underscore', 'backbone','views/vote','views/stats', 'views/shared'], ($, _, Backbone, VoteView, StatsView, SharedView) ->
	statsView = null
	sharedView = null
	voteView = null
	$pages = $('.b-block')
	iconsRouter = null

	IconsRouter = Backbone.Router.extend({
		routes :
			"" : "index",
			"top" : "routeStats"
			"share/:name1/vs/:name2" : "routeShare"
		index : ()->
			routeAdditional(voteView, false)
			voteView.clearAndGet()
			return
		routeStats : ()->
			routeAdditional(statsView, true)
			statsView.getStats()
			return
		routeShare : (name1, name2)->
			routeAdditional(sharedView, true)
			sharedView.showShare(name1, name2)
			return
	})

	routeAdditional = (view, black) ->
		$pages.hide().removeClass('active')
		if black
			$('body').addClass('body_black')
		else
			$('body').removeClass('body_black')
		view.$el.show()
		return

	return {
		init : () -> 
			voteView = new VoteView()
			statsView = new StatsView()
			sharedView = new SharedView()

			iconsRouter = new IconsRouter
			Backbone.history.start()
			return @
	}

	
