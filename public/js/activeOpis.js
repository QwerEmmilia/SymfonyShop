$(document).ready(function() {
    $('.section-title').click(function() {
        var $sectionContent = $(this).next('.section-content');
        $(this).toggleClass('active');
        $sectionContent.slideToggle(200);

        // Hide other sections if any are open
        $('.section-title').not(this).removeClass('active');
        $('.section-content').not($sectionContent).slideUp(200);
    });
});