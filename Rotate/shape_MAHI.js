var ang, ang_si;

(function () {
$.fn.rotate = function (degrees) {
        if ($.browser.msie && $.browser.version < "9.0") {
            // This fix unearthed from:
            // http://msdn.microsoft.com/en-us/library/ms533014%28v=vs.85%29.aspx
            // A simple explanation that [MXX] uses the sine and cosine of radians
            // instead of degrees would have sped up the search quite a bit... 
            // But why would we want adequate and verbose documentation??
            // Who enjoys actually getting work done anyway?? Srsly...
            deg2radians = Math.PI * 2 / 360;
            rad = degrees * deg2radians;
            costheta = Math.cos(rad);
            sintheta = Math.sin(rad);

            M11 = costheta;
            M12 = -sintheta;
            M21 = sintheta;
            M22 = costheta;

            msUglyStepdaughterCode = "progid:DXImageTransform.Microsoft.Matrix(";
            msUglyStepdaughterCode += "M11=" + M11 + ", M12=" + M12 + ", M21=" + M21 + ", M22=" + M22;
            msUglyStepdaughterCode += ", sizingMethod='auto expand')";

            this.css("filter", msUglyStepdaughterCode);
            this.css("zoom", "1");
        }
        else if ($.browser.msie && $.browser.version == "9.0") {
            
            this.css("-ms-transform", "rotate(" + degrees + "deg)");
        }
        else if ($.browser.webkit) {
            this.css("-webkit-transform", "rotate(" + degrees + "deg)");
        } else if ($.browser.opera) {
            this.css("-o-transform", "rotate(" + degrees + "deg)");
        } else if ($.browser.mozilla) {
            this.css("-moz-transform", "rotate(" + degrees + "deg)");
        } else {
            this.css("transform", "rotate(" + degrees + "deg)");
        }
        return this;
    };
    $.fn.Mahi_shape = function (options, selector, center, radius, angle, x, y) {
      function anim() {
            $(".maskLayer, .maskLayerArrow").rotate(ang); //use this for cross browser compatibility instead of above statement
            if (ang == 1 || ang == 60 || ang == 120 || ang == 180 || ang == 240 || ang == 300 || ang == 360 || ang == 420 || ang == 480 || ang == 540 || ang == 600 || ang == 660 || ang == 720) {
                clearInterval(si);
                clearInterval(ang_si);
                s = setTimeout(function () {
                    ang_si = setInterval(function () { ang++ }, 10);
                    si = setInterval(anim, 10);
                }, 1000);
                $(".indiaFlag, .oaTxtIndia, .oaTxtUS, .USFlag").fadeOut();
            }
            if (ang == 361) {
                $(".indiaFlag, .oaTxtIndia").fadeIn();
                clearInterval(si);
                clearInterval(ang_si);
                $(".maskLayerArrow, .link").hide();
                $(".maskLayer").addClass("maskBackground");
                $(".link").each(function (i) {
                    i = 7 + i
                    $(this).attr("id", "link_" + i);
                });
                s = setTimeout(function () {
                    ang_si = setInterval(function () { ang++; }, 5);
                    si = setInterval(anim, 5);
                    $(".maskLayer").removeClass("maskBackground");
                    $(".maskLayerArrow, .link").fadeIn();
                }, 5000);
            }
            if (ang >= 721) {
                ang = 0;
                $(".USFlag, .oaTxtUS").fadeIn();
                clearInterval(si);
                clearInterval(ang_si);
                $(".maskLayerArrow, .link").fadeOut();
                $(".maskLayer").addClass("maskBackground");
                $(".link").each(function (i) {
                    i = 1 + i;
                    $(this).attr("id", "link_" + i);
                });
                s = setTimeout(function () {
                    ang_si = setInterval(function () { ang++; }, 5);
                    si = setInterval(anim, 5);
                    $(".maskLayer").removeClass("maskBackground");
                    $(".maskLayerArrow, .link").fadeIn();
                }, 5000);

            }


        }

        $(document).on("click", ".linksArea span", function (e) {
            e.stopImmediatePropagation();
            var getId = $(this).attr("id").split("_")[1];
            ang = (60 * (getId - 1));
            alert(ang);
            clearTimeout(s);
            clearInterval(si);
            clearInterval(ang_si);
            $(".maskLayer, .maskLayerArrow").rotate(ang);
            s = setTimeout(function () {
                anim();

            }, 5000);
        });

        var ang = 0;
        var ang_si = setInterval(function () { ang++; }, 5);
        var si = setInterval(anim, 5);

    }; //shape function end here


})(jQuery);