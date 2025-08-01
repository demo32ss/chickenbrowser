/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/* globals AboutCompatBroker, AVAILABLE_SHIMS,
           CUSTOM_FUNCTIONS, Interventions, Shims */

var interventions, shims;

const AVAILABLE_INTERVENTIONS =
{
  "1287715": {
    "label": "littlealchemy2.com",
    "bugs": {
      "1287715": {
        "issue": "broken-audio",
        "matches": ["https://littlealchemy2.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1287715-littlealchemy2.com-fix-audio-race-condition.js"]
        }
      }
    ]
  },
  "1385206": {
    "label": "rakuten.co.jp",
    "bugs": {
      "1385206": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://*.rakuten.co.jp/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["change_Firefox_to_FireFox"]
      }
    ]
  },
  "1448747": {
    "label": "FastClick breakage",
    "bugs": {
      "1829947": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.arcsivr.com/*"]
      },
      "1901449": {
        "issue": "broken-interactive-elements",
        "matches": ["*://teikiyoyaku.tokyu.co.jp/*"]
      },
      "1906654": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.dublinexpress.ie/*"]
      },
      "1913099": {
        "issue": "broken-interactive-elements",
        "matches": ["*://whooshmotorsports.com/*"]
      },
      "1944007": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.discountcoffee.co.uk/*"]
      },
      "1944008": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.franmar.com/*"]
      },
      "1944009": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.iledefrance-mobilites.fr/*"]
      },
      "1944010": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.lafoodbank.org/*"]
      },
      "1944013": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.lamudi.co.id/*"]
      },
      "1944015": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.lawnmowerpartsworld.com/*"]
      },
      "1944018": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.oregonfoodbank.org/*"]
      },
      "1944019": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.themusiclab.org/*"]
      },
      "1944020": {
        "issue": "broken-interactive-elements",
        "matches": ["*://bathpublishing.com/*"]
      },
      "1944022": {
        "issue": "broken-interactive-elements",
        "matches": ["*://drafthouse.com/*"]
      },
      "1944024": {
        "issue": "broken-interactive-elements",
        "matches": ["*://dylantalkstone.com/*"]
      },
      "1916407": {
        "issue": "broken-interactive-elements",
        "matches": ["*://give.umrelief.org/give/*"]
      },
      "1944026": {
        "issue": "broken-interactive-elements",
        "matches": ["*://renewd.com.au/*"]
      },
      "1944027": {
        "issue": "broken-interactive-elements",
        "matches": ["*://rutamayacoffee.com/*"]
      },
      "1944029": {
        "issue": "broken-interactive-elements",
        "matches": ["*://weaversofireland.com/*"]
      },
      "1968640": {
        "issue": "broken-interactive-elements",
        "matches": ["*://shop.ticket-center-hohenschwangau.de/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1448747-fastclick-shim.js"]
        }
      }
    ]
  },
  "1452707": {
    "label": "ib.absa.co.za",
    "bugs": {
      "1452707": {
        "issue": "firefox-blocked-completely",
        "matches": ["https://ib.absa.co.za/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1452707-window.controllers-shim-ib.absa.co.za.js"]
        }
      }
    ]
  },
  "1457335": {
    "label": "histography.io",
    "bugs": {
      "1457335": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://histography.io/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "js": ["bug1457335-histography.io-ua-change.js"]
        }
      }
    ]
  },
  "1472075": {
    "label": "bankofamerica.com",
    "bugs": {
      "1280834": {
        "issue": "unsupported-warning",
        "matches": ["*://*.bankofamerica.com/*"]
      },
      "1899933": {
        "issue": "unsupported-warning",
        "matches": ["*://*.ml.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["mac", "linux"],
        "content_scripts": {
          "js": ["bug1472075-bankofamerica.com-ua-change.js"]
        }
      }
    ]
  },
  "1509873": {
    "label": "zmags.com",
    "bugs": {
      "1509873": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.viewer.zmags.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1570108": {
    "label": "steamcommunity.com",
    "bugs": {
      "1904412": {
        "issue": "blocked-content",
        "matches": ["*://steamcommunity.com/chat*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1574522": {
    "label": "enuri.com",
    "bugs": {
      "1574522": {
        "issue": "incorrect-viewport-dimensions",
        "matches": ["*://enuri.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1574564": {
    "label": "ceskatelevize.cz",
    "bugs": {
      "1574564": {
        "issue": "broken-videos",
        "matches": ["*://*.ceskatelevize.cz/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1575000": {
    "label": "apply.lloydsbank.co.uk",
    "bugs": {
      "1575000": {
        "issue": "broken-interactive-elements",
        "matches": ["*://apply.lloydsbank.co.uk/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1575000-apply.lloydsbank.co.uk-radio-buttons-fix.css"]
        }
      }
    ]
  },
  "1577519": {
    "label": "directv.com",
    "bugs": {
      "1728450": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.directv.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1579159": {
    "label": "m.tailieu.vn",
    "bugs": {
      "1579159": {
        "issue": "page-fails-to-load",
        "matches": ["*://m.tailieu.vn/*", "*://m.elib.vn/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "all_frames": true,
          "js": ["bug1579159-m.tailieu.vn-pdfjs-worker-disable.js"]
        }
      }
    ]
  },
  "1582582": {
    "label": "watch.sling.com",
    "bugs": {
      "1904417": {
        "issue": "firefox-blocked-completely",
        "matches": ["https://watch.sling.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1598198": {
    "label": "galaxy.store",
    "bugs": {
      "1598198": {
        "issue": "broken-redirect",
        "matches": [
          "*://galaxy.store/*",
          "*://dev.galaxy.store/*",
          "*://stg.galaxy.store/*"
        ]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Samsung_for_Samsung_devices"]
      }
    ]
  },
  "1610026": {
    "label": "www.mobilesuica.com",
    "bugs": {
      "1610026": {
        "issue": "firefox-blocked-completely",
        "matches": ["https://www.mobilesuica.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1610344": {
    "label": "directv.com.co",
    "bugs": {
      "1610344": {
        "issue": "unsupported-warning",
        "matches": ["https://*.directv.com.co/*"]
      },
      "1827706": {
        "issue": "unsupported-warning",
        "matches": ["https://*.directv.com.ec/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1610344-directv.com.co-hide-unsupported-message.css"]
        }
      }
    ]
  },
  "1622063": {
    "label": "wp1-ext.usps.gov",
    "bugs": {
      "1622063": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://wp1-ext.usps.gov/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1644830": {
    "label": "usps.com",
    "bugs": {
      "1891016": {
        "issue": "broken-interactive-elements",
        "matches": ["https://*.usps.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1644830-missingmail.usps.com-checkboxes-not-visible.css"]
        }
      }
    ]
  },
  "1646791": {
    "label": "santanderbank.com",
    "bugs": {
      "1646791": {
        "issue": "page-fails-to-load",
        "matches": [
          "*://*.bancosantander.es/*",
          "*://*.gruposantander.es/*",
          "*://*.santander.co.uk/*"
        ]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["cap_Version_to_99", "change_Gecko_to_like_Gecko"]
      }
    ]
  },
  "1651292": {
    "label": "www.jp.square-enix.com",
    "bugs": {
      "1651292": {
        "issue": "page-fails-to-load",
        "matches": ["*://www.jp.square-enix.com/music/sem/page/FF7R/ost/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1666754": {
    "label": "lffl.org",
    "bugs": {
      "1665720": {
        "issue": "slow-performance",
        "matches": ["*://*.lffl.org/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1704673": {
    "label": "app.xiaomi.com",
    "bugs": {
      "1704673": {
        "issue": "broken-redirect",
        "matches": ["*://app.xiaomi.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1712807": {
    "label": "www.dealnews.com",
    "bugs": {
      "1712807": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://www.dealnews.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1719859": {
    "label": "saxoinvestor.fr",
    "bugs": {
      "1719859": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.saxoinvestor.fr/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1724868": {
    "label": "news.yahoo.co.jp",
    "bugs": {
      "1724868": {
        "issue": "broken-videos",
        "matches": ["*://news.yahoo.co.jp/articles/*", "*://s.yimg.jp/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["linux", "android"],
        "content_scripts": {
          "all_frames": true,
          "js": [
            "lib/ua_helpers.js",
            "bug1724868-news.yahoo.co.jp-ua-override.js"
          ]
        }
      }
    ]
  },
  "1739489": {
    "label": "Sites using draft.js",
    "bugs": {
      "1739489": {
        "issue": "broken-editor",
        "matches": ["*://draftjs.org/*", "*://www.facebook.com/*"]
      },
      "1776229": {
        "issue": "broken-editor",
        "matches": [
          "*://mobile.twitter.com/*",
          "*://mobile.x.com/*",
          "*://twitter.com/*",
          "*://x.com/*"
        ]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "skip_if": ["text_event_supported"],
        "content_scripts": {
          "js": ["bug1739489-draftjs-beforeinput.js"]
        }
      }
    ]
  },
  "1741234": {
    "label": "patient.alphalabs.ca",
    "bugs": {
      "1741234": {
        "issue": "broken-layout",
        "matches": ["*://patient.alphalabs.ca/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1741234-patient.alphalabs.ca-height-fix.css"]
        }
      }
    ]
  },
  "1743429": {
    "label": "Sites with issues with Firefox versions over 99",
    "bugs": {
      "1944356": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://411.ca/"]
      },
      "1800241": {
        "issue": "broken-layout",
        "matches": ["*://*.mms.telekom.de/*"]
      },
      "1944355": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://ubank.com.au/*"]
      },
      "1944352": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://wifi.sncf/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["cap_Version_to_99"]
      }
    ]
  },
  "1743627": {
    "label": "renaud-bray.com",
    "bugs": {
      "1743627": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.renaud-bray.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Version_segment"]
      }
    ]
  },
  "1743751": {
    "label": "slrclub.com",
    "bugs": {
      "1743751": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://*.slrclub.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1743754": {
    "label": "workflow.base.vn",
    "bugs": {
      "1743754": {
        "issue": "broken-login",
        "matches": ["*://workflow.base.vn/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1769762": {
    "label": "tiktok.com (broken comments)",
    "bugs": {
      "1769762": {
        "issue": "broken-comments",
        "matches": ["https://www.tiktok.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1769762-tiktok.com-plugins-shim.js"]
        }
      }
    ]
  },
  "1770962": {
    "label": "coldwellbankerhomes.com",
    "bugs": {
      "1770962": {
        "issue": "broken-images",
        "matches": ["*://*.coldwellbankerhomes.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1770962-coldwellbankerhomes.com-image-height.css"]
        }
      }
    ]
  },
  "1771200": {
    "label": "animalplanet.com",
    "bugs": {
      "1771200": {
        "issue": "broken-videos",
        "matches": ["*://*.animalplanet.com/video/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1774005": {
    "label": "Sites relying on window.InstallTrigger",
    "bugs": {
      "1793761": {
        "issue": "broken-layout",
        "matches": ["*://www.schoolnutritionandfitness.com/*"]
      },
      "1806340": {
        "issue": "broken-videos",
        "matches": ["*://ifcinema.institutfrancais.com/*"]
      },
      "1821439": {
        "issue": "broken-login",
        "matches": ["*://islamionline.islamicbank.ps/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "skip_if": ["InstallTrigger_defined"],
        "content_scripts": {
          "all_frames": true,
          "js": ["bug1774005-installtrigger-shim.js"]
        }
      }
    ]
  },
  "1778168": {
    "label": "watch.antennaplus.gr",
    "bugs": {
      "1778168": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://watch.antennaplus.gr/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["mac", "windows"],
        "ua_string": ["add_Chrome"]
      },
      {
        "platforms": ["linux"],
        "ua_string": ["add_Chrome", "change_OS_to_Windows"]
      }
    ]
  },
  "1779059": {
    "label": "lazada.co.id",
    "bugs": {
      "1779059": {
        "issue": "broken-map",
        "matches": ["*://member-m.lazada.co.id/address/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1779908": {
    "label": "play.google.com",
    "bugs": {
      "1779908": {
        "issue": "extra-scrollbars",
        "matches": ["*://play.google.com/store/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1779908-play.google.com-scrollbar-fix.css"]
        }
      }
    ]
  },
  "1784361": {
    "label": "coldwellbankerhomes.com",
    "bugs": {
      "1784361": {
        "issue": "broken-images",
        "matches": ["*://*.coldwellbankerhomes.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1799968": {
    "label": "www.samsung.com (scrolling fix)",
    "bugs": {
      "1799968": {
        "issue": "broken-scrolling",
        "matches": ["*://www.samsung.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["linux"],
        "content_scripts": {
          "js": ["bug1799968-www.samsung.com-appVersion-linux-fix.js"]
        }
      }
    ]
  },
  "1799980": {
    "label": "healow.com",
    "bugs": {
      "1799980": {
        "issue": "frozen-tab",
        "matches": ["*://healow.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1799980-healow.com-infinite-loop-fix.js"]
        }
      }
    ]
  },
  "1800880": {
    "label": "clipchamp.com",
    "bugs": {
      "1800880": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.clipchamp.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["Chrome_with_FxQuantum"]
      }
    ]
  },
  "1813177": {
    "label": "rbi.org",
    "bugs": {
      "1813177": {
        "issue": "broken-redirect",
        "matches": ["*://m.rbi.org.in/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1815733": {
    "label": "Office 365 Outlook locations",
    "bugs": {
      "1815733": {
        "issue": "broken-editor",
        "matches": [
          "*://outlook.live.com/*",
          "*://outlook.office.com/*",
          "*://outlook.office365.com/*",
          "*://outlook.office365.us/*",
          "*://*.outlook.cn/*",
          "*://*.outlook.com/*"
        ]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "all_frames": true,
          "js": ["bug1815733-outlook365-clipboard-read-noop.js"]
        }
      }
    ]
  },
  "1818818": {
    "label": "FastClick breakage (legacy)",
    "bugs": {
      "1944004": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.chatiw.com/*"]
      },
      "1818818": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.wellcare.com/*"]
      },
      "1953730": {
        "issue": "broken-interactive-elements",
        "matches": ["*://jobs.jobvite.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1818818-fastclick-legacy-shim.js"]
        }
      }
    ]
  },
  "1819450": {
    "label": "cmbchina.com",
    "bugs": {
      "1081239": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://www.cmbchina.com/*", "*://cmbchina.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1819450-cmbchina.com-ua-change.js"]
        }
      }
    ]
  },
  "1819476": {
    "label": "axisbank.com",
    "bugs": {
      "1819476": {
        "issue": "page-fails-to-load",
        "matches": ["*://*.axisbank.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1819476-axisbank.com-webkitSpeechRecognition-shim.js"]
        }
      }
    ]
  },
  "1823966": {
    "label": "elearning.dmv.ca.gov",
    "bugs": {
      "1823785": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.elearning.dmv.ca.gov/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1827678_65753": {
    "label": "admissions.nid.edu",
    "bugs": {
      "1899061": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.admissions.nid.edu/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1827678_68007": {
    "label": "frankfred.com",
    "bugs": {
      "1904411": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://*.frankfred.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1827678_68520": {
    "label": "onvue.com",
    "bugs": {
      "1899057": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.onvue.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1827678_68635": {
    "label": "avizia.com",
    "bugs": {
      "1889520": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.avizia.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1827678_76785": {
    "label": "www.yourtexasbenefits.com",
    "bugs": {
      "1899055": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://www.yourtexasbenefits.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1827678_77727": {
    "label": "www.free4talk.com",
    "bugs": {
      "1899053": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://www.free4talk.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1819678-free4talk.com-window-chrome-shim.js"]
        },
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1827678_77912": {
    "label": "watch.indee.tv",
    "bugs": {
      "1899052": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://watch.indee.tv/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1827678_80180": {
    "label": "viewer-ebook.books.com.tw",
    "bugs": {
      "1904371": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://viewer-ebook.books.com.tw/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1827678_83269": {
    "label": "jelly.jd.com",
    "bugs": {
      "1899051": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://jelly.jd.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1827678_119012": {
    "label": "kt.com",
    "bugs": {
      "1944036": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.kt.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1827678_119017": {
    "label": "nppes.cms.hhs.gov",
    "bugs": {
      "1898955": {
        "issue": "unsupported-warning",
        "matches": ["*://nppes.cms.hhs.gov/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1819678-nppes.cms.hhs.gov-unsupported-banner.css"]
        }
      }
    ]
  },
  "1827678_119402": {
    "label": "oirsa.org",
    "bugs": {
      "1898953": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.oirsa.org/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1827678_120450": {
    "label": "onp.cloud.waterloo.ca",
    "bugs": {
      "1898947": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://onp.cloud.waterloo.ca/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1830739": {
    "label": "Casino sites",
    "bugs": {
      "1902446": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.casinobrango.com/*"]
      },
      "1902452": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.eternalslots.com/*"]
      },
      "1902453": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.palaceofchance.com/*"]
      },
      "1902471": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.springbokcasino.co.za/*"]
      },
      "1902493": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.ozwincasino.com/*"]
      },
      "1904935": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.rubyslots.com/*"]
      },
      "1944317": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.captainjackcasino.com/*"]
      },
      "1944319": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.casinoextreme.eu/*"]
      },
      "1944320": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.cryptoloko.com/*"]
      },
      "1944324": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.123lobbygames.com/*"]
      },
      "1944321": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.planet7casino.com/*"]
      },
      "1944322": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.yebocasino.co.za/*"]
      },
      "1944323": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.yabbycasino.com/*"]
      },
      "1947963": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.slotmadness.com/*"]
      },
      "1964350": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.bonusblitz.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1830796": {
    "label": "copyleaks.com",
    "bugs": {
      "1898944": {
        "issue": "unsupported-warning",
        "matches": ["*://*.copyleaks.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "all_frames": true,
          "css": ["bug1830796-copyleaks.com-hide-unsupported.css"]
        }
      }
    ]
  },
  "1830821_90981": {
    "label": "enjoy.point.auone.jp",
    "bugs": {
      "1899047": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://enjoy.point.auone.jp/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1830821_113663": {
    "label": "webcartop.jp",
    "bugs": {
      "1944039": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://*.webcartop.jp/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1831007": {
    "label": "All international Nintendo domains",
    "bugs": {
      "1815836": {
        "issue": "broken-login",
        "matches": [
          "*://*.mojenintendo.cz/*",
          "*://*.nintendo-europe.com/*",
          "*://*.nintendo.at/*",
          "*://*.nintendo.be/*",
          "*://*.nintendo.ch/*",
          "*://*.nintendo.co.il/*",
          "*://*.nintendo.co.jp/*",
          "*://*.nintendo.co.kr/*",
          "*://*.nintendo.co.nz/*",
          "*://*.nintendo.co.uk/*",
          "*://*.nintendo.co.za/*",
          "*://*.nintendo.com.au/*",
          "*://*.nintendo.com.hk/*",
          "*://*.nintendo.com/*",
          "*://*.nintendo.de/*",
          "*://*.nintendo.dk/*",
          "*://*.nintendo.es/*",
          "*://*.nintendo.fi/*",
          "*://*.nintendo.fr/*",
          "*://*.nintendo.gr/*",
          "*://*.nintendo.hu/*",
          "*://*.nintendo.it/*",
          "*://*.nintendo.nl/*",
          "*://*.nintendo.no/*",
          "*://*.nintendo.pt/*",
          "*://*.nintendo.ru/*",
          "*://*.nintendo.se/*",
          "*://*.nintendo.sk/*",
          "*://*.nintendo.tw/*",
          "*://*.nintendoswitch.com.cn/*"
        ]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1831007-nintendo-window-OnetrustActiveGroups.js"]
        }
      }
    ]
  },
  "1836103": {
    "label": "autostar-novoross.ru",
    "bugs": {
      "1891078": {
        "issue": "broken-layout",
        "matches": ["*://autostar-novoross.ru/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1836103-autostar-novoross.ru-make-map-taller.css"]
        }
      }
    ]
  },
  "1836105": {
    "label": "cnn.com",
    "bugs": {
      "1830307": {
        "issue": "broken-printing",
        "matches": ["*://*.cnn.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1836105-cnn.com-fix-blank-pages-when-printing.css"]
        }
      }
    ]
  },
  "1836109": {
    "label": "watch.tonton.com.my",
    "bugs": {
      "1898970": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://watch.tonton.com.my/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1836135": {
    "label": "gts-pro.sdimedia.com",
    "bugs": {
      "1898978": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://gts-pro.sdimedia.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1836157": {
    "label": "thai-masszazs.net",
    "bugs": {
      "1836157": {
        "issue": "broken-scrolling",
        "matches": ["*://*.thai-masszazs.net/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1836157-thai-masszazs-niceScroll-disable.js"]
        }
      }
    ]
  },
  "1836178": {
    "label": "atracker.pro",
    "bugs": {
      "1905235": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://atracker.pro/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1836872": {
    "label": "docs.google.com",
    "bugs": {
      "1836872": {
        "issue": "broken-layout",
        "matches": ["*://docs.google.com/document/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1836872-docs.google.com-font-submenus-inaccessible.css"]
        }
      }
    ]
  },
  "1841730": {
    "label": "www.korg.com",
    "bugs": {
      "1841730": {
        "issue": "page-fails-to-load",
        "matches": ["*://www.korg.com/*/support/download/product/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["windows"],
        "pref_check": { "timer.auto_increase_timer_resolution": false },
        "content_scripts": {
          "js": ["bug1841730-www.korg.com-fix-broken-page-loads.js"]
        }
      }
    ]
  },
  "1842437": {
    "label": "YouTube back/forward fix",
    "bugs": {
      "1842437": {
        "issue": "user-interface-frustration",
        "matches": ["*://www.youtube.com/*"]
      },
      "1964603": {
        "issue": "user-interface-frustration",
        "matches": ["*://m.youtube.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1842437-www.youtube.com-performance-now-precision.js"]
        }
      }
    ]
  },
  "1842767": {
    "label": "passport.bilibili.com",
    "bugs": {
      "1842767": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://*.passport.bilibili.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1845299": {
    "label": "Google Slides",
    "bugs": {
      "1845299": {
        "issue": "extra-scrollbars",
        "matches": ["*://docs.google.com/presentation/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": [
            "bug1845299-docs.google.com-hide-extra-scrollbar-on-speaker-notes.css"
          ]
        }
      }
    ]
  },
  "1846742": {
    "label": "microsoft.com",
    "bugs": {
      "1846742": {
        "issue": "broken-interactive-elements",
        "matches": ["*://www.microsoft.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "js": ["bug1846742-microsoft.com-search-key-fix.js"]
        }
      }
    ]
  },
  "1847971": {
    "label": "ebay.com",
    "bugs": {
      "1847971": {
        "issue": "blocked-content",
        "matches": ["*://www.ebay.com/sl/prelist/suggest*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1847971-ebay.com-barcode-scanner.js"]
        }
      }
    ]
  },
  "1848713": {
    "label": "cleanrider.com",
    "bugs": {
      "1848713": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.cleanrider.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1848713-cleanrider.com-slider.css"]
        }
      }
    ]
  },
  "1848849": {
    "label": "theaa.com",
    "bugs": {
      "1848849": {
        "issue": "broken-printing",
        "matches": ["*://*.theaa.com/route-planner/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1848849-theaa.com-printing-mode-fix.css"]
        }
      }
    ]
  },
  "1850998": {
    "label": "chaturbate.com",
    "bugs": {
      "1850998": {
        "issue": "user-interface-frustration",
        "matches": ["*://*.chaturbate.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1850998-chaturbate.com.js"]
        }
      }
    ]
  },
  "1855014": {
    "label": "eksiseyler.com",
    "bugs": {
      "1855014": {
        "issue": "broken-images",
        "matches": ["*://eksiseyler.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1855014-eksiseyler.com.js"]
        }
      }
    ]
  },
  "1855088": {
    "label": "hrmis2.eghrmis.gov.my",
    "bugs": {
      "1898930": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://hrmis2.eghrmis.gov.my/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["change_Firefox_to_FireFox"]
      }
    ]
  },
  "1855102": {
    "label": "my.southerncross.co.nz",
    "bugs": {
      "1898940": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://my.southerncross.co.nz/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1856915": {
    "label": "login.yahoo.com",
    "bugs": {
      "1856915": {
        "issue": "broken-layout",
        "matches": ["*://login.yahoo.com/account/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "css": ["bug1856915-login.yahoo.com-unhide-password-button-fix.css"]
        }
      }
    ]
  },
  "1859617": {
    "label": "Sites relying on there being no window.InstallTrigger",
    "bugs": {
      "1854165": {
        "issue": "broken-printing",
        "matches": ["*://*.stallionexpress.ca/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "skip_if": ["InstallTrigger_undefined"],
        "content_scripts": {
          "all_frames": true,
          "js": ["bug1859617-installtrigger-removal-shim.js"]
        }
      }
    ]
  },
  "1860417": {
    "label": "www.samsung.com (images fix)",
    "bugs": {
      "1860417": {
        "issue": "broken-images",
        "matches": ["*://www.samsung.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1799968-www.samsung.com-appVersion-linux-fix.js"]
        }
      }
    ]
  },
  "1864999": {
    "label": "autotrader.ca",
    "bugs": {
      "1864999": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.autotrader.ca/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1865000": {
    "label": "bmo.com",
    "bugs": {
      "1898919": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.bmo.com/main/personal/*/getting-started/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1865004": {
    "label": "digimart.net",
    "bugs": {
      "1865004": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://*.digimart.net/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1865007": {
    "label": "portal.circle.ms",
    "bugs": {
      "1865007": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://*.circle.ms/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1873166": {
    "label": "nsandi.com",
    "bugs": {
      "1873166": {
        "issue": "unsupported-warning",
        "matches": ["*://*.nsandi.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "css": ["bug1873166-nsandi.com-hide-unsupported-message.css"]
        }
      }
    ]
  },
  "1875540": {
    "label": "allstate.com",
    "bugs": {
      "1875540": {
        "issue": "unsupported-warning",
        "matches": ["*://*.allstate.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1878024": {
    "label": "g1.globo.com",
    "bugs": {
      "1878024": {
        "issue": "broken-layout",
        "matches": ["*://g1.globo.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "js": ["bug1878024-g1.globo.com-fix-account-icon.js"]
        }
      }
    ]
  },
  "1884779": {
    "label": "memurlar.net",
    "bugs": {
      "1884779": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://*.memurlar.net/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1886293": {
    "label": "Future PLC websites",
    "bugs": {
      "1886293": {
        "issue": "extra-scrollbars",
        "matches": [
          "*://*.androidcentral.com/*",
          "*://*.creativebloq.com/*",
          "*://*.cyclingnews.com/*",
          "*://*.gamesradar.com/*",
          "*://*.imore.com/*",
          "*://*.itpro.com/*",
          "*://*.laptopmag.com/*",
          "*://*.livescience.com/*",
          "*://*.loudersound.com/*",
          "*://*.musicradar.com/*",
          "*://*.pcgamer.com/*",
          "*://*.space.com/*",
          "*://*.techradar.com/*",
          "*://*.tomshardware.com/*",
          "*://*.windowscentral.com/*"
        ]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1886293-futurePLC-sites-trending_scrollbars.css"]
        }
      }
    ]
  },
  "1886566": {
    "label": "quezoncity.gov.ph",
    "bugs": {
      "1886566": {
        "issue": "broken-layout",
        "matches": ["*://qceservices.quezoncity.gov.ph/qcvaxeasy*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1886566-quezoncity.gov.ph-iframe-height.css"]
        }
      }
    ]
  },
  "1886616": {
    "label": "www.six-group.com",
    "bugs": {
      "1886616": {
        "issue": "broken-interactive-elements",
        "matches": [
          "*://www.six-group.com/*/market-data/etf/etf-explorer.html*"
        ]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1886616-www.six-group.com-select-fix.css"]
        }
      }
    ]
  },
  "1889326": {
    "label": "Office 365 email handling prompt",
    "bugs": {
      "1709653": {
        "issue": "user-interface-frustration",
        "matches": [
          "*://*.live.com/*",
          "*://*.office.com/*",
          "*://*.office365.com/*",
          "*://*.office365.us/*",
          "*://*.outlook.cn/*",
          "*://*.outlook.com/*",
          "*://*.sharepoint.com/*"
        ]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "all_frames": true,
          "js": ["bug1889326-office365-email-handling-prompt-autohide.js"]
        }
      }
    ]
  },
  "1889505": {
    "label": "bankmandiri.co.id",
    "bugs": {
      "1899059": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.bankmandiri.co.id/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      },
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1889505-bankmandiri.co.id-window.chrome.js"]
        }
      }
    ]
  },
  "1890762": {
    "label": "urvaerket.dk",
    "bugs": {
      "1890762": {
        "issue": "broken-scrolling",
        "matches": ["*://*.urvaerket.dk/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "css": ["bug1890762-urvaerket.dk-fix-mobile-filter-scrolling.css"]
        }
      }
    ]
  },
  "1892898": {
    "label": "investopedia.com",
    "bugs": {
      "1892898": {
        "issue": "broken-layout",
        "matches": ["*://*.investopedia.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1892898-investopedia.com-fix-card-height.css"]
        }
      }
    ]
  },
  "1894308": {
    "label": "dingtalk.com",
    "bugs": {
      "1894308": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.dingtalk.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1895051": {
    "label": "www.zhihu.com",
    "bugs": {
      "1895051": {
        "issue": "broken-interactive-elements",
        "matches": ["*://www.zhihu.com/question/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1895051-www.zhihu.com-broken-button-fix.css"]
        }
      }
    ]
  },
  "1896349": {
    "label": "vivaldi.com",
    "bugs": {
      "1896349": {
        "issue": "broken-interactive-elements",
        "matches": ["*://vivaldi.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1896349-vivaldi.com-selected-text-fix.css"]
        }
      }
    ]
  },
  "1896354": {
    "label": "my.rhinoshield.fr",
    "bugs": {
      "1896354": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://my.rhinoshield.fr/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1896571": {
    "label": "gracobaby.ca",
    "bugs": {
      "1896571": {
        "issue": "broken-scrolling",
        "matches": ["*://www.gracobaby.ca/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1896571-gracobaby.ca-unlock-scrolling.css"]
        }
      }
    ]
  },
  "1897120": {
    "label": "Flipbook",
    "bugs": {
      "1897120": {
        "issue": "broken-zooming",
        "matches": ["*://flipbook.se.com/*", "*://*.flipbookpdf.net/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "pref_check": { "layout.css.prefixes.transforms": false },
        "content_scripts": {
          "all_frames": true,
          "js": ["bug1897120-turnjs-zoom-fix.js"]
        }
      }
    ]
  },
  "1897724": {
    "label": "app.homewyse.com",
    "bugs": {
      "1897724": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://app.homewyse.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1898909": {
    "label": "remotasks.com",
    "bugs": {
      "1898909": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.remotasks.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1898923": {
    "label": "trade-in.vodafone.com",
    "bugs": {
      "1898923": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://trade-in.vodafone.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1898932": {
    "label": "account.gov.il",
    "bugs": {
      "1898932": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://account.gov.il/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1898938": {
    "label": "conference.amwell.com",
    "bugs": {
      "1898938": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://conference.amwell.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1898941": {
    "label": "events.webinar.ru",
    "bugs": {
      "1898941": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://events.webinar.ru/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1898946": {
    "label": "transcrib.io",
    "bugs": {
      "1898946": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://transcrib.io/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1898946-transcrib.io-chrome-shim.js"]
        }
      }
    ]
  },
  "1898952": {
    "label": "digits.t-mobile.com",
    "bugs": {
      "1898952": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://digits.t-mobile.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "js": ["bug1898952-digits.t-mobile.com.js"]
        }
      }
    ]
  },
  "1898960": {
    "label": "hrm.online.comarch.pl",
    "bugs": {
      "1898960": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://hrm.online.comarch.pl/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1898988": {
    "label": "prudential.com.hk",
    "bugs": {
      "1898988": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.prudential.com.hk/*"]
      }
    },
    "interventions": [
      {
        "not_platforms": ["linux"],
        "ua_string": ["add_Chrome"]
      },
      {
        "platforms": ["linux"],
        "ua_string": ["add_Chrome", "change_OS_to_MacOSX"]
      }
    ]
  },
  "1898994": {
    "label": "eportal.uestc.edu.cn",
    "bugs": {
      "1898994": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://eportal.uestc.edu.cn/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1899060": {
    "label": "wbte.drcedirect.com",
    "bugs": {
      "1899060": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://wbte.drcedirect.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1899065": {
    "label": "CenterParcs UK and Ireland",
    "bugs": {
      "1899065": {
        "issue": "unsupported-warning",
        "matches": ["*://*.centerparcs.co.uk/*"]
      },
      "1902410": {
        "issue": "unsupported-warning",
        "matches": ["*://*.centerparcs.ie/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1899065-centerparcs-hide-unsupported-warning.css"]
        }
      }
    ]
  },
  "1899066": {
    "label": "bookcreator.com",
    "bugs": {
      "1899066": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://app.bookcreator.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1899067": {
    "label": "game.granbluefantasy.jp",
    "bugs": {
      "1899067": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://game.granbluefantasy.jp/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1899072": {
    "label": "passpoint.boingo.com",
    "bugs": {
      "1899072": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://passpoint.boingo.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome_with_FxQuantum", "mimic_Android_Hotspot2_device"]
      },
      {
        "platforms": ["linux", "mac"],
        "ua_string": ["Safari"]
      }
    ]
  },
  "1899829": {
    "label": "animeflv.net",
    "bugs": {
      "1899829": {
        "issue": "broken-images",
        "matches": ["*://www3.animeflv.net/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1899829-animeflv.net-fix-premiere-labels.css"]
        }
      }
    ]
  },
  "1899929": {
    "label": "selecionases.saude.pe.gov.br",
    "bugs": {
      "1899929": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://selecionases.saude.pe.gov.br/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1899937": {
    "label": "plus.nhk.jp",
    "bugs": {
      "1899937": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://plus.nhk.jp/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1899937-plus.nhk.jp-hide-unsupported.css"],
          "js": ["bug1899937-plus.nhk.jp-request-picture-in-picture.js"]
        },
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1899945": {
    "label": "nytimes.com Modern Love Questions",
    "bugs": {
      "1899945": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://www.nytimes.com/interactive/projects/modern-love/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1899948": {
    "label": "tv.partner.co.il",
    "bugs": {
      "1899948": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://tv.partner.co.il/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1901000": {
    "label": "eyebuydirect.ca",
    "bugs": {
      "1901000": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.eyebuydirect.ca/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "max_version": 134,
        "content_scripts": {
          "css": ["bug1901000-eyebuydirect.ca-fix-paypal-button.css"]
        }
      }
    ]
  },
  "1901780": {
    "label": "vanbreda-health.be",
    "bugs": {
      "1901780": {
        "issue": "frozen-tab",
        "matches": ["*://www.vanbreda-health.be/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1901780-disable-legacy-mutation-events.js"]
        }
      }
    ]
  },
  "1902379": {
    "label": "adl.edu.tw",
    "bugs": {
      "1902379": {
        "issue": "unsupported-warning",
        "matches": ["*://adl.edu.tw/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": [
            "lib/ua_helpers.js",
            "bug1902379-adl.edu.tw-hide-unsupported-popup.js"
          ]
        }
      }
    ]
  },
  "1902382": {
    "label": "flash.puffin.com",
    "bugs": {
      "1902382": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://flash.puffin.com/store/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1902389": {
    "label": "store.91app.com",
    "bugs": {
      "1902389": {
        "issue": "unsupported-warning",
        "matches": ["*://store.91app.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1902397": {
    "label": "e-src.net",
    "bugs": {
      "1902397": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://www.e-src.net/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1902399": {
    "label": "recochoku.jp",
    "bugs": {
      "1902399": {
        "issue": "unsupported-warning",
        "matches": ["*://recochoku.jp/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1902399-recochoku.jp-hide-unsupported-browser-warning.js"]
        }
      }
    ]
  },
  "1902403": {
    "label": "musicstore.auone.jp",
    "bugs": {
      "1385206": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://musicstore.auone.jp/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1902404": {
    "label": "pss.perodua.com.my",
    "bugs": {
      "1902404": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://pss.perodua.com.my/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1902406": {
    "label": "sp.hi.co.kr",
    "bugs": {
      "1902406": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://sp.hi.co.kr/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1902406-sp.hi.co.kr-window-chrome-shim.js"]
        }
      }
    ]
  },
  "1902411": {
    "label": "agent.foundi.info",
    "bugs": {
      "1902411": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://agent.foundi.info/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1902413": {
    "label": "ibanka.seb.lv",
    "bugs": {
      "1902413": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://ibanka.seb.lv/*login*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1902414": {
    "label": "e.seb.ee",
    "bugs": {
      "1902414": {
        "issue": "unsupported-warning",
        "matches": ["*://e.seb.ee/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1902459": {
    "label": "coupangplay.com",
    "bugs": {
      "1902459": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.coupangplay.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1902474": {
    "label": "lg.jio.com",
    "bugs": {
      "1902474": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://lg.jio.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["desktop_not_mobile"]
      }
    ]
  },
  "1902478": {
    "label": "La Personnelle and Desjardins General insurance",
    "bugs": {
      "1902477": {
        "issue": "blocked-content",
        "matches": ["*://*.thepersonal.com/*"]
      },
      "1902478": {
        "issue": "blocked-content",
        "matches": ["*://*.lapersonnelle.com/*"]
      },
      "1902483": {
        "issue": "blocked-content",
        "matches": ["*://*.desjardinsgeneralinsurance.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1902506": {
    "label": "mp3cut.net",
    "bugs": {
      "1909448": {
        "issue": "blocked-content",
        "matches": ["*://mp3cut.net/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1905069": {
    "label": "one.geekie.com.br",
    "bugs": {
      "1905069": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://one.geekie.com.br/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "js": ["bug1905069-one.geekie.com.br-chrome-shims.js"]
        }
      }
    ]
  },
  "1905607": {
    "label": "10play.com.au",
    "bugs": {
      "1905607": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://10play.com.au/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1906630": {
    "label": "watch.foxtel.com.au",
    "bugs": {
      "1906630": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://watch.foxtel.com.au/app/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1911253": {
    "label": "qq.com",
    "bugs": {
      "1911253": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.qq.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "all_frames": true,
          "css": ["bug1911253-qq.com-unhide-checkboxes.css"]
        }
      }
    ]
  },
  "1912923": {
    "label": "class.com",
    "bugs": {
      "1951358": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.class.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1913759": {
    "label": "playblackdesert.com",
    "bugs": {
      "1913759": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://eu-trade.naeu.playblackdesert.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1919004": {
    "label": "www.editoracontexto.com.br",
    "bugs": {
      "1919004": {
        "issue": "desktop-layout-not-mobile",
        "matches": ["*://www.editoracontexto.com.br/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1914327": {
    "label": "media.qdnd.vn",
    "bugs": {
      "1914327": {
        "issue": "broken-videos",
        "matches": ["*://media.qdnd.vn/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1918609": {
    "label": "www.zara.com",
    "bugs": {
      "1918609": {
        "issue": "broken-layout",
        "matches": ["*://www.zara.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "only_channels": ["nightly"],
        "ua_string": ["reduce_firefox_version_by_one"]
      }
    ]
  },
  "1919263": {
    "label": "www.nbcsports.com",
    "bugs": {
      "1919263": {
        "issue": "broken-layout",
        "matches": ["*://www.nbcsports.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1919263-nbcsports.com-getCurrentUser-script-error-fix.js"]
        }
      }
    ]
  },
  "1921410": {
    "label": "maps.apple.com",
    "bugs": {
      "1921410": {
        "issue": "blocked-content",
        "matches": ["*://*.maps.apple.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["linux"],
        "ua_string": ["change_OS_to_Windows"]
      }
    ]
  },
  "1923656": {
    "label": "ipmph.com",
    "bugs": {
      "1923656": {
        "issue": "page-fails-to-load",
        "matches": ["*://*.ipmph.com/#/bookPreview*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1925508": {
    "label": "developer.apple.com",
    "bugs": {
      "1925508": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://developer.apple.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "pref_check": { "layout.css.prefixes.transforms": true },
        "content_scripts": {
          "css": ["bug1925508-developer-apple.com-transform-scale.css"]
        }
      }
    ]
  },
  "1925937": {
    "label": "gazetasp.com.br",
    "bugs": {
      "1925937": {
        "issue": "extra-scrollbars",
        "matches": ["*://www.gazetasp.com.br/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1925937-gazetasp.com.br-hide-extra-scrollbars.css"]
        }
      }
    ]
  },
  "1927984": {
    "label": "modules.sms-timing.com",
    "bugs": {
      "1927984": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://modules.sms-timing.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1927984-modules.sms-timing.com-chrome-shim.js"]
        },
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1928941": {
    "label": "oasis.decart.ai",
    "bugs": {
      "1928941": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://oasis.decart.ai/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "js": ["bug1928941-oasis.decart.ai-window-chrome-shim.js"]
        },
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1928954": {
    "label": "publix.com",
    "bugs": {
      "1928954": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.publix.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "max_version": 139,
        "content_scripts": {
          "js": ["bug1928954-publix.com-prevent-nav-on-javascript-url-click.js"]
        }
      }
    ]
  },
  "1930440": {
    "label": "online.singaporepools.com",
    "bugs": {
      "1930440": {
        "issue": "unsupported-warning",
        "matches": ["*://online.singaporepools.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": [
            "bug1930440-online.singaporepools.com-prevent-unsupported-alert.js"
          ]
        }
      }
    ]
  },
  "1931538": {
    "label": "buzzfeed.com",
    "bugs": {
      "1931538": {
        "issue": "broken-interactive-elements",
        "matches": [
          "*://www.buzzfeed.com/trendyelephant793/thanksgiving-foods-showdown-quiz*"
        ]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "max_version": 140,
        "content_scripts": {
          "css": ["bug1931538-buzzfeed.com-card-game-fix.css"]
        }
      }
    ]
  },
  "1933169": {
    "label": "next.goalplan.com",
    "bugs": {
      "1933169": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://next.goalplan.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1933811": {
    "label": "indices.circana.com",
    "bugs": {
      "1898959": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://indices.circana.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1934189": {
    "label": "fdj.fr",
    "bugs": {
      "1934189": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.fdj.fr/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1934567": {
    "label": "port8.fi",
    "bugs": {
      "1934567": {
        "issue": "broken-scrolling",
        "matches": ["*://www.port8.fi/bokning/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "css": ["bug1934567-www.port8.fi-scrolling-fix.css"]
        }
      }
    ]
  },
  "1918604": {
    "label": "g1.globo.com Caça Palavras",
    "bugs": {
      "1918604": {
        "issue": "broken-layout",
        "matches": ["*://g1.globo.com/jogos/caca-palavras/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1918604-g1.globo.com-fix-clipped-buttons.css"]
        }
      }
    ]
  },
  "1918995": {
    "label": "calculator.net",
    "bugs": {
      "1918995": {
        "issue": "user-interface-frustration",
        "matches": ["*://www.calculator.net/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "css": ["bug1918995-calculator.net-hide-copypaste-ui-for-buttons.css"]
        }
      }
    ]
  },
  "1935598": {
    "label": "testbook.com",
    "bugs": {
      "1935598": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://testbook.com/*/lesson/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1935968": {
    "label": "cfspart-idp.impots.gouv.fr",
    "bugs": {
      "1935968": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://cfspart-idp.impots.gouv.fr/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1939248": {
    "label": "rosasthai.com",
    "bugs": {
      "1939248": {
        "issue": "broken-interactive-elements",
        "matches": ["*://rosasthai.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1939248-rosasthai.com-load-event-helper.js"]
        }
      }
    ]
  },
  "1943987": {
    "label": "andisearch.com",
    "bugs": {
      "1943987": {
        "issue": "broken-layout",
        "matches": ["*://andisearch.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "css": ["bug1943987-andisearch.com-fix-offscreen-elements.css"]
        }
      }
    ]
  },
  "1943920": {
    "label": "add.org",
    "bugs": {
      "1943920": {
        "issue": "broken-layout",
        "matches": ["*://add.org/adhd-facts*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "css": ["bug1943920-add.org-fix-overlapping-menu.css"]
        }
      }
    ]
  },
  "1941530": {
    "label": "climate.rutgers.edu",
    "bugs": {
      "1941530": {
        "issue": "broken-images",
        "matches": ["*://climate.rutgers.edu/snowcover/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1941530-climate.rutgers.edu-fix-broken-images.css"]
        }
      }
    ]
  },
  "1942292": {
    "label": "beterbed.nl",
    "bugs": {
      "1942292": {
        "issue": "extra-scrollbars",
        "matches": ["*://www.beterbed.nl/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1942292-beterbed.nl-scrollbar-fix.css"]
        }
      }
    ]
  },
  "1943898": {
    "label": "www.capital.gr",
    "bugs": {
      "1943898": {
        "issue": "broken-redirect",
        "matches": ["*://www.capital.gr/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1943898-www.capital.gr-suppress-constant-reloading.js"]
        }
      }
    ]
  },
  "1943993": {
    "label": "arenti.net",
    "bugs": {
      "1943993": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.arenti.net/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1944518": {
    "label": "app.powerbi.com",
    "bugs": {
      "1944518": {
        "issue": "broken-scrolling",
        "matches": ["*://app.powerbi.com/view*"]
      },
      "1919263": {
        "issue": "broken-zooming",
        "matches": ["*://app.powerbi.com/view*"]
      }
    },
    "interventions": [
      {
        "platforms": ["mac"],
        "ua_string": ["add_Chrome"]
      },
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "all_frames": true,
          "js": ["bug1911423-app.powerbi.com-emulate-mousewheel-events.js"]
        }
      }
    ]
  },
  "1944727": {
    "label": "linkedin.com",
    "bugs": {
      "1944727": {
        "issue": "broken-layout",
        "matches": ["*://*.linkedin.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "css": ["bug1944727-www.linkedin.com-fix-dark-overlay.css"]
        }
      }
    ]
  },
  "1945019": {
    "label": "order.mealkeyway.com",
    "bugs": {
      "1945019": {
        "issue": "unsupported-warning",
        "matches": ["https://order.mealkeyway.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": [
            "bug1945019-order.mealkeyway.com-prevent-unsupported-message.js"
          ]
        }
      }
    ]
  },
  "1945438": {
    "label": "tiktok.com (extra scrollbars)",
    "bugs": {
      "1945438": {
        "issue": "extra-scrollbars",
        "matches": ["*://www.tiktok.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1945438-www.tiktok.com-hide-extra-scrollbars.css"]
        }
      }
    ]
  },
  "1946443": {
    "label": "aliexpress.com bundle deals pages",
    "bugs": {
      "1946443": {
        "issue": "broken-layout",
        "matches": ["*://www.aliexpress.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1947105": {
    "label": "pexels.com",
    "bugs": {
      "1947105": {
        "issue": "broken-layout",
        "matches": ["*://*.pexels.com/photo/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1947105-pexels.com-nudge-thanks-popup-onscreen.css"]
        }
      }
    ]
  },
  "1947407": {
    "label": "y.qq.com",
    "bugs": {
      "1947407": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://y.qq.com/artists*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1948047": {
    "label": "lovers.cacaushow.com.br",
    "bugs": {
      "1948047": {
        "issue": "broken-layout",
        "matches": ["*://lovers.cacaushow.com.br/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": [
            "bug1948047-lovers.cacaushow.com.br-nudge-login-popup-onscreen.css"
          ]
        }
      }
    ]
  },
  "1947979": {
    "label": "www.shazam.com",
    "bugs": {
      "1947979": {
        "issue": "extra-scrollbars",
        "matches": ["*://www.shazam.com/song/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1947979-shazam.com-hide-extra-scrollbars.css"]
        }
      }
    ]
  },
  "1948723": {
    "label": "babel.com",
    "bugs": {
      "1948723": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://chat.babel.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome"]
      }
    ]
  },
  "1949466": {
    "label": "lapalabradeldia.com",
    "bugs": {
      "1949466": {
        "issue": "broken-interactive-elements",
        "matches": ["*://lapalabradeldia.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1949466-lapalabradeldia.com-fix-vanishing-letters.css"]
        }
      }
    ]
  },
  "1950100": {
    "label": "aylak.com",
    "bugs": {
      "1950100": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.aylak.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1950053": {
    "label": "omegleapp.me",
    "bugs": {
      "1950053": {
        "issue": "extra-scrollbars",
        "matches": ["*://omegleapp.me/chat*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1950053-omegleapp.me-fix-scrollbars.css"]
        }
      }
    ]
  },
  "1950282": {
    "label": "f1tv.formula1.com",
    "bugs": {
      "1950282": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.formula1.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      },
      {
        "platforms": ["linux"],
        "content_scripts": {
          "js": ["bug1950282-formula1.com-platform-linux-fix.js"]
        }
      }
    ]
  },
  "1950807": {
    "label": "sus.softadmin.se",
    "bugs": {
      "1950807": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://sus.softadmin.se/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1952832": {
    "label": "supermappex.it",
    "bugs": {
      "1952832": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.supermappex.it/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1953077": {
    "label": "Nintendo movie guidebook",
    "bugs": {
      "1953077": {
        "issue": "broken-layout",
        "matches": ["*://*.nintendo.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1953077-nintendo.com-fix-blank-movie-guidebook.css"]
        }
      }
    ]
  },
  "1953091": {
    "label": "slc-ut-us.avolvecloud.com",
    "bugs": {
      "1953091": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://slc-ut-us.avolvecloud.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1954002": {
    "label": "advancedmd.com",
    "bugs": {
      "1954002": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.advancedmd.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1898952-digits.t-mobile.com.js"]
        },
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1954144": {
    "label": "td.com",
    "bugs": {
      "1954144": {
        "issue": "extra-scrollbars",
        "matches": ["*://*.td.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "css": ["bug1954144-td.com-scrollbar-fix.css"]
        }
      }
    ]
  },
  "1954533": {
    "label": "copaair.com",
    "bugs": {
      "1954533": {
        "issue": "page-fails-to-load",
        "matches": ["*://*.copaair.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "min_version": 141,
        "alter_request_headers": [
          {
            "headers": ["TE"],
            "replacement": "moz_no_te_trailers"
          }
        ]
      }
    ]
  },
  "1955932": {
    "label": "coopvoce.it",
    "bugs": {
      "1955932": {
        "issue": "broken-scrolling",
        "matches": ["*://www.coopvoce.it/portale/ricarica.html*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1955932-coopvoce.it-fix-broken-radiobuttons.css"]
        }
      }
    ]
  },
  "1956165": {
    "label": "m.youtube.com picture-in-picture fix",
    "bugs": {
      "1956165": {
        "issue": "broken-videos",
        "matches": ["*://m.youtube.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1956165-www.youtube.com-picture-in-picture-fix.js"]
        }
      }
    ]
  },
  "1957657": {
    "label": "myheritage.com",
    "bugs": {
      "1957657": {
        "issue": "broken-interactive-elements",
        "matches": ["*://www.myheritage.com/complete-genealogy-package*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1957657-myheritage.com-fix-signup-email-field.js"]
        }
      }
    ]
  },
  "1959117": {
    "label": "cesupils.lv",
    "bugs": {
      "1959117": {
        "issue": "page-fails-to-load",
        "matches": ["*://cesupils.lv/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1959132": {
    "label": "www.samsung.com (columns fix)",
    "bugs": {
      "1959132": {
        "issue": "broken-layout",
        "matches": ["*://www.samsung.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "css": ["bug1959132-www.samsung.com-column-size-fix.css"]
        }
      }
    ]
  },
  "1959444": {
    "label": "m.modanisa.com",
    "bugs": {
      "1959444": {
        "issue": "incorrect-viewport-dimensions",
        "matches": ["*://m.modanisa.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["change_Firefox_to_FireFox"]
      }
    ]
  },
  "1960316": {
    "label": "wms.sso.biglobe.ne.jp",
    "bugs": {
      "1960316": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://wms.sso.biglobe.ne.jp/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "ua_string": ["add_Chrome"]
      }
    ]
  },
  "1960595": {
    "label": "de.pons.com",
    "bugs": {
      "1960595": {
        "issue": "unsupported-warning",
        "matches": ["*://de.pons.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1960595-de.pons.com-hide-unsupported-banner.js"]
        }
      }
    ]
  },
  "1962353": {
    "label": "cartlow.com",
    "bugs": {
      "1962353": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://www.cartlow.com/uae/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1962353-cartlow.com-fix-product-filters.js"]
        }
      }
    ]
  },
  "1962642": {
    "label": "hoanghamobile.com",
    "bugs": {
      "1962642": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://hoanghamobile.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1963270": {
    "label": "app.kosmi.io",
    "bugs": {
      "1963270": {
        "issue": "blocked-content",
        "matches": ["*://app.kosmi.io/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "js": ["bug1963270-app.kosmi.io-unprefix-mozCaptureStream.js"]
        }
      }
    ]
  },
  "1964015": {
    "label": "kickasstorrents.cr",
    "bugs": {
      "1964015": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://kickasstorrents.cr/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1966330": {
    "label": "salling.dk",
    "bugs": {
      "1966330": {
        "issue": "broken-scrolling",
        "matches": ["*://salling.dk/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1966330-salling.dk-fix-mobile-filter-scrolling.css"]
        }
      }
    ]
  },
  "1966389": {
    "label": "boots.com",
    "bugs": {
      "1966389": {
        "issue": "broken-layout",
        "matches": ["*://appointments.boots.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "all_frames": true,
          "css": ["bug1966389-boots.com-align-element-widths.css"]
        }
      }
    ]
  },
  "1966585": {
    "label": "hiskin.care",
    "bugs": {
      "1966585": {
        "issue": "broken-interactive-elements",
        "matches": ["*://hiskin.care/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1966585-hiskin.care-reveal-missing-content.css"]
        }
      }
    ]
  },
  "1966673": {
    "label": "culturepsg.com",
    "bugs": {
      "1966673": {
        "issue": "broken-interactive-elements",
        "matches": ["*://www.culturepsg.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["android"],
        "content_scripts": {
          "js": ["bug1966673-culturepsg.com-niceScroll-cantouch-fix.js"]
        }
      }
    ]
  },
  "1967510": {
    "label": "gemini.google.com",
    "bugs": {
      "1967510": {
        "issue": "broken-editor",
        "matches": ["*://gemini.google.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["desktop"],
        "content_scripts": {
          "js": [
            "bug1967510-gemini.google.com-fix-copy-pasting-between-inputs.js"
          ]
        }
      }
    ]
  },
  "1967694": {
    "label": "onlyfaucet.com",
    "bugs": {
      "1967694": {
        "issue": "firefox-blocked-completely",
        "matches": ["*://*.onlyfaucet.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "ua_string": ["Chrome", "add_Firefox_as_Gecko"]
      }
    ]
  },
  "1968198": {
    "label": "www.metacritic.com",
    "bugs": {
      "1968198": {
        "issue": "broken-interactive-elements",
        "matches": ["*://www.metacritic.com/browse/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1968198-metacritic.com-fix-release-year-filter.css"]
        }
      }
    ]
  },
  "1969165": {
    "label": "appointments.mpi.mb.ca",
    "bugs": {
      "1969165": {
        "issue": "page-fails-to-load",
        "matches": ["*://appointments.mpi.mb.ca/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "skip_if": ["getWeekInfo_defined"],
        "content_scripts": {
          "js": ["bug196916-mpi.mb.ca-polyfill-getWeekInfo.js"]
        }
      }
    ]
  },
  "1971504": {
    "label": "wallapop.com",
    "bugs": {
      "1971504": {
        "issue": "broken-interactive-elements",
        "matches": ["*://*.wallapop.com/*"]
      }
    },
    "interventions": [
      {
        "platforms": ["all"],
        "content_scripts": {
          "css": ["bug1971504-wallapop.com-fix-range-sliders.css"]
        }
      }
    ]
  }
}
//@line 14 "$SRCDIR/browser/extensions/webcompat/run.js"

try {
  interventions = new Interventions(AVAILABLE_INTERVENTIONS, CUSTOM_FUNCTIONS);
  interventions.bootup();
} catch (e) {
  console.error("Interventions failed to start", e);
  interventions = undefined;
}

try {
  shims = new Shims(AVAILABLE_SHIMS);
} catch (e) {
  console.error("Shims failed to start", e);
  shims = undefined;
}

try {
  const aboutCompatBroker = new AboutCompatBroker({
    interventions,
    shims,
  });
  aboutCompatBroker.bootup();
} catch (e) {
  console.error("about:compat broker failed to start", e);
}
