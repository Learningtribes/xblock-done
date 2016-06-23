/* Javascript for LbmDoneXBlock. */
function updateCheck(element, data) {
    if ($('#lbmdonexblock-checkbox', element).prop("checked")) {
        $('.fa-check-square-o', element).removeClass("invisible").addClass("visible");
        $('.fa-square-o', element).removeClass("visible").addClass("invisible");
    } else {
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
