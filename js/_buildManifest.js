self.__BUILD_MANIFEST = function(s, t) {
    return {
        __rewrites: {
            beforeFiles: [{
                source: "/_marketing_assets/:path(.*)",
                destination: "/:path*"
            }, {
                source: "/_marketing_assets/assets/:path*",
                destination: "/assets/:path*"
            }],
            afterFiles: [],
            fallback: []
        },
        "/_error": ["static/chunks/pages/_error-670508f436d772db.js"],
        "/sitemap_static.xml": [s, t, "static/chunks/pages/sitemap_static.xml-55080ca6589f2131.js"],
        "/[[...slug]]": [s, "static/chunks/101-2ba781323453109b.js", t, "static/css/5b51838db7bb7355.css", "static/chunks/pages/[[...slug]]-c6719f6367df44f4.js"],
        sortedPages: ["/_app", "/_error", "/sitemap_static.xml", "/[[...slug]]"]
    }
}("static/chunks/356-91fdb6efcc7b04e1.js", "static/chunks/754-a17a129ea889f588.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB(); // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}