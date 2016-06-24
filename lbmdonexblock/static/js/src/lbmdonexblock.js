/* Javascript for LbmDoneXBlock. */
function updateCheck(element, data) {
    if ($('#lbmdonexblock-checkbox', element).prop("checked")) {
        $('.lbmdonexblock_block', element).addClass("done");
        $('.fa-check-square-o', element).removeClass("invisible").addClass("visible");
        $('.fa-square-o', element).removeClass("visible").addClass("invisible");
    } else {
        $('.lbmdonexblock_block', element).removeClass("done");
        $('.fa-square-o', element).removeClass("invisible").addClass("visible");
        $('.fa-check-square-o', element).removeClass("visible").addClass("invisible");
    }
}

function LbmDoneXBlock(runtime, element, data) {
    $('#lbmdonexblock-checkbox', element).prop("checked", data.done);

    updateCheck(element, data);
    var handlerUrl = runtime.handlerUrl(element, 'toggle_button');

    $(function ($) {
        $('.lbmdonexblock_block', element).click(function() {
            $.ajax({
                type: "POST",
                url: handlerUrl,
                data: JSON.stringify({}),
            });
            updateCheck();
        });
    });
}
