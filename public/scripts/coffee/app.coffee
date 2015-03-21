define ['jquery', 'underscore', 'backbone','views/vote','views/stats','views/elo', 'views/shared', 'views/about','views/header'], ($, _, Backbone, VoteView, StatsView, EloView, SharedView, AboutView, HeaderView) ->
	statsView = null
	sharedView = null
	voteView = null
	headerView = null
	aboutView = null
	eloView = null
	$pages = $('.b-block')
	iconsRouter = null

	IconsRouter = Backbone.Router.extend({
		routes :
			"" : "index",
			"top" : "routeStats"
			"elo" : "eloStats"
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
		eloStats : ()->
			routeAdditional(eloView, {active:'top', black:on})
			eloView.getStats()
			return
		routeShare : (name1, name2)->
			routeAdditional(sharedView, {bigLogo:on, black:on})
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
			eloView = new EloView()
			sharedView = new SharedView()
			aboutView = new AboutView()
			headerView = new HeaderView()

			iconsRouter = new IconsRouter
			Backbone.history.start()
			return @
	}

	
