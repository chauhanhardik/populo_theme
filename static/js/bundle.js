(function(){
	(function(){
$(document).ready(function() {
	console.log("Bundlejs called on ready");
	$( "footer.global" ).attr('name','Footer from bundlejs on self wrapped anonymus function');
});
})()
}).call(this);
