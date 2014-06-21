    // fancyBox
    $(document).ready(function() {
    $('.fancybox').fancybox({
    padding : 10,
    openEffect : 'elastic', // elastic, fade, or none
    closeEffect : 'none', // elastic, fade, or none
    nextEffect : 'fade', // elastic, fade, or none
    prevEffect : 'fade', // elastic, fade, or none
    maxWidth : 940,
    maxHeight : 540,
    fitToView : true,
    width : '100%',
    height : '100%',
    autoSize : false,
    closeClick : true,
    helpers : {title : {type: 'inside'}, overlay : {opacity: 1, css: {'background-color': '#3d3d3d'}}
    }
    });
    });