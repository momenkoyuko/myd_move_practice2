// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

	// ふわっ

	$('.fadeInUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('animate__animated animate__fadeInUp');// 画面内に入ったらanimate__animated animate__fadeInUpというクラス名を追記
		}else{
		$(this).removeClass('animate__animated animate__fadeInUp');// 画面外に出たらanimate__animated animate__fadeInUpというクラス名を外す
		}
		});	
	
	//ここに違う動きを書いてみよう
	$('.fadeInDownTrigger').each(function(){ //fadeInUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('animate__animated animate__fadeInDown');// 画面内に入ったらanimate__animated animate__fadeInUpというクラス名を追記
		}else{
		$(this).removeClass('animate__animated animate__fadeInDown');// 画面外に出たらanimate__animated animate__fadeInUpというクラス名を外す
		}
		});	

	
}

// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

// ページが読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまでページが読み込まれたらすぐに動かしたい場合の記述


