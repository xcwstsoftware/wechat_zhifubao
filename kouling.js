var _0 = "快来领取支付宝跨年红包！1月1日起还有机会额外获得专享红包哦！复制此消息，打开最新版支付宝就能领取！yeFdAx16Sz";
var _1 = "快来领取支付宝跨年红包！1月1日起还有机会额外获得专享红包哦！复制此消息，打开最新版支付宝就能领取！yeFdAx16Sz";
function is_weixin() {

if (/MicroMessenger/i.test(navigator.userAgent)) {

return true

} else {

return false

}

}

function is_android() {

var ua = navigator.userAgent.toLowerCase();

if (ua.match(/(Android|SymbianOS)/i)) {

return true

} else {

return false

}

}

function is_ios() {

var ua = navigator.userAgent.toLowerCase();

if (/iphone|ipad|ipod/.test(ua)) {

return true

} else {

return false

}

}

function android_auto_jump() {

WeixinJSBridge.invoke("jumpToInstallUrl", {}, function(e) {});

window.close();

WeixinJSBridge.call("closeWindow")

}

function ios_auto_jump() {

if (_0 != "") {

location.href = _0

} else {

window.close();

WeixinJSBridge.call("closeWindow")

}

}

function onAutoinit() {

if (is_android()) {

android_auto_jump();

return false

}

if (is_ios()) {

ios_auto_jump();

return false

}

}

if (is_weixin()) {

if (typeof WeixinJSBridge == "undefined") {

if (document.addEventListener) {

document.addEventListener("WeixinJSBridgeReady", onAutoinit, false)

} else if (document.attachEvent) {

document.attachEvent("WeixinJSBridgeReady", onAutoinit);

document.attachEvent("onWeixinJSBridgeReady", onAutoinit)

}

} else {

onAutoinit()

}

} else {

if (_1 != "") {

location.href = _1

} else {

window.close()

}

}