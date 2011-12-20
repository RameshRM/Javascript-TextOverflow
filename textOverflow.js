        jQuery(document).ready(function ($) {
            (function textOverflow() {
            	$.each($('p[overflow]'), function(key, value){
                    var longText = $(value).html();
                    var overflowLength = $(value).attr('overflow');
                    var newText = longText;
                    if (longText.length > 100) {
                        var newTextList = new Array();
                        var hiddenTextList = new Array();
                        $.each(longText.split(' '), function (key, value) {
                            if (newTextList.join(" ").length < 100) {
                                newTextList.push(value);
                            } else {
                                hiddenTextList.push(value);
                            }

                        });

                        newText = "<span>" + newTextList.join(" ") + "</span>&nbsp;<span action='showmore' class='text_overflow'>more..</span>";
                        $('.text_overflow').click(function () { $(this).html(hiddenTextList.join(" ")); $(this).unbind('click'); $(this).removeClass('text_overflow'); });
                    }
                    $(value).html(newText);
                    $(value).find('[action~=showmore]').click(function () { $(this).html(hiddenTextList.join(" ")); $(this).unbind('click'); $(this).removeClass('text_overflow'); });
                });
            }).call(this);

        });
