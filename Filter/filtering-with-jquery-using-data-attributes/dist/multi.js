var viewport = jQuery('#viewport');
viewport.html('The following values were retrieved:<br />');
jQuery.each(viewport.data('requires'), function(index, value){
    viewport.html(viewport.html() + value + '<br />');
});