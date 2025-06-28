

var Hn = {
    exports: {}
}, dv = Hn.exports, Tc;

function hv() {
    return Tc || (Tc = 1,
    function(t, e) {
        (function(r, n) {
            var a = "0.7.33"
              , i = ""
              , s = "?"
              , o = "function"
              , u = "undefined"
              , d = "object"
              , p = "string"
              , A = "major"
              , f = "model"
              , m = "name"
              , E = "type"
              , T = "vendor"
              , C = "version"
              , R = "architecture"
              , b = "console"
              , v = "mobile"
              , _ = "tablet"
              , P = "smarttv"
              , y = "wearable"
              , G = "embedded"
              , j = 350
              , q = "Amazon"
              , U = "Apple"
              , V = "ASUS"
              , W = "BlackBerry"
              , re = "Browser"
              , Ee = "Chrome"
              , Be = "Edge"
              , ne = "Firefox"
              , J = "Google"
              , Te = "Huawei"
              , Re = "LG"
              , N = "Microsoft"
              , x = "Motorola"
              , se = "Opera"
              , he = "Samsung"
              , ue = "Sharp"
              , pe = "Sony"
              , ge = "Xiaomi"
              , be = "Zebra"
              , Me = "Facebook"
              , We = function(Y, Se) {
                var le = {};
                for (var Le in Y)
                    Se[Le] && Se[Le].length % 2 === 0 ? le[Le] = Se[Le].concat(Y[Le]) : le[Le] = Y[Le];
                return le
            }
              , bt = function(Y) {
                for (var Se = {}, le = 0; le < Y.length; le++)
                    Se[Y[le].toUpperCase()] = Y[le];
                return Se
            }
              , ye = function(Y, Se) {
                return typeof Y === p ? lt(Se).indexOf(lt(Y)) !== -1 : !1
            }
              , lt = function(Y) {
                return Y.toLowerCase()
            }
              , _t = function(Y) {
                return typeof Y === p ? Y.replace(/[^\d\.]/g, i).split(".")[0] : n
            }
              , Vt = function(Y, Se) {
                if (typeof Y === p)
                    return Y = Y.replace(/^\s\s*/, i),
                    typeof Se === u ? Y : Y.substring(0, j)
            }
              , ve = function(Y, Se) {
                for (var le = 0, Le, oe, xe, Ae, at, dt; le < Se.length && !at; ) {
                    var ht = Se[le]
                      , pt = Se[le + 1];
                    for (Le = oe = 0; Le < ht.length && !at; )
                        if (at = ht[Le++].exec(Y),
                        at)
                            for (xe = 0; xe < pt.length; xe++)
                                dt = at[++oe],
                                Ae = pt[xe],
                                typeof Ae === d && Ae.length > 0 ? Ae.length === 2 ? typeof Ae[1] == o ? this[Ae[0]] = Ae[1].call(this, dt) : this[Ae[0]] = Ae[1] : Ae.length === 3 ? typeof Ae[1] === o && !(Ae[1].exec && Ae[1].test) ? this[Ae[0]] = dt ? Ae[1].call(this, dt, Ae[2]) : n : this[Ae[0]] = dt ? dt.replace(Ae[1], Ae[2]) : n : Ae.length === 4 && (this[Ae[0]] = dt ? Ae[3].call(this, dt.replace(Ae[1], Ae[2])) : n) : this[Ae] = dt || n;
                    le += 2
                }
            }
              , St = function(Y, Se) {
                for (var le in Se)
                    if (typeof Se[le] === d && Se[le].length > 0) {
                        for (var Le = 0; Le < Se[le].length; Le++)
                            if (ye(Se[le][Le], Y))
                                return le === s ? n : le
                    } else if (ye(Se[le], Y))
                        return le === s ? n : le;
                return Y
            }
              , _e = {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            }
              , gt = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            }
              , At = {
                browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [C, [m, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [C, [m, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [m, C], [/opios[\/ ]+([\w\.]+)/i], [C, [m, se + " Mini"]], [/\bopr\/([\w\.]+)/i], [C, [m, se]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [m, C], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [C, [m, "UC" + re]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [C, [m, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [C, [m, "WeChat"]], [/konqueror\/([\w\.]+)/i], [C, [m, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [C, [m, "IE"]], [/yabrowser\/([\w\.]+)/i], [C, [m, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[m, /(.+)/, "$1 Secure " + re], C], [/\bfocus\/([\w\.]+)/i], [C, [m, ne + " Focus"]], [/\bopt\/([\w\.]+)/i], [C, [m, se + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [C, [m, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [C, [m, "Dolphin"]], [/coast\/([\w\.]+)/i], [C, [m, se + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [C, [m, "MIUI " + re]], [/fxios\/([-\w\.]+)/i], [C, [m, ne]], [/\bqihu|(qi?ho?o?|360)browser/i], [[m, "360 " + re]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[m, /(.+)/, "$1 " + re], C], [/(comodo_dragon)\/([\w\.]+)/i], [[m, /_/g, " "], C], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [m, C], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [m], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[m, Me], C], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [m, C], [/\bgsa\/([\w\.]+) .*safari\//i], [C, [m, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [C, [m, Ee + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[m, Ee + " WebView"], C], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [C, [m, "Android " + re]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [m, C], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [C, [m, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [C, m], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [m, [C, St, _e]], [/(webkit|khtml)\/([\w\.]+)/i], [m, C], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[m, "Netscape"], C], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [C, [m, ne + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [m, C], [/(cobalt)\/([\w\.]+)/i], [m, [C, /master.|lts./, ""]]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[R, "amd64"]], [/(ia32(?=;))/i], [[R, lt]], [/((?:i[346]|x)86)[;\)]/i], [[R, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[R, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[R, "armhf"]], [/windows (ce|mobile); ppc;/i], [[R, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[R, /ower/, i, lt]], [/(sun4\w)[;\)]/i], [[R, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[R, lt]]],
                device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [f, [T, he], [E, _]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [f, [T, he], [E, v]], [/\((ip(?:hone|od)[\w ]*);/i], [f, [T, U], [E, v]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [f, [T, U], [E, _]], [/(macintosh);/i], [f, [T, U]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [f, [T, Te], [E, _]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [f, [T, Te], [E, v]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[f, /_/g, " "], [T, ge], [E, v]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[f, /_/g, " "], [T, ge], [E, _]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [f, [T, "OPPO"], [E, v]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [f, [T, "Vivo"], [E, v]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [f, [T, "Realme"], [E, v]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [f, [T, x], [E, v]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [f, [T, x], [E, _]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [f, [T, Re], [E, _]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [f, [T, Re], [E, v]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [f, [T, "Lenovo"], [E, _]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[f, /_/g, " "], [T, "Nokia"], [E, v]], [/(pixel c)\b/i], [f, [T, J], [E, _]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [f, [T, J], [E, v]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [f, [T, pe], [E, v]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[f, "Xperia Tablet"], [T, pe], [E, _]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [f, [T, "OnePlus"], [E, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [f, [T, q], [E, _]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[f, /(.+)/g, "Fire Phone $1"], [T, q], [E, v]], [/(playbook);[-\w\),; ]+(rim)/i], [f, T, [E, _]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [f, [T, W], [E, v]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [f, [T, V], [E, _]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [f, [T, V], [E, v]], [/(nexus 9)/i], [f, [T, "HTC"], [E, _]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i], [T, [f, /_/g, " "], [E, v]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [f, [T, "Acer"], [E, _]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [f, [T, "Meizu"], [E, v]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [f, [T, ue], [E, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [T, f, [E, v]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [T, f, [E, _]], [/(surface duo)/i], [f, [T, N], [E, _]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [f, [T, "Fairphone"], [E, v]], [/(u304aa)/i], [f, [T, "AT&T"], [E, v]], [/\bsie-(\w*)/i], [f, [T, "Siemens"], [E, v]], [/\b(rct\w+) b/i], [f, [T, "RCA"], [E, _]], [/\b(venue[\d ]{2,7}) b/i], [f, [T, "Dell"], [E, _]], [/\b(q(?:mv|ta)\w+) b/i], [f, [T, "Verizon"], [E, _]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [f, [T, "Barnes & Noble"], [E, _]], [/\b(tm\d{3}\w+) b/i], [f, [T, "NuVision"], [E, _]], [/\b(k88) b/i], [f, [T, "ZTE"], [E, _]], [/\b(nx\d{3}j) b/i], [f, [T, "ZTE"], [E, v]], [/\b(gen\d{3}) b.+49h/i], [f, [T, "Swiss"], [E, v]], [/\b(zur\d{3}) b/i], [f, [T, "Swiss"], [E, _]], [/\b((zeki)?tb.*\b) b/i], [f, [T, "Zeki"], [E, _]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[T, "Dragon Touch"], f, [E, _]], [/\b(ns-?\w{0,9}) b/i], [f, [T, "Insignia"], [E, _]], [/\b((nxa|next)-?\w{0,9}) b/i], [f, [T, "NextBook"], [E, _]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[T, "Voice"], f, [E, v]], [/\b(lvtel\-)?(v1[12]) b/i], [[T, "LvTel"], f, [E, v]], [/\b(ph-1) /i], [f, [T, "Essential"], [E, v]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [f, [T, "Envizen"], [E, _]], [/\b(trio[-\w\. ]+) b/i], [f, [T, "MachSpeed"], [E, _]], [/\btu_(1491) b/i], [f, [T, "Rotor"], [E, _]], [/(shield[\w ]+) b/i], [f, [T, "Nvidia"], [E, _]], [/(sprint) (\w+)/i], [T, f, [E, v]], [/(kin\.[onetw]{3})/i], [[f, /\./g, " "], [T, N], [E, v]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [f, [T, be], [E, _]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [f, [T, be], [E, v]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [T, f, [E, b]], [/droid.+; (shield) bui/i], [f, [T, "Nvidia"], [E, b]], [/(playstation [345portablevi]+)/i], [f, [T, pe], [E, b]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [f, [T, N], [E, b]], [/smart-tv.+(samsung)/i], [T, [E, P]], [/hbbtv.+maple;(\d+)/i], [[f, /^/, "SmartTV"], [T, he], [E, P]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[T, Re], [E, P]], [/(apple) ?tv/i], [T, [f, U + " TV"], [E, P]], [/crkey/i], [[f, Ee + "cast"], [T, J], [E, P]], [/droid.+aft(\w)( bui|\))/i], [f, [T, q], [E, P]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [f, [T, ue], [E, P]], [/(bravia[\w ]+)( bui|\))/i], [f, [T, pe], [E, P]], [/(mitv-\w{5}) bui/i], [f, [T, ge], [E, P]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[T, Vt], [f, Vt], [E, P]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[E, P]], [/((pebble))app/i], [T, f, [E, y]], [/droid.+; (glass) \d/i], [f, [T, J], [E, y]], [/droid.+; (wt63?0{2,3})\)/i], [f, [T, be], [E, y]], [/(quest( 2)?)/i], [f, [T, Me], [E, y]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [T, [E, G]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [f, [E, v]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [f, [E, _]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[E, _]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[E, v]], [/(android[-\w\. ]{0,9});.+buil/i], [f, [T, "Generic"]]],
                engine: [[/windows.+ edge\/([\w\.]+)/i], [C, [m, Be + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [C, [m, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [m, C], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [C, m]],
                os: [[/microsoft (windows) (vista|xp)/i], [m, C], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [m, [C, St, gt]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[m, "Windows"], [C, St, gt]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[C, /_/g, "."], [m, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[m, "Mac OS"], [C, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [C, m], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [m, C], [/\(bb(10);/i], [C, [m, W]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [C, [m, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [C, [m, ne + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [C, [m, "webOS"]], [/crkey\/([\d\.]+)/i], [C, [m, Ee + "cast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[m, "Chromium OS"], C], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [m, C], [/(sunos) ?([\w\.\d]*)/i], [[m, "Solaris"], C], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [m, C]]
            }
              , Je = function(Y, Se) {
                if (typeof Y === d && (Se = Y,
                Y = n),
                !(this instanceof Je))
                    return new Je(Y,Se).getResult();
                var le = Y || (typeof r !== u && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : i)
                  , Le = Se ? We(At, Se) : At;
                return this.getBrowser = function() {
                    var oe = {};
                    return oe[m] = n,
                    oe[C] = n,
                    ve.call(oe, le, Le.browser),
                    oe.major = _t(oe.version),
                    oe
                }
                ,
                this.getCPU = function() {
                    var oe = {};
                    return oe[R] = n,
                    ve.call(oe, le, Le.cpu),
                    oe
                }
                ,
                this.getDevice = function() {
                    var oe = {};
                    return oe[T] = n,
                    oe[f] = n,
                    oe[E] = n,
                    ve.call(oe, le, Le.device),
                    oe
                }
                ,
                this.getEngine = function() {
                    var oe = {};
                    return oe[m] = n,
                    oe[C] = n,
                    ve.call(oe, le, Le.engine),
                    oe
                }
                ,
                this.getOS = function() {
                    var oe = {};
                    return oe[m] = n,
                    oe[C] = n,
                    ve.call(oe, le, Le.os),
                    oe
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return le
                }
                ,
                this.setUA = function(oe) {
                    return le = typeof oe === p && oe.length > j ? Vt(oe, j) : oe,
                    this
                }
                ,
                this.setUA(le),
                this
            };
            Je.VERSION = a,
            Je.BROWSER = bt([m, C, A]),
            Je.CPU = bt([R]),
            Je.DEVICE = bt([f, T, E, b, v, P, _, y, G]),
            Je.ENGINE = Je.OS = bt([m, C]),
            t.exports && (e = t.exports = Je),
            e.UAParser = Je;
            var ct = typeof r !== u && (r.jQuery || r.Zepto);
            if (ct && !ct.ua) {
                var ot = new Je;
                ct.ua = ot.getResult(),
                ct.ua.get = function() {
                    return ot.getUA()
                }
                ,
                ct.ua.set = function(Y) {
                    ot.setUA(Y);
                    var Se = ot.getResult();
                    for (var le in Se)
                        ct.ua[le] = Se[le]
                }
            }
        }
        )(typeof window == "object" ? window : dv)
    }(Hn, Hn.exports)),
    Hn.exports
}

var pv = hv();

const fv = ["mobile", "tablet"];
class rN {
    [k: string]: any;
    
    get name() {
        return this.ua.getBrowser().name || ""
    }
    get version() {
        return this.ua.getBrowser().version || ""
    }
    get majorVersion() {
        const {version: e} = this;
        if (e === "")
            return;
        const r = parseInt(e.split(".")[0], 10);
        return Number.isNaN(r) ? void 0 : r
    }
    get unknown() {
        return this.name === ""
    }
    get isMobile() {
        return fv.includes(this.ua.getDevice().type) || this.isPOSFirstPartyDevice()
    }
    get isDesktop() {
        return !this.isMobile
    }
    get isNativeApp() {
        return this.ua.getUA().includes("Shopify Mobile/", 0)
    }
    get isShopifyPOSApp() {
        return this.ua.getUA().includes("Shopify POS/", 0)
    }
    get os() {
        return this.ua.getOS().name || ""
    }
    get isWindows() {
        return this.os.includes("Windows")
    }
    get isMac() {
        return this.os.includes("Mac OS")
    }
    get isSafari() {
        return this.name.includes("Safari")
    }
    get isChrome() {
        return this.name.includes("Chrome")
    }
    get isAndroidChrome() {
        return this.ua.getUA().includes("Android") && this.name.includes("Chrome")
    }
    get isAndroid() {
        const e = this.ua.getOS();
        return e.name && e.name.includes("Android")
    }
    get isFirefox() {
        return this.name === "Firefox"
    }
    get isIE() {
        return this.name.includes("IE")
    }
    get isEdge() {
        return this.name === "Edge"
    }
    get isIOS() {
        const e = this.ua.getOS()
          , r = e.name && e.name.includes("iOS")
          , n = /Shopify Mobile|Shopify POS|Shopify Ping/.test(this.userAgent) && this.userAgent.includes("iOS");
        return r || n
    }
    constructor({userAgent: e, supported: r=!0}) {
        this.userAgent = e,
        this.supported = r,
        this.ua = new pv.UAParser(e)
    }
    isPOSFirstPartyDevice() {
        return this.ua.getUA().includes("WSC6X") || this.ua.getUA().includes("WTH11")
    }
}
















var aI = ["4g", "3g", "2g", "slow-2g"]
  , iI = new Set(aI);



function Wq() {
    var t;
    return sI((t = navigator.connection) == null ? void 0 : t.effectiveType) ? navigator.connection.effectiveType : void 0
}
function sI(t) {
    return iI.has(t)
}
function Hq(t) {
    return (t == null ? void 0 : t.entryType) === "resource"
}
function zq(t) {
    return performance.now() - t.responseEnd > 500
}
function Kq(t, e) {
    const r = t.filter(n => !!n).sort( (n, a) => a.responseEnd - n.responseEnd)[0];
    return r ? e ? r.responseEnd > e.startTime ? r : e : r : e
}
function Zq(t) {
    if (typeof t == "number")
        return Math.round(performance.timeOrigin + t)
}
function Ci() {
    throw new Error("Cycle detected")
}
var oI = Symbol.for("preact-signals");
function Ii() {
    if (Or > 1)
        Or--;
    else {
        for (var t, e = !1; oa !== void 0; ) {
            var r = oa;
            for (oa = void 0,
            Sl++; r !== void 0; ) {
                var n = r.o;
                if (r.o = void 0,
                r.f &= -3,
                !(8 & r.f) && ug(r))
                    try {
                        r.c()
                    } catch (a) {
                        e || (t = a,
                        e = !0)
                    }
                r = n
            }
        }
        if (Sl = 0,
        Or--,
        e)
            throw t
    }
}
function Yq(t) {
    if (Or > 0)
        return t();
    Or++;
    try {
        return t()
    } finally {
        Ii()
    }
}
var it = void 0 as any
  , oa = void 0
  , Or = 0
  , Sl = 0
  , li = 0;
function og(t) {
    if (it !== void 0) {
        var e = t.n;
        if (e === void 0 || e.t !== it)
            return e = {
                i: 0,
                S: t,
                p: it.s,
                n: void 0,
                t: it,
                e: void 0,
                x: void 0,
                r: e
            },
            it.s !== void 0 && (it.s.n = e),
            it.s = e,
            t.n = e,
            32 & it.f && t.S(e),
            e;
        if (e.i === -1)
            return e.i = 0,
            e.n !== void 0 && (e.n.p = e.p,
            e.p !== void 0 && (e.p.n = e.n),
            e.p = it.s,
            e.n = void 0,
            it.s.n = e,
            it.s = e),
            e
    }
}
function Nt(t?) {
    this.v = t,
    this.i = 0,
    this.n = void 0,
    this.t = void 0
}
Nt.prototype.brand = oI;
Nt.prototype.h = function() {
    return !0
}
;
Nt.prototype.S = function(t) {
    this.t !== t && t.e === void 0 && (t.x = this.t,
    this.t !== void 0 && (this.t.e = t),
    this.t = t)
}
;
Nt.prototype.U = function(t) {
    if (this.t !== void 0) {
        var e = t.e
          , r = t.x;
        e !== void 0 && (e.x = r,
        t.e = void 0),
        r !== void 0 && (r.e = e,
        t.x = void 0),
        t === this.t && (this.t = r)
    }
}
;
Nt.prototype.subscribe = function(t) {
    var e = this;
    return lI(function() {
        var r = e.value
          , n = 32 & this.f;
        this.f &= -33;
        try {
            t(r)
        } finally {
            this.f |= n
        }
    })
}
;
Nt.prototype.valueOf = function() {
    return this.value
}
;
Nt.prototype.toString = function() {
    return this.value + ""
}
;
Nt.prototype.toJSON = function() {
    return this.value
}
;
Nt.prototype.peek = function() {
    return this.v
}
;
Object.defineProperty(Nt.prototype, "value", {
    get: function() {
        var t = og(this);
        return t !== void 0 && (t.i = this.i),
        this.v
    },
    set: function(t) {
        if (it instanceof $r && function() {
            throw new Error("Computed cannot have side-effects")
        }(),
        t !== this.v) {
            Sl > 100 && Ci(),
            this.v = t,
            this.i++,
            li++,
            Or++;
            try {
                for (var e = this.t; e !== void 0; e = e.x)
                    e.t.N()
            } finally {
                Ii()
            }
        }
    }
});
function Oe(t) {
    return new Nt(t)
}
function ug(t) {
    for (var e = t.s; e !== void 0; e = e.n)
        if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i)
            return !0;
    return !1
}
function lg(t) {
    for (var e = t.s; e !== void 0; e = e.n) {
        var r = e.S.n;
        if (r !== void 0 && (e.r = r),
        e.S.n = e,
        e.i = -1,
        e.n === void 0) {
            t.s = e;
            break
        }
    }
}
function cg(t) {
    for (var e = t.s, r = void 0; e !== void 0; ) {
        var n = e.p;
        e.i === -1 ? (e.S.U(e),
        n !== void 0 && (n.n = e.n),
        e.n !== void 0 && (e.n.p = n)) : r = e,
        e.S.n = e.r,
        e.r !== void 0 && (e.r = void 0),
        e = n
    }
    t.s = r
}
function $r(t) {
    Nt.call(this, void 0),
    this.x = t,
    this.s = void 0,
    this.g = li - 1,
    this.f = 4
}
($r.prototype = new Nt).h = function() {
    if (this.f &= -3,
    1 & this.f)
        return !1;
    if ((36 & this.f) == 32 || (this.f &= -5,
    this.g === li))
        return !0;
    if (this.g = li,
    this.f |= 1,
    this.i > 0 && !ug(this))
        return this.f &= -2,
        !0;
    var t = it;
    try {
        lg(this),
        it = this;
        var e = this.x();
        (16 & this.f || this.v !== e || this.i === 0) && (this.v = e,
        this.f &= -17,
        this.i++)
    } catch (r) {
        this.v = r,
        this.f |= 16,
        this.i++
    }
    return it = t,
    cg(this),
    this.f &= -2,
    !0
}
;
$r.prototype.S = function(t) {
    if (this.t === void 0) {
        this.f |= 36;
        for (var e = this.s; e !== void 0; e = e.n)
            e.S.S(e)
    }
    Nt.prototype.S.call(this, t)
}
;
$r.prototype.U = function(t) {
    if (this.t !== void 0 && (Nt.prototype.U.call(this, t),
    this.t === void 0)) {
        this.f &= -33;
        for (var e = this.s; e !== void 0; e = e.n)
            e.S.U(e)
    }
}
;
$r.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for (var t = this.t; t !== void 0; t = t.x)
            t.t.N()
    }
}
;
$r.prototype.peek = function() {
    if (this.h() || Ci(),
    16 & this.f)
        throw this.v;
    return this.v
}
;
Object.defineProperty($r.prototype, "value", {
    get: function() {
        1 & this.f && Ci();
        var t = og(this);
        if (this.h(),
        t !== void 0 && (t.i = this.i),
        16 & this.f)
            throw this.v;
        return this.v
    }
});
function Xq(t) {
    return new $r(t)
}
function dg(t) {
    var e = t.u;
    if (t.u = void 0,
    typeof e == "function") {
        Or++;
        var r = it;
        it = void 0;
        try {
            e()
        } catch (n) {
            throw t.f &= -2,
            t.f |= 8,
            Wl(t),
            n
        } finally {
            it = r,
            Ii()
        }
    }
}
function Wl(t) {
    for (var e = t.s; e !== void 0; e = e.n)
        e.S.U(e);
    t.x = void 0,
    t.s = void 0,
    dg(t)
}
function uI(t) {
    if (it !== this)
        throw new Error("Out-of-order effect");
    cg(this),
    it = t,
    this.f &= -2,
    8 & this.f && Wl(this),
    Ii()
}

function _a(t) {
    this.x = t,
    this.u = void 0,
    this.s = void 0,
    this.o = void 0,
    this.f = 32
}
_a.prototype.c = function() {
    var t = this.S();
    try {
        if (8 & this.f || this.x === void 0)
            return;
        var e = this.x();
        typeof e == "function" && (this.u = e)
    } finally {
        t()
    }
}
;
_a.prototype.S = function() {
    1 & this.f && Ci(),
    this.f |= 1,
    this.f &= -9,
    dg(this),
    lg(this),
    Or++;
    var t = it;
    return it = this,
    uI.bind(this, t)
}
;
_a.prototype.N = function() {
    2 & this.f || (this.f |= 2,
    this.o = oa,
    oa = this)
}
;
_a.prototype.d = function() {
    this.f |= 8,
    1 & this.f || Wl(this)
}
;
function lI(t) {
    var e = new _a(t);
    try {
        e.c()
    } catch (r) {
        throw e.d(),
        r
    }
    return e.d.bind(e)
}
function cI(t, e) {
    if (t === e)
        return !0;
    if (!Cr(t) || !Cr(e))
        return !1;
    const r = Object.keys(t ?? {})
      , n = Object.keys(e ?? {});
    if (r.length !== n.length)
        return !1;
    for (const a of r) {
        const i = t[a]
          , s = e[a];
        if (i !== s && (!Cr(i) || !Cr(s) || !cI(i, s)))
            return !1
    }
    return !0
}
function dI(t, e) {
    if (t === e)
        return !0;
    if (!Cr(t) || !Cr(e))
        return !1;
    const r = Object.keys(t ?? {});
    for (const n of r) {
        const a = t[n]
          , i = e[n];
        if (a !== i && (!Cr(a) || !Cr(i) || !dI(a, i)))
            return !1
    }
    return !0
}
function Cr(t) {
    return t !== null && typeof t == "object"
}



export {rN as LocInfo, lI as O}