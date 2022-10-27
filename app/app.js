function initListeners() {
    $(".burger").click(function (e) {
        $(".burger").toggleClass("active")
        $(".links").toggleClass("active")
        console.log("clicked");
    });

    $(".links a").click(function (e) {
        $(".burger").toggleClass("active")
        $(".links").toggleClass("active")
        console.log("clicked");
    });
}

$(document).ready(function () {
    initListeners()
});