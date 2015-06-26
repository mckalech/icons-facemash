define ['jquery', 'underscore', 'backbone', 'imagesLoaded','utils/share' ,'text!../../templates/pair.html'], ($, _, Backbone, imagesLoaded, shareUtils, iconTemplate) ->	
	VoteView = Backbone.View.extend({
		url : "http://appsmash.cc/apps/competition/"
		el : $('.b-pair')
		isBlocked: no
		statsShown: no
		template : _.template(iconTemplate)
		initialize : (options)->
			return
		render : ()->
			that = @;
			that.$el.html('');
			that.$el.append(that.template({icons:@icons}))  
			return
		events : 
			'click .b-link img' : 'iconClick'
			'click .b-pair-share__link': 'share'
			'click .b-pair-stats-switcher' : 'switchStats'
		iconClick : (e)->
			if not @isBlocked
				@isBlocked = yes
				winner = $(e.currentTarget).data('id')
				data = JSON.stringify({winner:winner})
				@reRender()
				$.post(@url+@currentId+'/',data)
			return
		share : (e)->
			type = $(e.currentTarget).data('type')
			url = "#{location.origin}/#share/#{@icons[0].slug}/vs/#{@icons[1].slug}"
			shareUtils[type](url, @sharePhrase, @sharePhrase)
			return
		switchStats : (e)->
			if @statsShown
				@$('.b-link__info').removeClass('b-link__info_active')
				@$('.b-pair-stats-switcher').removeClass('b-pair-stats-switcher_active')
				@statsShown = not @statsShown
			else
				@$('.b-link__info').addClass('b-link__info_active')
				@$('.b-pair-stats-switcher').addClass('b-pair-stats-switcher_active')
				@statsShown = not @statsShown
			return
		reRender : ()->
			that = @
			@$el.removeClass('active');
			setTimeout(()->
				that.clearAndGet()
				return
			,300)
			return
		clearAndGet : () ->
			@$el.html('')
			@getIcons()
			return
		getIcons : ()->
			that = @
			$.ajax({
				type:"get"
				cache:false
				url:that.url
				success:(answer)->
					that.icons = answer.apps
					that.currentId = answer.id
					that.sharePhrase = answer.phrase
					that.getIconsDoneCallBack();
					return
			})
			return
		getIconsDoneCallBack : ()->
			that = @
			@render()
			@$el.imagesLoaded(()->
				that.$el.addClass('active')
				that.isBlocked = no
				that.statsShown = no
				return
			)
			return
	});
	VoteView;
	
