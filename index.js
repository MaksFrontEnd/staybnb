
let clients = Math.floor(Math.random()*10000)+300;

$('#number_clients').text('Відвідувачів: ' + clients);

$('.btn_place').click(function(){
	$('.dropmenu').slideToggle();
});

$('#btn-blog').click(function(){
	$('.dropmenu-blog').slideToggle();
});