var like = $('#like');
var likeRed = $('#like-red');

$(like).click(function(){
	$(like).css = ('display', 'none'); 
	$(like).toggle();
	$(likeRed).toggle();
	$(likeRed).css('animation', "click .6s");	
});

$(likeRed).click(function(){
	console.log('ds');
	$(likeRed).toggle();
	$(like).toggle();
	
});