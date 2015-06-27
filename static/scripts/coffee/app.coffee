define ['jquery', 'underscore', 'backbone','views/vote','views/stats', 'views/shared', 'views/about', 'views/add','views/header'], ($, _, Backbone, VoteView, StatsView, SharedView, AboutView, AddView, HeaderView) ->
	statsView = null
	sharedView = null
	voteView = null
	headerView = null
	aboutView = null
	addView = null
	$pages = $('.b-block')
	iconsRouter = null

	IconsRouter = Backbone.Router.extend({
		routes :
			"" : "index",
			"top" : "routeStats"
			"share/:name1/vs/:name2" : "routeShare"
			"about": "routeAbout"
			"add": "routeAdd"
			"*path": "route404"
		index : ()->
			routeAdditional(voteView, {black:off})
			voteView.clearAndGet()
			return
		routeStats : ()->
			routeAdditional(statsView, {active:'top', black:on, arrow:on})
			statsView.getStats()
			return
		routeShare : (name1, name2)->
			routeAdditional(sharedView, {bigLogo:on, black:on})
			sharedView.showShare(name1, name2)
			return
		routeAbout : () ->
			routeAdditional(aboutView, {active:'about',black:on, arrow:on})
			aboutView.showAbout()
			return
		routeAdd : () ->
			routeAdditional(addView, {active:'add',black:on, arrow:on})
			addView.showAdd()
			return
		route404: () ->
			alert(404)
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
			addView = new AddView()
			headerView = new HeaderView()

			iconsRouter = new IconsRouter
			Backbone.history.start()
			return @
	}

	
