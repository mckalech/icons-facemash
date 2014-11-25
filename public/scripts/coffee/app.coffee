define ['jquery', 'underscore', 'backbone','views/vote','views/share'], ($, _, Backbone, VoteView, ShareView) ->
	$stats = null
	shareView = null
	voteView = null
	$pages = $('.b-block')

	IconsRouter = Backbone.Router.extend({
		routes :
			"" : "index",
			"stats" : "routeStats"
			"share/:name1/vs/:name2" : "routeShare"
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
		routeShare : (name1, name2)->
			$pages.hide()
			voteView.$el.removeClass('active')
			shareView.$el.show()
			shareView.showShare(name1, name2)
			return
	})
	return {
		init : () -> 
			voteView = new VoteView()
			$stats = $('.b-stats')
			shareView = new ShareView()

			iconsRouter = new IconsRouter
			Backbone.history.start()
			return @
	}

	
