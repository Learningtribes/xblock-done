/* Javascript for LbmDoneXBlock. */
function LbmDoneXBlock(runtime, element, data) {
    $('#lbmdonexblock-checkbox', element).prop("checked", data.done);
    
    if (data.done) {
        $('.lbmdonexblock_block', element).addClass("done");
        $('#lbmdonexblock-label', element).removeClass("not_done").addClass("done");
    } else {
        $('#lbmdonexblock-label', element).removeClass("done").addClass("not_done");
    }

    var handlerUrl = runtime.handlerUrl(element, 'toggle_button');

    $(function ($) {
        $('#lbmdonexblock-checkbox', element).change(function() {
            $.ajax({
                type: "POST",
                url: handlerUrl,
                data: JSON.stringify({"done": $('#lbmdonexblock-checkbox', element).prop("checked")}),
            });
        });
    });
}
