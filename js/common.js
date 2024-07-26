var OnlyNumbers = function(e, obj, msg) {
	var keyValue = 0;
	if (e == null) {
		e = event;
	}
	if (e.charCode != undefined) {
		keyValue = e.charCode;
	} else {
		keyValue = e.keyCode;
	}

	if ((keyValue < 48 || keyValue > 57) && keyValue != 0) {
		$(obj).html(msg).show();
		return false;
	}
	$(obj).attr('style', 'display:none;');
	return true;
}

var stateLayout;
var layoutChange = function (state) {
	var $elWrapper = $("#wrapper");
	if (stateLayout) {
		$elWrapper.removeClass(stateLayout);
	}
	$elWrapper.addClass(state);
	stateLayout = state;
};
var showChange = function (state) {
	var $elWrapper = $("#wrapper");
	if ($elWrapper.hasClass(state)) {
		$elWrapper.removeClass(state);
	} else {
		$elWrapper.addClass(state);
	}
};

var makeLoginUrlByType = function (sec, redirect, usetpa, accesscode, signup) {
	var commonLoginUrl = '/common/login.aspx';
	commonLoginUrl += '?sec=' + sec;
	commonLoginUrl += '&redirect=' + encodeURIComponent(redirect);
	commonLoginUrl += '&usetpa=' + usetpa;
	commonLoginUrl += '&accesscode=' + accesscode;
	commonLoginUrl += '&signup=' + signup;
	return commonLoginUrl;
}

var doc = document;
$.setCookie = function (name, value, expiredays) {
	var todayDate = new Date;
	if (expiredays < 0)
		doc.cookie = name + "=" + escape(value) + "; path=/; domain=nexon.com;";
	else {
		todayDate.setDate(todayDate.getDate() + expiredays);
		doc.cookie = name + "=" + escape(value) + "; path=/; domain=nexon.com; expires=" + todayDate.toGMTString() + ";";
	}
};

$.getCookie = function (name) {
	var nameOfCookie = name + "="
		, x = 0;
	while (x <= doc.cookie.length) {
		var y = x + nameOfCookie.length;
		if (doc.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie = doc.cookie.indexOf(";", y)) == -1)
				endOfCookie = doc.cookie.length;
			return unescape(doc.cookie.substring(y, endOfCookie));
		}
		x = doc.cookie.indexOf(" ", x) + 1;
		if (x == 0)
			break;
	}
	return "";
};

$.removeCookie = function (name) {
	var todayDate = new Date;
	todayDate.setDate(todayDate.getDate() - 1);
	doc.cookie = name + "=; path=/; domain=nexon.com; expires=" + todayDate.toGMTString() + ";";
};

if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};
}

$(function () {
	try {
		if ($h && $h.a2s) {
			$h.a2s.setClickLog(); //anchor
			$('button[data-a2s="click"]').each(function () { //button
				$(this).click(function () {
					$h.a2s.sendClickLog($(this).attr("data-object"), $(this).attr("data-option"));
				});
			});
		}
	} catch (e) { }
});