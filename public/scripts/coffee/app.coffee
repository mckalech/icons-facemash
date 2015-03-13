define ['jquery', 'underscore', 'backbone','views/vote','views/stats', 'views/shared', 'views/about','views/header'], ($, _, Backbone, VoteView, StatsView, SharedView, AboutView, HeaderView) ->
	statsView = null
	sharedView = null
	voteView = null
	headerView = null
	aboutView = null
	$pages = $('.b-block')
	iconsRouter = null

	IconsRouter = Backbone.Router.extend({
		routes :
			"" : "index",
			"top" : "routeStats"
			"share/:name1/vs/:name2" : "routeShare"
			"about": "routeAbout"
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
		routeAbout : () ->
			routeAdditional(aboutView, {active:'about',black:on})
			aboutView.showAbout()
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
			aboutView = new AboutView()
			headerView = new HeaderView()

			iconsRouter = new IconsRouter
			Backbone.history.start()
			return @
	}

	
