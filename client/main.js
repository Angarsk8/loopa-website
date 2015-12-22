Meteor.startup(function() {
    Session.set("windowWidth", $(window).width());
    $(window).resize(function() {

        let sideNavLeft = parseInt($(".side-nav").css("left")),
            windowWidth = $(this).width(),
            courseCardWidth = $(".course-card").width();

        Session.set("windowWidth", windowWidth);
        Session.set("courseCardWidth", courseCardWidth)

        if ($(this).width() >= 993 && sideNavLeft >= 0) {
            Session.set("isSidenavOpen", false);
        }

        if ($(this).width() <= 1180) {
            $('#tkc').addClass('btn').removeClass('btn-large');
            $('#mkc').addClass('btn').removeClass('btn-large');
        } else {
            $('#tkc').addClass('btn-large').removeClass('btn');
            $('#mkc').addClass('btn-large').removeClass('btn');
        }
    });

});
