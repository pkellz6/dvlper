;(function($){
	'use strict';
	var DHComingSoon = {
		init: function(){
			$('.comingsoon__countdown').final_countdown({
		        selectors: {
	                value_seconds: '.comingsoon__countdown__item__canvas-seconds__text .value',
	                canvas_seconds: 'canvas-seconds',
	                value_minutes: '.comingsoon__countdown__item__canvas-minutes__text .value',
	                canvas_minutes: 'canvas-minutes',
	                value_hours: '.comingsoon__countdown__item__canvas-hours__text .value',
	                canvas_hours: 'canvas-hours',
	                value_days: '.comingsoon__countdown__item__canvas-days__text .value',
	                canvas_days: 'canvas-days'
	            },
	            seconds: {
	                borderColor: '#1E1E24',
	                borderWidth: '6'
	            },
	            minutes: {
	                borderColor: '#1E1E24',
	                borderWidth: '6'
	            },
	            hours: {
	                borderColor: '#1E1E24',
	                borderWidth: '6'
	            },
	            days: {
	                borderColor: '#1E1E24',
	                borderWidth: '6'
	            }
		    });
		}
	}
	$(document).ready(function(){
		DHComingSoon.init();
	});
})(jQuery);