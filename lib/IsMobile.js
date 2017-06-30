/**
 * # Checks whether running on a mobile device according to browser data.
 * Functions (each returns bool):
 * * Android
 * * BlackBerry
 * * iPhone
 * * iPod
 * * iPad
 * * iOS
 * * Opera
 * * Windows
 * * Kindle Fire
 * * any
 * @example
 * ```js
 * isMobile.Android() => true/false
 * isMobile.iOS() => true/false
 * isMobile.any() => true/false
 * isMobile.KindleFire() => true/false
 * isMobile.BlackBerry() => true/false
 * ```
 */

var isMobile = {

  getUserAgent: function getUserAgent() {
    return navigator.userAgent;
  },
  Android: function Android() {
    return (/Android/i.test(isMobile.getUserAgent()) && !isMobile.Windows()
    );
  },
  BlackBerry: function BlackBerry() {
    return (/BlackBerry|BB10|PlayBook/i.test(isMobile.getUserAgent())
    );
  },
  iPhone: function iPhone() {
    return (/iPhone/i.test(isMobile.getUserAgent()) && !isMobile.iPad() && !isMobile.Windows()
    );
  },
  iPod: function iPod() {
    return (/iPod/i.test(isMobile.getUserAgent())
    );
  },
  iPad: function iPad() {
    return (/iPad/i.test(isMobile.getUserAgent())
    );
  },
  iOS: function iOS() {
    return isMobile.iPad() || isMobile.iPod() || isMobile.iPhone();
  },
  Opera: function Opera() {
    return (/Opera Mini/i.test(isMobile.getUserAgent())
    );
  },
  Windows: function Windows() {
    return (/Windows Phone|IEMobile|WPDesktop/i.test(isMobile.getUserAgent())
    );
  },
  KindleFire: function KindleFire() {
    return (/Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(isMobile.getUserAgent())
    );
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

module.exports = isMobile;