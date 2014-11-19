define ['jquery', 'underscore', 'backbone','views/vote',], ($, _, Backbone, VoteView) ->
	$pair = null
	$stats = null
	pairClass = '.b-pair'
	statsClass = '.b-stats'
	voteView = null

	IconsRouter = Backbone.Router.extend({
		routes :
			"" : "index",
			"stats" : "routeStats"
		index : ()->
			$stats.hide()
			if voteView
				voteView.reRender()
			else
				voteView = new VoteView()
			$pair.show().addClass('active')
			return
		routeStats : ()->
			$pair.hide().removeClass('active')
			$stats.show()
			return
	})
	return {
		init : () -> 
			$pair = $(pairClass)
			$stats = $(statsClass)

			iconsRouter = new IconsRouter
			Backbone.history.start()
			return @
	}

	
