    function checkAllFunction(parent, children) {
        $(parent).change(function () {
            if ($(this).is(':checked')) {
                $(children).each(function () {
                    if (!$(this).hasClass("checkedChek")) {
                        $(this).attr("checked", "checked");
                        $(this).addClass("checkedChek");
                    }
                });
            } else {
                $(children).each(function () {
                    if ($(this).hasClass("checkedChek")) {
                        $(this).removeClass("checkedChek");
                        $(this).prop('checked', false);
                    }
                });
            }
        });
    }
