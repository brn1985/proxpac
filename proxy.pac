function FindProxyForURL(url, host)
{
// variable strings to return
var proxy_yes = "PROXY 10.24.4.2:3128";
var proxy_no = "DIRECT";
if (shExpMatch(url, "*dl.google.com")) { return proxy_yes; }
if (shExpMatch(url, "*amibehindaproxy.com")) { return proxy_yes; }
// Proxy anything else
return proxy_no;
}
