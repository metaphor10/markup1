    // Galleria
    Galleria.loadTheme('http://cdnjs.cloudflare.com/ajax/libs/galleria/1.3.5/themes/classic/galleria.classic.min.js');
    Galleria.run('#galleria', {
    autoplay : 0,
    transition : 'fadeslide', //fade, flash, pulse, slide, fadeslide
    transitionSpeed : 600,
    lightbox : true,
    lightboxFadeSpeed : 300,
    lightboxTransitionSpeed : 200,
    trueFullscreen : 'true',
    vimeo : {title: 0, byline: 0, portrait: 0, color: '29546e'},
    youtube : {modestbranding: 1, autohide: 1, color: 'white', hd: 1, rel: 0, showinfo: 0}
    });