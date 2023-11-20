//CountFastの指定
function CountFast(name){
	$(name).one('inview', function(event, isInView) {
		if (isInView) {
			//要素が見えたときに実行する処理
			$(name).find(".count-up").each(function(){
				$(this).prop('Counter',0).animate({//0からカウントアップ
					Counter: $(this).text()
				}, {
					// スピードやアニメーションの設定
					duration: 1000,//数字が大きいほど変化のスピードが遅くなる。1000=1秒
					easing: 'swing',//動きの種類。他にもlinearなど設定可能
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	});
}

//CountSlowの指定
function CountSlow(name){
	$(name).one('inview', function(event, isInView) {
		if (isInView) {
			//要素が見えたときに実行する処理
			$(name).find(".count-up").each(function(){
				$(this).prop('Counter',0).animate({//0からカウントアップ
					Counter: $(this).text()
				}, {
					// スピードやアニメーションの設定
					duration: 3000,//数字が大きいほど変化のスピードが遅くなる。
					easing: 'swing',//動きの種類。他にもlinearなど設定可能
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	});
}

// カウントアップ
CountFast('.rt-gender');
CountSlow('.rt-status');
CountSlow('.rt-answer');

// 縦グラフ
CountSlow('.rt-age');
CountSlow('.rt-treatment');

// 横グラフ
CountSlow('.rt-onset');
CountSlow('.rt-life');
CountSlow('.rt-around');

// 都道府県
CountSlow('.rt-place');

;


//Graphの指定
function Graph(name){
	$(name).one('inview', function(event, isInView) {
		if (isInView) {
			//要素が見えたときに実行する処理
			$(name).find(".bar").each(function(){
				$(this).prop('Counter',0).animate({//0からカウントアップ
					Counter: $(this).find(".count-up").text()
				}, {
					// スピードやアニメーションの設定
					duration: 3000,//数字が大きいほど変化のスピードが遅くなる。
					easing: 'swing',//動きの種類。他にもlinearなど設定可能
					step: function (now) {
						$(this).attr({
							style:"--value:" + Math.ceil(now),
						});
					}
				});
			});
		}
	});
}


// 縦グラフ
Graph('.rt-age');
Graph('.rt-treatment');

// 横グラフ
Graph('.rt-onset');
Graph('.rt-life');
Graph('.rt-around');

