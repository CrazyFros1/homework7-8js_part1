
(function() {
    $(function() {
        $('ul.tabs').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active')
                .parents('div.wrapper').find('div.box').hide().eq($(this).index()).fadeIn(300);
        })
    })
})();