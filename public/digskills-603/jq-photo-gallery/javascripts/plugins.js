    function switchPhoto(image, title, caption) {
    var outputPhoto = '<img src="images/' + image + '" alt="' + title + '">';
    var outputCaption = '<h2 class=&quot;feature-title&quot;>' + title + '</h2>';
    outputCaption += '<p class="caption">' + caption + '</p>';
     
    $('#photo').hide().fadeIn('fast').html(outputPhoto); // inject content and markup into page
    $('#caption').hide().fadeIn('fast').html(outputCaption); // inject content and markup into page
    } // switchPhoto   