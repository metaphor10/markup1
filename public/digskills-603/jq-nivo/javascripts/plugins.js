// Nivo Slider
    $(window).load(function() {
    $('#slider').nivoSlider({
    effect : 'fade', // Specify sets like: 'fold,fade,sliceDown'
    slices : 15, // For slice animations
    boxCols : 8, // For box animations
    boxRows : 4, // For box animations
    animSpeed : 500, // Slide transition speed
    pauseTime : 4000, // How long each slide will show
    startSlide : 0, // Set starting Slide (0 index)
    directionNav : true, // Next & Prev navigation
    directionNavHide : true, // Only show on hover
    controlNav : true, // 1,2,3... navigation
    pauseOnHover : true, // Stop animation while hovering
    manualAdvance : true, // Force manual transitions
    randomStart : false // Start on a random slide
    });
    });