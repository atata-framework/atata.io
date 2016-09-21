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

        // Kill links
        $('.at-docs-container [href="#"]').click(function (e) {
            e.preventDefault()
        })

        // Sidenav affixing
        setTimeout(function () {
            var $sideBar = $('.at-docs-sidebar')

            $sideBar.affix({
                offset: {
                    top: function () {
                        var offsetTop = $sideBar.offset().top
                        var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10)
                        var navOuterHeight = $('.at-docs-nav').height()

                        return (this.top = offsetTop - navOuterHeight - sideBarMargin)
                    },
                    bottom: function () {
                        return (this.bottom = $('.at-docs-footer').outerHeight(true))
                    }
                }
            })
        }, 100)
    })
}(jQuery);
