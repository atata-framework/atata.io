!function ($) {
    'use strict';

    $(function () {
        // Scrollspy
        var $window = $(window)
        var $body = $(document.body)

        $body.scrollspy({
            target: '.at-docs-sidebar'
        })
        $window.on('load', function () {
            $body.scrollspy('refresh')
        })

        $('.at-docs-container [href="#"]').click(function (e) {
            e.preventDefault()
        })
    })
}(jQuery);
