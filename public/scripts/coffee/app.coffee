define ['jquery', 'underscore', 'backbone','views/vote','views/stats', 'views/shared','views/header'], ($, _, Backbone, VoteView, StatsView, SharedView, HeaderView) ->
	statsView = null
	sharedView = null
	voteView = null
	headerView = null
	$pages = $('.b-block')
	iconsRouter = null

	IconsRouter = Backbone.Router.extend({
		routes :
			"" : "index",
			"top" : "routeStats"
			"share/:name1/vs/:name2" : "routeShare"
		index : ()->
			routeAdditional(voteView, {black:off})
			voteView.clearAndGet()
			return
		routeStats : ()->
			routeAdditional(statsView, {active:'top', black:on})
			statsView.getStats()
			return
		routeShare : (name1, name2)->
			routeAdditional(sharedView, {active:'logo',black:on})
			sharedView.showShare(name1, name2)
			return
	})

	routeAdditional = (view, headerOptions) ->
		$pages.hide().removeClass('active')
		headerView.render(headerOptions)
		view.$el.show()
		return

	return {
		init : () -> 
			voteView = new VoteView()
			statsView = new StatsView()
			sharedView = new SharedView()
			headerView = new HeaderView()

			iconsRouter = new IconsRouter
			Backbone.history.start()
			return @
	}

	
