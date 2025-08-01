//@line 2 "$SRCDIR/browser/app/profile/firefox.js"
//@line 21 "$SRCDIR/browser/app/profile/firefox.js"
//@line 25 "$SRCDIR/browser/app/profile/firefox.js"
pref("extensions.abuseReport.enabled", true);
pref("extensions.logging.enabled", false);
pref("extensions.strictCompatibility", false);
pref("extensions.webextOptionalPermissionPrompts", true);
pref("extensions.postDownloadThirdPartyPrompt", true);
pref("extensions.getAddons.cache.enabled", true);
pref("extensions.getAddons.get.url", "https://services.addons.mozilla.org/api/v4/addons/search/?guid=%IDS%&lang=%LOCALE%");
pref("extensions.getAddons.search.browseURL", "https://addons.mozilla.org/%LOCALE%/firefox/search?q=%TERMS%&platform=%OS%&appver=%VERSION%");
pref("extensions.getAddons.link.url", "https://addons.mozilla.org/%LOCALE%/firefox/");
pref("extensions.getAddons.langpacks.url", "https://services.addons.mozilla.org/api/v4/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%");
pref("extensions.getAddons.discovery.api_url", "https://services.addons.mozilla.org/api/v4/discovery/?lang=%LOCALE%&edition=%DISTRIBUTION%");
pref("extensions.getAddons.browserMappings.url", "https://services.addons.mozilla.org/api/v5/addons/browser-mappings/?browser=%BROWSER%");
pref("extensions.recommendations.privacyPolicyUrl", "https://www.mozilla.org/privacy/firefox/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=privacy-policy-link#addons");
pref("extensions.recommendations.themeRecommendationUrl", "https://color.firefox.com/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=theme-footer-link");
pref("extensions.update.autoUpdateDefault", true);
pref("extensions.systemAddon.update.url", "https://aus5.mozilla.org/update/3/SystemAddons/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml");
pref("extensions.systemAddon.update.enabled", true);
pref("extensions.autoDisableScopes", 15);
pref("extensions.startupScanScopes", 0);
pref("extensions.geckoProfiler.acceptedExtensionIds", "geckoprofiler@mozilla.com,quantum-foxfooding@mozilla.com,raptor@mozilla.org");
pref("extensions.webextensions.remote", true);
pref("extensions.langpacks.signatures.required", true);
pref("xpinstall.signatures.required", true);
pref("extensions.dataCollectionPermissions.enabled", true);
pref("browser.dictionaries.download.url", "https://addons.mozilla.org/%LOCALE%/firefox/language-tools/");
pref("app.update.checkInstallTime", true);
pref("app.update.timerMinimumDelay", 120);
pref("app.update.timerFirstInterval", 30000);
pref("app.update.log", false);
pref("app.update.log.file", false);
pref("app.update.backgroundMaxErrors", 10);
pref("app.update.download.maxAttempts", 2);
pref("app.update.elevate.maxAttempts", 2);
//@line 134 "$SRCDIR/browser/app/profile/firefox.js"
pref("app.update.notifyDuringDownload", false);
//@line 148 "$SRCDIR/browser/app/profile/firefox.js"
pref("app.update.staging.enabled", true);
//@line 164 "$SRCDIR/browser/app/profile/firefox.js"
  pref("app.update.service.enabled", true);
//@line 166 "$SRCDIR/browser/app/profile/firefox.js"
//@line 168 "$SRCDIR/browser/app/profile/firefox.js"
  pref("app.update.BITS.enabled", true);
//@line 172 "$SRCDIR/browser/app/profile/firefox.js"
pref("app.update.langpack.enabled", true);
//@line 176 "$SRCDIR/browser/app/profile/firefox.js"
  pref("app.update.background.loglevel", "error");
  pref("app.update.background.timeoutSec", 600);
  pref("app.update.background.interval", 25200);
  pref("app.update.background.messaging.targeting.snapshot.intervalSec", 3600);
  pref("app.update.background.allowUpdatesForUnelevatedInstallations", false);
//@line 197 "$SRCDIR/browser/app/profile/firefox.js"
//@line 206 "$SRCDIR/browser/app/profile/firefox.js"
//@line 208 "$SRCDIR/browser/app/profile/firefox.js"
  pref("toolkit.backgroundtasks.defaultTimeoutSec", 600);
//@line 213 "$SRCDIR/browser/app/profile/firefox.js"
    pref("toolkit.backgroundtasks.tests.browserPrefsInherited", 15);
    pref("toolkit.backgroundtasks.tests.browserPrefsOverriden", 16);
//@line 219 "$SRCDIR/browser/app/profile/firefox.js"
pref("extensions.update.enabled", true);
pref("extensions.update.url", "https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
pref("extensions.update.background.url", "https://versioncheck-bg.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
pref("extensions.update.interval", 86400);  // Check for updates to Extensions and
pref("lightweightThemes.getMoreURL", "https://addons.mozilla.org/%LOCALE%/firefox/themes");
//@line 235 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.eme.ui.enabled", true);
//@line 239 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.uitour.enabled", true);
pref("browser.uitour.loglevel", "Error");
pref("browser.uitour.url", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/tour/");
pref("browser.uitour.surveyDuration", 7200);
pref("keyword.enabled", true);
pref("browser.fixup.domainwhitelist.localhost", true);
pref("browser.fixup.domainsuffixwhitelist.test", true);
pref("browser.fixup.domainsuffixwhitelist.example", true);
pref("browser.fixup.domainsuffixwhitelist.invalid", true);
pref("browser.fixup.domainsuffixwhitelist.localhost", true);
pref("browser.fixup.domainsuffixwhitelist.internal", true);
pref("browser.fixup.domainsuffixwhitelist.local", true);
pref("browser.fixup.dns_first_for_single_words", false);
//@line 270 "$SRCDIR/browser/app/profile/firefox.js"
  pref("general.autoScroll", true);
//@line 272 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.uidensity", 0);
pref("browser.touchmode.auto", true);
pref("browser.compactmode.show", false);
pref("browser.shell.checkDefaultBrowser", true);
pref("browser.shell.shortcutFavicons",true);
pref("browser.shell.mostRecentDateSetAsDefault", "");
pref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);
pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", false);
pref("browser.shell.defaultBrowserCheckCount", 0);
//@line 290 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.shell.setDefaultBrowserUserChoice", true);
pref("browser.shell.setDefaultBrowserUserChoice.regRename", true);
pref("browser.shell.setDefaultPDFHandler", true);
pref("browser.shell.setDefaultPDFHandler.onlyReplaceBrowsers", true);
pref("browser.shell.checkDefaultPDF", true);
pref("browser.shell.checkDefaultPDF.silencedByUser", false);
pref("browser.shell.setDefaultGuidanceNotifications", true);
//@line 314 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.startup.page",                1);
pref("browser.startup.homepage",            "about:home");
pref("browser.startup.homepage.abouthome_cache.enabled", true);
pref("browser.startup.homepage.abouthome_cache.loglevel", "Warn");
pref("browser.startup.firstrunSkipsHomepage", true);
pref("browser.startup.couldRestoreSession.count", 0);
//@line 333 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.startup.blankWindow", true);
//@line 337 "$SRCDIR/browser/app/profile/firefox.js"
//@line 341 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.startup.preXulSkeletonUI", true);
pref("browser.startup.windowsLaunchOnLogin.enabled", true);
pref("browser.startup.windowsLaunchOnLogin.disableLaunchOnLoginPrompt", false);
//@line 348 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.startup.upgradeDialog.enabled", false);
pref("browser.chrome.site_icons", true);
pref("browser.warnOnQuit", true);
//@line 358 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.warnOnQuitShortcut", false);
//@line 362 "$SRCDIR/browser/app/profile/firefox.js"
//@line 367 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.fullscreen.autohide", true);
//@line 369 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.overlink-delay", 80);
pref("browser.taskbarTabs.enabled", false);
//@line 377 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.theme.native-theme", false);
//@line 379 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.urlbar.ctrlCanonizesURLs", true);
pref("browser.urlbar.accessibility.tabToSearch.announceResults", true);
pref("browser.urlbar.autoFill", true);
pref("browser.urlbar.autoFill.adaptiveHistory.enabled", false);
pref("browser.urlbar.autoFill.adaptiveHistory.minCharsThreshold", 0);
pref("browser.urlbar.intentThreshold", "0.5");
pref("browser.urlbar.nerThreshold", "0.5");
pref("browser.urlbar.speculativeConnect.enabled", true);
pref("browser.urlbar.filter.javascript", true);
pref("browser.urlbar.focusContentDocumentOnEsc", true);
pref("browser.urlbar.loglevel", "Error");
pref("browser.urlbar.maxRichResults", 10);
pref("browser.urlbar.maxHistoricalSearchSuggestions", 2);
pref("browser.urlbar.suggest.bookmark",             true);
pref("browser.urlbar.suggest.clipboard",            true);
pref("browser.urlbar.suggest.history",              true);
pref("browser.urlbar.suggest.openpage",             true);
pref("browser.urlbar.suggest.remotetab",            true);
pref("browser.urlbar.suggest.searches",             true);
pref("browser.urlbar.suggest.topsites",             true);
pref("browser.urlbar.suggest.engines",              true);
pref("browser.urlbar.suggest.calculator",           true);
pref("browser.urlbar.suggest.recentsearches",       true);
pref("browser.urlbar.suggest.quickactions",         true);
pref("browser.urlbar.deduplication.enabled", false);
pref("browser.urlbar.deduplication.thresholdDays", 0);
pref("browser.urlbar.scotchBonnet.enableOverride", true);
pref("browser.urlbar.perplexity.hasBeenInSearchMode", false);
pref("browser.urlbar.unifiedSearchButton.always", false);
pref("browser.urlbar.trending.featureGate", true);
pref("browser.urlbar.trending.requireSearchMode", false);
pref("browser.urlbar.recentsearches.featureGate", true);
pref("browser.urlbar.richSuggestions.featureGate", true);
pref("browser.search.param.search_rich_suggestions", "fen");
pref("browser.urlbar.weather.featureGate", false);
pref("browser.urlbar.clipboard.featureGate", false);
pref("browser.urlbar.weather.minKeywordLength", 0);
pref("browser.urlbar.weather.uiTreatment", 0);
pref("browser.urlbar.suggest.weather", true);
pref("browser.urlbar.suggest.trending", true);
pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false, sticky);
pref("browser.urlbar.suggest.quicksuggest.sponsored", false, sticky);
pref("browser.urlbar.quicksuggest.dataCollection.enabled", false, sticky);
pref("browser.urlbar.quicksuggest.contextualOptIn", false);
pref("browser.urlbar.quicksuggest.contextualOptIn.dismissedCount", 0);
pref("browser.urlbar.quicksuggest.contextualOptIn.firstReshowAfterPeriodDays", 7);
pref("browser.urlbar.quicksuggest.contextualOptIn.secondReshowAfterPeriodDays", 14);
pref("browser.urlbar.quicksuggest.contextualOptIn.thirdReshowAfterPeriodDays", 60);
pref("browser.urlbar.quicksuggest.contextualOptIn.impressionCount", 0);
pref("browser.urlbar.quicksuggest.contextualOptIn.impressionLimit", 20);
pref("browser.urlbar.quicksuggest.contextualOptIn.impressionDaysLimit", 5);
pref("browser.urlbar.quicksuggest.enabled", false);
pref("browser.urlbar.quicksuggest.rankingMode", "default");
pref("browser.urlbar.quicksuggest.rustEnabled", true);
pref("browser.urlbar.quicksuggest.sponsoredIndex", 0);
pref("browser.urlbar.quicksuggest.nonSponsoredIndex", -1);
pref("browser.urlbar.quicksuggest.impressionCaps.nonSponsoredEnabled", false);
pref("browser.urlbar.quicksuggest.impressionCaps.sponsoredEnabled", false);
pref("browser.urlbar.quicksuggest.ampTopPickCharThreshold", 5);
pref("browser.urlbar.quicksuggest.ampMatchingStrategy", 0);
pref("browser.urlbar.quicksuggest.dynamicSuggestionTypes", "");
pref("browser.urlbar.quicksuggest.mlEnabled", false);
pref("browser.urlbar.quicksuggest.mlInitDelaySeconds", 0);
pref("browser.urlbar.quicksuggest.settingsUi", 0);
pref("browser.urlbar.unitConversion.enabled", true);
pref("browser.urlbar.showSearchSuggestionsFirst", true);
pref("browser.urlbar.maxCharsForSearchSuggestions", 100);
pref("browser.urlbar.trimURLs", true);
pref("browser.urlbar.trimHttps", false);
pref("browser.urlbar.untrimOnUserInteraction.featureGate", false);
pref("browser.urlbar.decodeURLsOnCopy", false);
pref("browser.urlbar.switchTabs.adoptIntoActiveWindow", false);
pref("browser.urlbar.switchTabs.searchAllContainers", true);
pref("browser.urlbar.openintab", false);
pref("browser.urlbar.resultMenu.keyboardAccessible", true);
pref("browser.urlbar.richSuggestions.tail", true);
pref("browser.urlbar.sponsoredTopSites", false);
pref("browser.urlbar.showSearchTerms.featureGate", false);
pref("browser.urlbar.showSearchTerms.enabled", true);
pref("browser.urlbar.shortcuts.bookmarks", true);
pref("browser.urlbar.shortcuts.tabs", true);
pref("browser.urlbar.shortcuts.history", true);
pref("browser.urlbar.extension.timeout", 400);
pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
pref("browser.urlbar.keepPanelOpenDuringImeComposition", false);
pref("browser.urlbar.groupLabels.enabled", true);
pref("browser.urlbar.merino.endpointURL", "https://merino.services.mozilla.com/api/v1/suggest");
pref("browser.urlbar.merino.timeoutMs", 200);
pref("browser.urlbar.merino.providers", "");
pref("browser.urlbar.merino.clientVariants", "");
pref("browser.urlbar.contextualSearch.enabled", true);
pref("browser.urlbar.addons.featureGate", false);
pref("places.semanticHistory.featureGate", false);
pref("browser.urlbar.suggest.semanticHistory.minLength", 5);
pref("browser.urlbar.suggest.addons", true);
pref("browser.urlbar.mdn.featureGate", false);
pref("browser.urlbar.suggest.mdn", true);
pref("browser.urlbar.yelp.featureGate", false);
pref("browser.urlbar.yelp.minKeywordLength", 4);
pref("browser.urlbar.yelp.priority", false);
pref("browser.urlbar.yelp.mlEnabled", false);
pref("browser.urlbar.yelp.serviceResultDistinction", false);
pref("browser.urlbar.suggest.yelp", true);
pref("browser.urlbar.fakespot.featureGate", false);
pref("browser.urlbar.fakespot.minKeywordLength", 4);
pref("browser.urlbar.fakespot.suggestedIndex", -1);
pref("browser.urlbar.suggest.fakespot", true);
pref("browser.urlbar.addons.minKeywordLength", 0);
pref("browser.urlbar.amp.featureGate", false);
pref("browser.urlbar.suggest.amp", true);
pref("browser.urlbar.wikipedia.featureGate", false);
pref("browser.urlbar.suggest.wikipedia", true);
pref("browser.urlbar.update2.engineAliasRefresh", true);
pref("browser.altClickSave", false);
pref("browser.download.loglevel", "Error");
pref("browser.download.saveLinkAsFilenameTimeout", 4000);
pref("browser.download.useDownloadDir", true);
pref("browser.download.folderList", 1);
pref("browser.download.manager.addToRecentDocs", true);
pref("browser.download.manager.resumeOnWakeDelay", 10000);
pref("browser.download.panel.shown", false);
pref("browser.download.openInSystemViewerContextMenuItem", true);
pref("browser.download.alwaysOpenInSystemViewerContextMenuItem", true);
pref("browser.download.viewableInternally.enabledTypes", "xml,svg,webp,avif,jxl");
pref("browser.download.autohideButton", true);
pref("browser.download.alwaysOpenPanel", true);
pref("browser.download.clearHistoryOnDelete", 0);
//@line 798 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.helperApps.deleteTempFileOnExit", true);
//@line 800 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.helperApps.showOpenOptionForPdfJS", true);
pref("browser.helperApps.showOpenOptionForViewableInternally", true);
pref("browser.search.searchEnginesURL",      "https://addons.mozilla.org/%LOCALE%/firefox/search-engines/");
pref("browser.search.openintab", false);
pref("browser.search.context.loadInBackground", false);
pref("browser.search.separatePrivateDefault.ui.enabled", false);
pref("browser.search.separatePrivateDefault.ui.banner.max", 0);
pref("browser.search.serpEventTelemetryCategorization.enabled", true);
pref("browser.search.serpMetricsRecordedCounter", 0);
pref("browser.search.widget.removeAfterDaysUnused", 120);
pref("browser.search.totalSearches", 0);
pref("browser.spin_cursor_while_busy", false);
pref("browser.contextual-password-manager.enabled", false);
pref("browser.privatebrowsing.vpnpromourl", "https://vpn.mozilla.org/?utm_source=firefox-browser&utm_medium=firefox-%CHANNEL%-browser&utm_campaign=private-browsing-vpn-link");
pref("browser.dataFeatureRecommendations.enabled", false);
pref("browser.theme.dark-private-windows", true);
pref("browser.privateWindowSeparation.enabled", true);
pref("browser.privacySegmentation.preferences.show", false);
pref("browser.sessionhistory.max_entries", 50);
pref("permissions.manager.defaultsUrl", "resource://app/defaults/permissions");
pref("permissions.default.camera", 0);
pref("permissions.default.microphone", 0);
pref("permissions.default.geo", 0);
pref("permissions.default.xr", 0);
pref("permissions.default.desktop-notification", 0);
pref("permissions.default.shortcuts", 0);
pref("permissions.desktop-notification.postPrompt.enabled", true);
pref("permissions.desktop-notification.notNow.enabled", false);
pref("permissions.fullscreen.allowed", false);
//@line 883 "$SRCDIR/browser/app/profile/firefox.js"
  pref("permissions.media.show_always_ask.enabled", false);
//@line 895 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.link.force_default_user_context_id_for_external_opens", false);
pref("browser.link.open_newwindow", 3);
pref("browser.link.open_newwindow.override.external", -1);
pref("browser.link.open_newwindow.restriction", 2);
//@line 922 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.link.open_newwindow.disabled_in_fullscreen", false);
//@line 924 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.closeTabByDblclick", false);
pref("browser.tabs.closeWindowWithLastTab", true);
pref("browser.tabs.allowTabDetach", true);
pref("browser.tabs.insertRelatedAfterCurrent", true);
pref("browser.tabs.insertAfterCurrent", false);
pref("browser.tabs.insertAfterCurrentExceptPinned", false);
pref("browser.tabs.warnOnClose", false);
pref("browser.tabs.warnOnCloseOtherTabs", true);
pref("browser.tabs.warnOnOpen", true);
pref("browser.tabs.maxOpenBeforeWarn", 15);
pref("browser.tabs.loadDivertedInBackground", false);
pref("browser.tabs.loadBookmarksInBackground", false);
pref("browser.tabs.loadBookmarksInTabs", false);
pref("browser.tabs.tabClipWidth", 140);
pref("browser.tabs.tabMinWidth", 76);
pref("browser.tabs.secondaryTextUnsupportedLocales", "ar,bn,bo,ckb,fa,gu,he,hi,ja,km,kn,ko,lo,mr,my,ne,pa,si,ta,te,th,ur,zh");
pref("browser.tabs.selectOwnerOnClose", true);
pref("browser.tabs.delayHidingAudioPlayingIconMS", 3000);
pref("browser.tabs.remote.separatePrivilegedContentProcess", true);
//@line 978 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.remote.separatePrivilegedMozillaWebContentProcess", true);
//@line 987 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.tooltipsShowPidAndActiveness", false);
//@line 989 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.hoverPreview.enabled", true);
pref("browser.tabs.hoverPreview.showThumbnails", true);
pref("browser.tabs.groups.enabled", true);
//@line 998 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.groups.smart.enabled", false);
//@line 1000 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.groups.smart.suggestOtherTabsMethod", "NEAREST_NEIGHBOR");
pref("browser.tabs.groups.smart.topicModelRevision", "latest");
pref("browser.tabs.groups.smart.embeddingModelRevision", "latest");
pref("browser.tabs.groups.smart.nearestNeighborThresholdInt", 275);
pref("browser.tabs.groups.smart.optin", false);
pref("browser.tabs.dragDrop.createGroup.delayMS", 240);
pref("browser.tabs.dragDrop.expandGroup.delayMS", 350);
pref("browser.tabs.dragDrop.selectTab.delayMS", 350);
pref("browser.tabs.dragDrop.moveOverThresholdPercent", 80);
pref("browser.tabs.firefox-view.logLevel", "Warn");
pref("browser.tabs.groups.smart.userEnabled", true);
pref("security.allow_eval_with_system_principal", false);
pref("security.allow_eval_in_parent_process", false);
pref("security.allow_parent_unrestricted_js_loads", false);
//@line 1027 "$SRCDIR/browser/app/profile/firefox.js"
    pref("browser.tabs.unloadOnLowMemory", true);
//@line 1031 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.min_inactive_duration_before_unload", 600000);
//@line 1040 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.searchclipboardfor.middleclick", false);
//@line 1042 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1076 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.ctrlTab.sortByRecentlyUsed", false);
pref("browser.bookmarks.autoExportHTML",          false);
pref("browser.bookmarks.max_backups",             15);
pref("browser.bookmarks.openInTabClosesMenu", true);
pref("browser.bookmarks.defaultLocation", "toolbar");
pref("browser.tabs.allow_transparent_browser", false);
pref("dom.disable_open_during_load",              true);
pref("dom.disable_window_move_resize",            false);
pref("dom.disable_window_flip",                   true);
pref("privacy.popups.showBrowserMessage",   true);
pref("privacy.clearOnShutdown.history",     true);
pref("privacy.clearOnShutdown.formdata",    true);
pref("privacy.clearOnShutdown.downloads",   true);
pref("privacy.clearOnShutdown.cookies",     true);
pref("privacy.clearOnShutdown.cache",       true);
pref("privacy.clearOnShutdown.sessions",    true);
pref("privacy.clearOnShutdown.offlineApps", false);
pref("privacy.clearOnShutdown.siteSettings", false);
pref("privacy.clearOnShutdown.openWindows", false);
pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true);
pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);
pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
pref("privacy.clearOnShutdown_v2.cache", true);
pref("privacy.clearOnShutdown_v2.siteSettings", false);
pref("privacy.clearOnShutdown_v2.formdata", false);
pref("privacy.cpd.history",                 true);
pref("privacy.cpd.formdata",                true);
pref("privacy.cpd.passwords",               false);
pref("privacy.cpd.downloads",               true);
pref("privacy.cpd.cookies",                 true);
pref("privacy.cpd.cache",                   true);
pref("privacy.cpd.sessions",                true);
pref("privacy.cpd.offlineApps",             false);
pref("privacy.cpd.siteSettings",            false);
pref("privacy.cpd.openWindows",             false);
pref("privacy.clearHistory.historyFormDataAndDownloads", true);
pref("privacy.clearHistory.browsingHistoryAndDownloads", true);
pref("privacy.clearHistory.cookiesAndStorage", true);
pref("privacy.clearHistory.cache", true);
pref("privacy.clearHistory.siteSettings", false);
pref("privacy.clearHistory.formdata", false);
pref("privacy.clearSiteData.historyFormDataAndDownloads", false);
pref("privacy.clearSiteData.browsingHistoryAndDownloads", false);
pref("privacy.clearSiteData.cookiesAndStorage", true);
pref("privacy.clearSiteData.cache", true);
pref("privacy.clearSiteData.siteSettings", false);
pref("privacy.clearSiteData.formdata", false);
pref("privacy.history.custom",              false);
pref("privacy.sanitize.timeSpan", 1);
pref("privacy.sanitize.useOldClearHistoryDialog", false);
pref("privacy.sanitize.clearOnShutdown.hasMigratedToNewPrefs2", false);
pref("privacy.sanitize.clearOnShutdown.hasMigratedToNewPrefs3", false);
pref("privacy.sanitize.cpd.hasMigratedToNewPrefs2", false);
pref("privacy.sanitize.cpd.hasMigratedToNewPrefs3", false);
pref("privacy.panicButton.enabled",         true);
pref("privacy.temporary_permission_expire_time_ms",  3600000);
pref("privacy.authPromptSpoofingProtection",         true);
pref("privacy.globalprivacycontrol.functionality.enabled",  true);
pref("privacy.globalprivacycontrol.pbmode.enabled", true);
pref("network.proxy.share_proxy_settings",  false); // use the same proxy settings for all protocols
pref("browser.gesture.swipe.left", "Browser:BackOrBackDuplicate");
pref("browser.gesture.swipe.right", "Browser:ForwardOrForwardDuplicate");
pref("browser.gesture.swipe.up", "cmd_scrollTop");
pref("browser.gesture.swipe.down", "cmd_scrollBottom");
pref("browser.gesture.pinch.latched", false);
pref("browser.gesture.pinch.threshold", 25);
//@line 1208 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.gesture.pinch.out", "cmd_fullZoomEnlarge");
  pref("browser.gesture.pinch.in", "cmd_fullZoomReduce");
  pref("browser.gesture.pinch.out.shift", "cmd_fullZoomReset");
  pref("browser.gesture.pinch.in.shift", "cmd_fullZoomReset");
//@line 1220 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.gesture.twist.latched", false);
pref("browser.gesture.twist.threshold", 0);
pref("browser.gesture.twist.right", "cmd_gestureRotateRight");
pref("browser.gesture.twist.left", "cmd_gestureRotateLeft");
pref("browser.gesture.twist.end", "cmd_gestureRotateEnd");
//@line 1226 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.gesture.tap", "cmd_fullZoomReset");
//@line 1230 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.history_swipe_animation.disabled", false);
//@line 1247 "$SRCDIR/browser/app/profile/firefox.js"
  pref("mousewheel.with_shift.action", 4);
  pref("mousewheel.with_alt.action", 2);
//@line 1256 "$SRCDIR/browser/app/profile/firefox.js"
pref("mousewheel.with_meta.action", 1);
pref("browser.xul.error_pages.expert_bad_cert", false);
pref("browser.xul.error_pages.show_safe_browsing_details_on_load", false);
pref("network.captive-portal-service.enabled", true);
pref("network.manage-offline-status", true);
pref("network.protocol-handler.external.mailto", true); // for mail
pref("network.protocol-handler.warn-external.mailto", false);
pref("network.protocol-handler.expose-all", true);
pref("network.protocol-handler.expose.mailto", false);
pref("network.protocol-handler.expose.news", false);
pref("network.protocol-handler.expose.snews", false);
pref("network.protocol-handler.expose.nntp", false);
pref("accessibility.typeaheadfind", false);
pref("accessibility.typeaheadfind.timeout", 5000);
pref("accessibility.typeaheadfind.linksonly", false);
pref("accessibility.typeaheadfind.flashBar", 1);
pref("browser.preferences.experimental", true);
pref("browser.preferences.experimental.hidden", false);
pref("browser.preferences.moreFromMozilla", true);
pref("browser.preferences.defaultPerformanceSettings.enabled", true);
pref("browser.proton.toolbar.version", 0);
pref("browser.backspace_action", 2);
pref("intl.regional_prefs.use_os_locales", false);
pref("browser.send_pings", false);
pref("browser.geolocation.warning.infoURL", "https://www.mozilla.org/%LOCALE%/firefox/geolocation/");
pref("browser.xr.warning.infoURL", "https://www.mozilla.org/%LOCALE%/firefox/xr/");
pref("browser.sessionstore.resume_from_crash", true);
pref("browser.sessionstore.resume_session_once", false);
pref("browser.sessionstore.resuming_after_os_restart", false);
pref("browser.sessionstore.closedTabsFromAllWindows", true);
pref("browser.sessionstore.closedTabsFromClosedWindows", true);
pref("browser.sessionstore.interval.idle", 3600000); // 1h
pref("browser.sessionstore.idleDelay", 180); // 3 minutes
pref("browser.sessionstore.log.appender.console", "Fatal");
pref("browser.sessionstore.log.appender.dump", "Error");
pref("browser.sessionstore.log.appender.file.level", "Trace");
pref("browser.sessionstore.log.appender.file.logOnError", true);
pref("browser.sessionstore.loglevel", "Warn");
//@line 1344 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.sessionstore.loglevel", "Debug");
  pref("browser.sessionstore.log.appender.file.logOnSuccess", true);
//@line 1349 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.sessionstore.log.appender.file.maxErrorAge", 864000); // 10 days
pref("browser.sessionstore.privacy_level", 0);
pref("browser.sessionstore.max_tabs_undo", 25);
pref("browser.sessionstore.max_windows_undo", 5);
pref("browser.sessionstore.max_resumed_crashes", 1);
pref("browser.sessionstore.max_serialize_back", 10);
pref("browser.sessionstore.max_serialize_forward", -1);
pref("browser.sessionstore.restore_on_demand", true);
pref("browser.sessionstore.restore_hidden_tabs", false);
pref("browser.sessionstore.restore_pinned_tabs_on_demand", false);
pref("browser.sessionstore.upgradeBackup.latestBuildID", "");
pref("browser.sessionstore.upgradeBackup.maxUpgradeBackups", 3);
pref("browser.sessionstore.debug", false);
pref("browser.sessionstore.cleanup.forget_closed_after", 1209600000);
pref("browser.sessionstore.persist_closed_tabs_between_sessions", true);
pref("browser.quitShortcut.disabled", false);
pref("accessibility.blockautorefresh", false);
pref("places.history.enabled", true);
pref("places.loglevel", "Error");
pref("places.search.matchDiacritics", false);
pref("places.frecency.numVisits", 10);
pref("places.frecency.firstBucketCutoff", 4);
pref("places.frecency.secondBucketCutoff", 14);
pref("places.frecency.thirdBucketCutoff", 31);
pref("places.frecency.fourthBucketCutoff", 90);
pref("places.frecency.firstBucketWeight", 100);
pref("places.frecency.secondBucketWeight", 70);
pref("places.frecency.thirdBucketWeight", 50);
pref("places.frecency.fourthBucketWeight", 30);
pref("places.frecency.defaultBucketWeight", 10);
pref("places.frecency.embedVisitBonus", 0);
pref("places.frecency.framedLinkVisitBonus", 0);
pref("places.frecency.linkVisitBonus", 100);
pref("places.frecency.typedVisitBonus", 2000);
pref("places.frecency.bookmarkVisitBonus", 75);
pref("places.frecency.redirectSourceVisitBonus", 25);
pref("places.frecency.downloadVisitBonus", 0);
pref("places.frecency.permRedirectVisitBonus", 50);
pref("places.frecency.tempRedirectVisitBonus", 40);
pref("places.frecency.reloadVisitBonus", 0);
pref("places.frecency.defaultVisitBonus", 0);
pref("places.frecency.unvisitedBookmarkBonus", 140);
pref("places.frecency.unvisitedTypedBonus", 200);
pref("places.frecency.origins.alternative.featureGate", false);
pref("browser.places.speculativeConnect.enabled", true);
pref("browser.zoom.full", true);
pref("browser.zoom.updateBackgroundTabs", true);
pref("breakpad.reportURL", "https://crash-stats.mozilla.org/report/index/");
pref("toolkit.datacollection.infoURL",
     "https://www.mozilla.org/legal/privacy/firefox.html");
pref("app.support.baseURL", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/");
pref("app.feedback.baseURL", "https://ideas.mozilla.org/");
pref("security.certerrors.permanentOverride", true);
pref("security.certerrors.mitm.priming.enabled", true);
pref("security.certerrors.mitm.priming.endpoint", "https://mitmdetection.services.mozilla.com/");
pref("security.certerrors.mitm.auto_enable_enterprise_roots", true);
pref("browser.bookmarks.editDialog.showForNewBookmarks", true);
pref("browser.bookmarks.editDialog.firstEditField", "namePicker");
pref("browser.bookmarks.editDialog.maxRecentFolders", 7);
//@line 1489 "$SRCDIR/browser/app/profile/firefox.js"
  pref("security.sandbox.content.level", 8);
  pref("security.sandbox.logging.enabled", false);
//@line 1499 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1528 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1558 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1562 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1564 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.taskbar.previews.enable", false);
  pref("browser.taskbar.previews.max", 20);
  pref("browser.taskbar.previews.cachetime", 5);
  pref("browser.taskbar.lists.enabled", true);
  pref("browser.taskbar.lists.frequent.enabled", true);
  pref("browser.taskbar.lists.recent.enabled", false);
  pref("browser.taskbar.lists.maxListItemCount", 7);
  pref("browser.taskbar.lists.tasks.enabled", true);
  pref("browser.taskbar.lists.refreshInSeconds", 120);
  pref("browser.startMenu.msixPinnedWhenLastChecked", false);
//@line 1576 "$SRCDIR/browser/app/profile/firefox.js"
pref("services.sync.prefs.sync.accessibility.blockautorefresh", true);
pref("services.sync.prefs.sync.accessibility.browsewithcaret", true);
pref("services.sync.prefs.sync.accessibility.typeaheadfind", true);
pref("services.sync.prefs.sync.accessibility.typeaheadfind.linksonly", true);
pref("services.sync.prefs.sync.addons.ignoreUserEnabledChanges", true);
pref("services.sync.prefs.sync.app.shield.optoutstudies.enabled", true);
pref("services.sync.prefs.sync.browser.contentblocking.category", true);
pref("services.sync.prefs.sync.browser.contentblocking.features.strict", true);
pref("services.sync.prefs.sync.browser.crashReports.unsubmittedCheck.autoSubmit2", true);
pref("services.sync.prefs.sync.browser.ctrlTab.sortByRecentlyUsed", true);
pref("services.sync.prefs.sync.browser.discovery.enabled", true);
pref("services.sync.prefs.sync.browser.download.useDownloadDir", true);
pref("services.sync.prefs.sync.browser.firefox-view.feature-tour", true);
pref("services.sync.prefs.sync.browser.formfill.enable", true);
pref("services.sync.prefs.sync.browser.link.open_newwindow", true);
pref("services.sync.prefs.sync.browser.menu.showViewImageInfo", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSearch", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSites", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.topsites", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.topSitesRows", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.topstories", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.topstories.rows", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.highlights", true);
pref("services.sync.prefs.sync-seen.browser.newtabpage.activity-stream.section.highlights", false);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeVisited", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeBookmarks", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeDownloads", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.rows", true);
pref("services.sync.prefs.sync.browser.newtabpage.enabled", true);
pref("services.sync.prefs.sync.browser.newtabpage.pinned", true);
pref("services.sync.prefs.sync.browser.pdfjs.feature-tour", true);
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);
pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", true);
pref("services.sync.prefs.sync.browser.search.update", true);
pref("services.sync.prefs.sync.browser.startup.homepage", true);
pref("services.sync.prefs.sync.browser.startup.page", true);
pref("services.sync.prefs.sync.browser.startup.upgradeDialog.enabled", true);
pref("services.sync.prefs.sync.browser.tabs.loadInBackground", true);
pref("services.sync.prefs.sync.browser.tabs.warnOnClose", true);
pref("services.sync.prefs.sync.browser.tabs.warnOnOpen", true);
pref("services.sync.prefs.sync.browser.taskbar.previews.enable", true);
pref("services.sync.prefs.sync.browser.urlbar.maxRichResults", true);
pref("services.sync.prefs.sync.browser.urlbar.showSearchSuggestionsFirst", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.bookmark", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.history", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.searches", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.topsites", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.engines", true);
pref("services.sync.prefs.sync.dom.disable_open_during_load", true);
pref("services.sync.prefs.sync.dom.disable_window_flip", true);
pref("services.sync.prefs.sync.dom.disable_window_move_resize", true);
pref("services.sync.prefs.sync.dom.event.contextmenu.enabled", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_ever_enabled", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_ever_enabled_pbm", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_pbm", true);
pref("services.sync.prefs.sync.extensions.update.enabled", true);
pref("services.sync.prefs.sync.extensions.activeThemeID", true);
pref("services.sync.prefs.sync.general.autoScroll", true);
pref("services.sync.prefs.sync-seen.general.autoScroll", false);
pref("services.sync.prefs.sync.intl.accept_languages", true);
pref("services.sync.prefs.sync.intl.regional_prefs.use_os_locales", true);
pref("services.sync.prefs.sync.layout.spellcheckDefault", true);
pref("services.sync.prefs.sync.media.autoplay.default", true);
pref("services.sync.prefs.sync.media.eme.enabled", true);
pref("services.sync.prefs.sync-seen.media.eme.enabled", false);
pref("services.sync.prefs.sync.media.videocontrols.picture-in-picture.video-toggle.enabled", true);
pref("services.sync.prefs.sync.network.cookie.cookieBehavior", true);
pref("services.sync.prefs.sync.permissions.default.image", true);
pref("services.sync.prefs.sync.pref.downloads.disable_button.edit_actions", true);
pref("services.sync.prefs.sync.pref.privacy.disable_button.cookie_exceptions", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.cache", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown_v2.cache", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.cookies", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown_v2.cookiesAndStorage", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.downloads", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown_v2.downloads", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.formdata", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown_v2.formdata", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.history", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.offlineApps", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.sessions", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.siteSettings", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown_v2.siteSettings", true);
pref("services.sync.prefs.sync.privacy.donottrackheader.enabled", true);
pref("services.sync.prefs.sync.privacy.globalprivacycontrol.enabled", true);
pref("services.sync.prefs.sync.privacy.sanitize.sanitizeOnShutdown", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.cryptomining.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.fingerprinting.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.pbmode.enabled", true);
pref("services.sync.prefs.sync.privacy.reduceTimerPrecision", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.microseconds", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.jitter", true);
pref("services.sync.prefs.sync.privacy.userContext.enabled", true);
pref("services.sync.prefs.sync.privacy.userContext.newTabContainerOnLeftClick.enabled", true);
pref("services.sync.prefs.sync.security.default_personal_cert", true);
pref("services.sync.prefs.sync.services.sync.syncedTabs.showRemoteIcons", true);
pref("services.sync.prefs.sync.signon.autofillForms", true);
pref("services.sync.prefs.sync.signon.generation.enabled", true);
pref("services.sync.prefs.sync.signon.management.page.breach-alerts.enabled", true);
pref("services.sync.prefs.sync.signon.rememberSignons", true);
pref("services.sync.prefs.sync.spellchecker.dictionary", true);
pref("services.sync.prefs.sync.ui.osk.enabled", true);
pref("services.sync.prefs.dangerously_allow_arbitrary", false);
pref("services.sync.syncedTabs.showRemoteIcons", true);
pref("services.sync.syncedTabs.syncDelayAfterTabChange", 5000);
pref("browser.menu.showCharacterEncoding", "chrome://browser/locale/browser.properties");
pref("prompts.defaultModalType", 3);
pref("browser.topsites.component.enabled", false);
pref("browser.topsites.useRemoteSetting", true);
pref("browser.topsites.contile.enabled", true);
pref("browser.topsites.contile.endpoint", "https://contile.services.mozilla.com/v1/tiles");
pref("browser.topsites.contile.sov.enabled", true);
pref("browser.partnerlink.attributionURL", "https://topsites.services.mozilla.com/cid/");
pref("browser.partnerlink.campaign.topsites", "amzn_2020_a1");
pref("browser.newtab.preload", true);
//@line 1757 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.newtabpage.activity-stream.mobileDownloadModal.enabled", false);
pref("browser.newtabpage.activity-stream.mobileDownloadModal.variant-a", false);
pref("browser.newtabpage.activity-stream.mobileDownloadModal.variant-b", false);
pref("browser.newtabpage.activity-stream.mobileDownloadModal.variant-c", false);
pref("browser.newtabpage.activity-stream.discoverystream.refinedCardsLayout.enabled", false);
pref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", true);
pref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled", true);
pref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "https://ads.mozilla.org/");
pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.enabled", false);
pref("browser.newtabpage.activity-stream.unifiedAds.ohttp.enabled", false);
pref("browser.newtabpage.activity-stream.showWeather", true);
pref("browser.newtabpage.activity-stream.weather.query", "");
pref("browser.newtabpage.activity-stream.weather.display", "simple");
pref("browser.newtabpage.activity-stream.images.smart", true);
pref("browser.newtabpage.activity-stream.weather.locationSearchEnabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.region-weather-config", "US,CA");
pref("browser.newtabpage.activity-stream.discoverystream.locale-weather-config", "en-US,en-GB,en-CA");
pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", true);
pref("browser.newtabpage.activity-stream.newtabWallpapers.customColor.enabled", true);
pref("browser.newtabpage.activity-stream.newtabWallpapers.customWallpaper.enabled", true);
pref("browser.newtabpage.activity-stream.newtabWallpapers.customWallpaper.uuid", "");
pref("browser.newtabpage.activity-stream.newtabWallpapers.customWallpaper.fileSize", 0);
pref("browser.newtabpage.activity-stream.newtabWallpapers.customWallpaper.fileSize.enabled", false);
pref("browser.newtabpage.activity-stream.newtabWallpapers.wallpaper", "");
pref("browser.newtabpage.activity-stream.newtabWallpapers.highlightEnabled", false);
pref("browser.newtabpage.activity-stream.newtabWallpapers.highlightDismissed", false);
pref("browser.newtabpage.activity-stream.newtabWallpapers.highlightSeenCounter", 0);
pref("browser.newtabpage.activity-stream.newtabWallpapers.highlightHeaderText", "");
pref("browser.newtabpage.activity-stream.newtabWallpapers.highlightContentText", "");
pref("browser.newtabpage.activity-stream.newtabWallpapers.highlightCtaText", "");
pref("browser.newtabpage.activity-stream.newNewtabExperience.colors", "#004CA4,#009E97,#7550C2,#B63B39,#C96A00,#CA9600,#CC527F");
pref("browser.newtabpage.activity-stream.newtabShortcuts.refresh", true);
//@line 1819 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "https://accounts.firefox.com/");
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", true);
pref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "{\"id\":\"message-groups\",\"enabled\":true,\"type\":\"remote-settings\",\"collection\":\"message-groups\",\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "{\"id\":\"onboarding\",\"type\":\"local\",\"localProvider\":\"OnboardingMessageProvider\",\"enabled\":true,\"exclude\":[]}");
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"remote-settings\",\"collection\":\"cfr\",\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", true);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", true);
pref("messaging-system.askForFeedback", true);
pref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", true);
pref("browser.newtabpage.activity-stream.discoverystream.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.hardcoded-basic-layout", false);
pref("browser.newtabpage.activity-stream.discoverystream.hybridLayout.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.hideCardBackground.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.fourCardLayout.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.newFooterSection.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCardRegions", "");
pref("browser.newtabpage.activity-stream.discoverystream.hideDescriptions.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.hideDescriptionsRegions", "");
pref("browser.newtabpage.activity-stream.discoverystream.compactGrid.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.compactImages.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.imageGradient.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.titleLines", 3);
pref("browser.newtabpage.activity-stream.discoverystream.descLines", 3);
pref("browser.newtabpage.activity-stream.discoverystream.readTime.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.newSponsoredLabel.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.essentialReadsHeader.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.recentSaves.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.editorsPicksHeader.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.spoc-positions", "1,5,7,11,18,20");
pref("browser.newtabpage.activity-stream.discoverystream.placements.spocs", "newtab_spocs");
pref("browser.newtabpage.activity-stream.discoverystream.placements.spocs.counts", "6");
pref("browser.newtabpage.activity-stream.discoverystream.placements.contextualSpocs", "newtab_stories_1, newtab_stories_2, newtab_stories_3, newtab_stories_4, newtab_stories_5, newtab_stories_6");
pref("browser.newtabpage.activity-stream.discoverystream.placements.contextualSpocs.counts", "1, 1, 1, 1, 1, 1");
pref("browser.newtabpage.activity-stream.discoverystream.placements.tiles", "newtab_tile_1, newtab_tile_2, newtab_tile_3");
pref("browser.newtabpage.activity-stream.discoverystream.placements.tiles.counts", "1, 1, 1");
pref("browser.newtabpage.activity-stream.discoverystream.spoc-topsites-positions", "2");
pref("browser.newtabpage.activity-stream.discoverystream.contile-topsites-positions", "0,1,2");
pref("browser.newtabpage.activity-stream.discoverystream.widget-positions", "");
pref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint", "");
pref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint-query", "");
pref("browser.newtabpage.activity-stream.discoverystream.sponsored-collections.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.spocAdTypes", "");
pref("browser.newtabpage.activity-stream.discoverystream.spocZoneIds", "");
pref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesAdTypes", "");
pref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesZoneIds", "");
pref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesPlacement.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.spocSiteId", "");
pref("browser.newtabpage.activity-stream.discoverystream.ctaButtonSponsors", "");
pref("browser.newtabpage.activity-stream.discoverystream.ctaButtonVariant", "");
pref("browser.newtabpage.activity-stream.discoverystream.spocMessageVariant", "");
pref("browser.newtabpage.activity-stream.discoverystream.reportAds.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-block", "");
//@line 1902 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.newtabpage.activity-stream.discoverystream.locale-list-config", "");
//@line 1904 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "US,DE,CA,GB,IE,CH,AT,BE,IN,FR,IT,ES");
pref("browser.newtabpage.activity-stream.discoverystream.region-bff-config", "US,DE,CA,GB,IE,CH,AT,BE,IN,FR,IT,ES");
pref("browser.newtabpage.activity-stream.discoverystream.merino-provider.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.topicSelection.region-topics-config", "");
pref("browser.newtabpage.activity-stream.discoverystream.topicSelection.onboarding.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.topicLabels.region-topic-label-config", "US, CA");
pref("browser.newtabpage.activity-stream.discoverystream.topicSelection.locale-topics-config", "en-US, en-GB, en-CA");
pref("browser.newtabpage.activity-stream.discoverystream.topicLabels.locale-topic-label-config", "en-US, en-GB, en-CA");
pref("browser.newtabpage.activity-stream.discoverystream.contextualContent.locale-content-config", "en-US,en-GB,en-CA,de");
pref("browser.newtabpage.activity-stream.discoverystream.contextualContent.region-content-config", "");
pref("browser.newtabpage.activity-stream.discoverystream.sections.locale-content-config", "en-US,en-CA");
pref("browser.newtabpage.activity-stream.discoverystream.sections.region-content-config", "");
pref("browser.newtabpage.activity-stream.discoverystream.sections.cards.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.inferred.region-config", "");
pref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.inferred.locale-config", "en-US,en-GB,en-CA");
pref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.inferred.user.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.inferred.model.override", "");
pref("browser.newtabpage.activity-stream.discoverystream.sections.interestPicker.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.sections.interestPicker.visibleSections", "");
pref("browser.newtabpage.activity-stream.discoverystream.sections.contextualAds.region-config", "");
pref("browser.newtabpage.activity-stream.discoverystream.sections.contextualAds.locale-config", "en-US,en-GB,en-CA");
pref("browser.newtabpage.activity-stream.discoverystream.merino-provider.endpoint", "merino.services.mozilla.com");
pref("browser.newtabpage.activity-stream.discoverystream.merino-provider.ohttp.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.ohttp.relayURL", "https://mozilla-ohttp.fastly-edge.com/");
pref("browser.newtabpage.activity-stream.discoverystream.ohttp.configURL", "https://prod.ohttp-gateway.prod.webservices.mozgcp.net/ohttp-configs");
pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "US,CA,DE,GB,FR,IT,ES");
pref("browser.newtabpage.activity-stream.discoverystream.region-basic-config", "");
pref("browser.newtabpage.activity-stream.discoverystream.pocket-feed-parameters", "");
pref("browser.newtabpage.activity-stream.discoverystream.merino-feed-experiment", false);
pref("browser.newtabpage.activity-stream.discoverystream.isCollectionDismissible", true);
pref("browser.newtabpage.activity-stream.discoverystream.personalization.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.personalization.modelKeys", "nb_model_arts_and_entertainment, nb_model_autos_and_vehicles, nb_model_beauty_and_fitness, nb_model_blogging_resources_and_services, nb_model_books_and_literature, nb_model_business_and_industrial, nb_model_computers_and_electronics, nb_model_finance, nb_model_food_and_drink, nb_model_games, nb_model_health, nb_model_hobbies_and_leisure, nb_model_home_and_garden, nb_model_internet_and_telecom, nb_model_jobs_and_education, nb_model_law_and_government, nb_model_online_communities, nb_model_people_and_society, nb_model_pets_and_animals, nb_model_real_estate, nb_model_reference, nb_model_science, nb_model_shopping, nb_model_sports, nb_model_travel");
pref("browser.newtabpage.activity-stream.discoverystream.recs.personalized", false);
pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", true);
pref("browser.newtabpage.activity-stream.discoverystream.onboardingExperience.dismissed", false);
pref("browser.newtabpage.activity-stream.discoverystream.onboardingExperience.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.thumbsUpDown.locale-thumbs-config", "en-US, en-GB, en-CA");
//@line 1982 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.newtabpage.activity-stream.telemetry.privatePing.enabled", false);
//@line 1984 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.newtabpage.activity-stream.telemetry.privatePing.redactNewtabPing.enabled", false);
pref("browser.newtabpage.activity-stream.telemetry.privatePing.maxSubmissionDelayMs", 5000);
pref("browser.newtabpage.activity-stream.telemetry.privatePing.inferredInterests.enabled", false);
pref("browser.newtabpage.activity-stream.telemetry.surfaceId", "");
//@line 1996 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.newtabpage.activity-stream.discoverystream.thumbsUpDown.region-thumbs-config", "US, CA");
//@line 2000 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.newtabpage.activity-stream.discoverystream.thumbsUpDown.searchTopsitesCompact", true);
pref("browser.newtabpage.activity-stream.discoverystream.publisherFavicon.enabled", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", true);
pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", true);
pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", true);
pref("browser.newtabpage.activity-stream.hideTopSitesWithSearchParam", "mfadid=adm");
pref("browser.aboutwelcome.enabled", true);
pref("browser.aboutwelcome.screens", "");
pref("messaging-system.log", "warn");
pref("messaging-system.rsexperimentloader.collection_id", "nimbus-desktop-experiments");
pref("nimbus.debug", false);
pref("nimbus.validation.enabled", true);
pref("nimbus.profilesdatastoreservice.enabled", true);
//@line 2045 "$SRCDIR/browser/app/profile/firefox.js"
pref("nimbus.profilesdatastoreservice.read.enabled", false);
//@line 2047 "$SRCDIR/browser/app/profile/firefox.js"
//@line 2055 "$SRCDIR/browser/app/profile/firefox.js"
  pref("nimbus.telemetry.targetingContextEnabled", true);
//@line 2057 "$SRCDIR/browser/app/profile/firefox.js"
pref("nimbus.qa.pref-1", "default");
pref("nimbus.qa.pref-2", "default");
pref("toolkit.startup.max_resumed_crashes", 3);
//@line 2070 "$SRCDIR/browser/app/profile/firefox.js"
  pref("toolkit.winRegisterApplicationRestart", true);
//@line 2072 "$SRCDIR/browser/app/profile/firefox.js"
pref("pdfjs.previousHandler.preferredAction", 0);
pref("pdfjs.previousHandler.alwaysAskBeforeHandling", false);
pref("pdfjs.handleOctetStream", true);
pref("sidebar.position_start", true);
pref("sidebar.revamp", false);
pref("sidebar.revamp.defaultLauncherVisible", true);
//@line 2090 "$SRCDIR/browser/app/profile/firefox.js"
pref("sidebar.revamp.round-content-area", false);
//@line 2092 "$SRCDIR/browser/app/profile/firefox.js"
pref("sidebar.animation.enabled", true);
pref("sidebar.animation.duration-ms", 200);
pref("sidebar.animation.expand-on-hover.duration-ms", 400);
pref("sidebar.main.tools", "");
pref("sidebar.verticalTabs", false);
pref("sidebar.visibility", "always-show");
pref("sidebar.backupState", "{}");
pref("sidebar.expandOnHover", true);
pref("sidebar.old-sidebar.has-used", false);
pref("sidebar.new-sidebar.has-used", false);
pref("browser.ml.chat.enabled", true);
pref("browser.ml.chat.hideLocalhost", true);
pref("browser.ml.chat.page", false);
pref("browser.ml.chat.page.footerBadge", true);
pref("browser.ml.chat.prompt.prefix", '{"l10nId":"genai-prompt-prefix-selection"}');
pref("browser.ml.chat.prompts.0", '{"id":"summarize","l10nId":"genai-prompts-summarize"}');
pref("browser.ml.chat.prompts.1", '{"id":"explain","l10nId":"genai-prompts-explain","targeting":"contentType != \'page\'"}');
pref("browser.ml.chat.prompts.3", '{"id":"quiz","l10nId":"genai-prompts-quiz","targeting":"(!provider|regExpMatch(\'gemini\') || region == \'US\') && contentType != \'page\'"}');
pref("browser.ml.chat.prompts.4", '{"id":"proofread", "l10nId":"genai-prompts-proofread","targeting":"contentType != \'page\'"}');
pref("browser.ml.chat.provider", "");
pref("browser.ml.chat.shortcuts", true);
pref("browser.ml.chat.shortcuts.custom", true);
pref("browser.ml.chat.shortcuts.longPress", 60000);
pref("browser.ml.chat.sidebar", true);
pref("browser.ml.linkPreview.allowedLanguages", "en");
pref("browser.ml.linkPreview.blockListEnabled", true);
pref("browser.ml.linkPreview.collapsed", false);
pref("browser.ml.linkPreview.enabled", false);
pref("browser.ml.linkPreview.ignoreMs", 2000);
pref("browser.ml.linkPreview.longPress", true);
pref("browser.ml.linkPreview.longPressMs", 1000);
pref("browser.ml.linkPreview.noKeyPointsRegions", "AD,AT,BE,BG,CH,CY,CZ,DE,DK,EE,ES,FI,FR,GR,HR,HU,IE,IS,IT,LI,LT,LU,LV,MT,NL,NO,PL,PT,RO,SE,SI,SK");
pref("browser.ml.linkPreview.optin", false);
pref("browser.ml.linkPreview.outputSentences", 3);
pref("browser.ml.linkPreview.recentTypingMs", 1000);
pref("browser.ml.linkPreview.shift", true);
pref("browser.ml.linkPreview.shiftAlt", false);
pref("security.mixed_content.block_active_content", true);
pref("security.insecure_connection_text.enabled", true);
pref("security.insecure_connection_text.pbmode.enabled", true);
pref("dom.debug.propagate_gesture_events_through_content", false);
pref("browser.uiCustomization.debug", false);
pref("browser.uiCustomization.state", "");
pref("identity.fxaccounts.enabled", true);
pref("identity.fxaccounts.remote.root", "https://accounts.firefox.com/");
pref("identity.fxaccounts.contextParam", "oauth_webchannel_v1");
pref("identity.fxaccounts.oauth.enabled", true);
pref("identity.fxaccounts.remote.profile.uri", "https://profile.accounts.firefox.com/v1");
pref("identity.fxaccounts.remote.oauth.uri", "https://oauth.accounts.firefox.com/v1");
pref("identity.fxaccounts.pairing.enabled", true);
pref("identity.fxaccounts.remote.pairing.uri", "wss://channelserver.services.mozilla.com");
pref("identity.sync.tokenserver.uri", "https://token.services.mozilla.com/1.0/sync/1.5");
pref("identity.fxaccounts.autoconfig.uri", "");
pref("identity.sendtabpromo.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/send-tab");
pref("identity.mobilepromo.android", "https://www.mozilla.org/firefox/android/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=");
pref("identity.mobilepromo.ios", "https://www.mozilla.org/firefox/ios/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=");
//@line 2202 "$SRCDIR/browser/app/profile/firefox.js"
  pref("identity.fxaccounts.migrateToDevEdition", false);
//@line 2204 "$SRCDIR/browser/app/profile/firefox.js"
pref("identity.fxaccounts.commands.missed.fetch_interval", 86400);
pref("identity.fxaccounts.commands.remoteTabManagement.enabled", true);
pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", true);
//@line 2226 "$SRCDIR/browser/app/profile/firefox.js"
  pref("media.gmp-manager.chromium-update-url", "https://update.googleapis.com/service/update2/crx?response=redirect&x=id%3D%GUID%%26uc&acceptformat=crx3&updaterversion=999");
  pref("media.gmp-widevinecdm.visible", true);
  pref("media.gmp-widevinecdm.enabled", true);
  pref("media.gmp-widevinecdm.chromium-guid", "oimompecagnajdejgnnjijobebaeigek");
  pref("media.gmp-widevinecdm.force-chromium-update", false);
  pref("media.gmp-widevinecdm.force-chromium-beta", false);
//@line 2246 "$SRCDIR/browser/app/profile/firefox.js"
pref("media.gmp-gmpopenh264.visible", true);
pref("media.gmp-gmpopenh264.enabled", true);
pref("media.videocontrols.picture-in-picture.enabled", true);
pref("media.videocontrols.picture-in-picture.audio-toggle.enabled", true);
pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);
pref("media.videocontrols.picture-in-picture.video-toggle.visibility-threshold", "1.0");
pref("media.videocontrols.picture-in-picture.keyboard-controls.enabled", true);
pref("media.videocontrols.picture-in-picture.urlbar-button.enabled", true);
pref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", false);
pref("browser.translation.neverForLanguages", "");
pref("browser.translations.enable", true);
pref("browser.translations.newSettingsUI.enable", false);
pref("browser.translations.select.enable", true);
pref("toolkit.telemetry.archive.enabled", true);
pref("toolkit.telemetry.shutdownPingSender.enabled", true);
pref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", true);
pref("toolkit.telemetry.newProfilePing.enabled", true);
pref("toolkit.telemetry.updatePing.enabled", true);
pref("toolkit.telemetry.bhrPing.enabled", true);
pref("media.gmp-provider.enabled", true);
pref("network.cookie.cookieBehavior", 5 /* BEHAVIOR_REJECT_TRACKER_AND_PARTITION_FOREIGN */);
pref("network.cookie.cookieBehavior.pbmode", 5 /* BEHAVIOR_REJECT_TRACKER_AND_PARTITION_FOREIGN */);
pref("privacy.trackingprotection.fingerprinting.enabled", true);
pref("privacy.trackingprotection.cryptomining.enabled", true);
pref("privacy.resistFingerprinting.skipEarlyBlankFirstPaint", true);
pref("browser.contentblocking.database.enabled", true);
pref("privacy.query_stripping.strip_on_share.enabled", true);
pref("browser.contentblocking.cryptomining.preferences.ui.enabled", true);
pref("browser.contentblocking.fingerprinting.preferences.ui.enabled", true);
pref("browser.contentblocking.reject-and-isolate-cookies.preferences.ui.enabled", true);
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior5,cookieBehaviorPBM5,cryptoTP,fp,stp,emailTP,emailTPPrivate,-consentmanagerSkip,-consentmanagerSkipPrivate,lvl2,rp,rpTop,ocsp,qps,qpsPBM,fpp,fppPrivate,btp");
pref("browser.contentblocking.report.lockwise.enabled", true);
pref("browser.contentblocking.report.monitor.enabled", false);
pref("browser.contentblocking.report.proxy.enabled", false);
pref("browser.contentblocking.report.show_mobile_app", true);
pref("browser.send_to_device_locales", "de,en-GB,en-US,es-AR,es-CL,es-ES,es-MX,fr,id,pl,pt-BR,ru,zh-TW");
pref("browser.vpn_promo.disallowed_regions", "ae,by,cn,cu,iq,ir,kp,om,ru,sd,sy,tm,tr");
pref("browser.vpn_promo.enabled", true);
pref("browser.contentblocking.report.vpn_regions", "as,at,au,bd,be,bg,br,ca,ch,cl,co,cy,cz,de,dk,ee,eg,es,fi,fr,gb,gg,gr,hr,hu,id,ie,im,in,io,it,je,ke,kr,lt,lu,lv,ma,mp,mt,mx,my,ng,nl,no,nz,pl,pr,pt,ro,sa,se,sg,si,sk,sn,th,tr,tw,ua,ug,uk,um,us,vg,vi,vn,za");
pref("browser.promo.focus.disallowed_regions", "cn");
pref("browser.promo.focus.enabled", true);
pref("browser.promo.pin.enabled", true);
pref("browser.promo.cookiebanners.enabled", false);
pref("browser.contentblocking.report.hide_vpn_banner", false);
pref("browser.contentblocking.report.vpn_sub_id", "sub_HrfCZF7VPHzZkA");
pref("browser.contentblocking.report.monitor.url", "https://monitor.firefox.com/?entrypoint=protection_report_monitor&utm_source=about-protections");
pref("browser.contentblocking.report.monitor.how_it_works.url", "https://monitor.firefox.com/about");
pref("browser.contentblocking.report.monitor.sign_in_url", "https://monitor.firefox.com/oauth/init?entrypoint=protection_report_monitor&utm_source=about-protections&email=");
pref("browser.contentblocking.report.monitor.preferences_url", "https://monitor.firefox.com/user/preferences");
pref("browser.contentblocking.report.monitor.home_page_url", "https://monitor.firefox.com/user/dashboard");
pref("browser.contentblocking.report.manage_devices.url", "https://accounts.firefox.com/settings/clients");
pref("browser.contentblocking.report.endpoint_url", "https://monitor.firefox.com/user/breach-stats?includeResolved=true");
pref("browser.contentblocking.report.proxy_extension.url", "https://fpn.firefox.com/browser?utm_source=firefox-desktop&utm_medium=referral&utm_campaign=about-protections&utm_content=about-protections");
pref("browser.contentblocking.report.mobile-ios.url", "https://apps.apple.com/app/firefox-private-safe-browser/id989804926");
pref("browser.contentblocking.report.mobile-android.url", "https://play.google.com/store/apps/details?id=org.mozilla.firefox&referrer=utm_source%3Dprotection_report%26utm_content%3Dmobile_promotion");
pref("browser.contentblocking.report.vpn.url", "https://vpn.mozilla.org/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=about-protections-card");
pref("browser.contentblocking.report.vpn-promo.url", "https://vpn.mozilla.org/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=about-protections-top-promo");
pref("browser.contentblocking.report.vpn-android.url", "https://play.google.com/store/apps/details?id=org.mozilla.firefox.vpn&referrer=utm_source%3Dfirefox-browser%26utm_medium%3Dfirefox-browser%26utm_campaign%3Dabout-protections-mobile-vpn%26anid%3D--");
pref("browser.contentblocking.report.vpn-ios.url", "https://apps.apple.com/us/app/firefox-private-network-vpn/id1489407738");
pref("browser.contentblocking.report.lockwise.how_it_works.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/password-manager-report");
pref("browser.contentblocking.report.social.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/social-media-tracking-report");
pref("browser.contentblocking.report.cookie.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cross-site-tracking-report");
pref("browser.contentblocking.report.tracker.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/tracking-content-report");
pref("browser.contentblocking.report.fingerprinter.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/fingerprinters-report");
pref("browser.contentblocking.report.cryptominer.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cryptominers-report");
pref("browser.contentblocking.cfr-milestone.enabled", true);
pref("browser.contentblocking.cfr-milestone.milestone-achieved", 0);
pref("browser.contentblocking.cfr-milestone.milestones", "[1000, 5000, 10000, 25000, 50000, 100000, 250000, 314159, 500000, 750000, 1000000, 1250000, 1500000, 1750000, 2000000, 2250000, 2500000, 8675309]");
pref("browser.protections_panel.infoMessage.seen", false);
pref("privacy.usercontext.about_newtab_segregation.enabled", true);
//@line 2477 "$SRCDIR/browser/app/profile/firefox.js"
  pref("privacy.userContext.enabled", false);
  pref("privacy.userContext.ui.enabled", false);
//@line 2480 "$SRCDIR/browser/app/profile/firefox.js"
pref("privacy.userContext.extension", "");
pref("privacy.userContext.newTabContainerOnLeftClick.enabled", false);
pref("privacy.webrtc.allowSilencingNotifications", true);
pref("privacy.webrtc.hideGlobalIndicator", false);
pref("privacy.webrtc.globalMuteToggles", false);
pref("privacy.webrtc.sharedTabWarning", false);
pref("privacy.webrtc.deviceGracePeriodTimeoutMs", 3600000);
pref("privacy.webrtc.showIndicatorsOnMacos14AndAbove", true);
pref("extensions.webcompat.smartblockEmbeds.enabled", true);
pref("privacy.exposeContentTitleInWindow", true);
pref("privacy.exposeContentTitleInWindow.pbm", true);
pref("media.peerconnection.mtransport_process", true);
pref("browser.tabs.context.close-duplicate.enabled", true);
pref("browser.tabs.remote.warmup.enabled", true);
pref("browser.tabs.remote.tabCacheSize", 0);
pref("browser.tabs.remote.warmup.maxTabs", 3);
pref("browser.tabs.remote.warmup.unloadDelayMs", 2000);
pref("browser.tabs.crashReporting.sendReport", true);
pref("browser.tabs.crashReporting.includeURL", false);
pref("browser.tabs.unloadTabInContextMenu", true);
pref("browser.tabs.fadeOutExplicitlyUnloadedTabs", true);
pref("browser.tabs.fadeOutUnloadedTabs", false);
pref("extensions.experiments.enabled", false);
//@line 2557 "$SRCDIR/browser/app/profile/firefox.js"
  pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", true);
//@line 2559 "$SRCDIR/browser/app/profile/firefox.js"
pref("reader.parse-node-limit", 0);
pref("reader.errors.includeURLs", true);
pref("view_source.tab", true);
pref("toolkit.pageThumbs.minWidth", 280);
pref("toolkit.pageThumbs.minHeight", 190);
pref("browser.esedbreader.loglevel", "Error");
pref("browser.laterrun.enabled", false);
//@line 2582 "$SRCDIR/browser/app/profile/firefox.js"
pref("dom.ipc.processPrelaunch.enabled", true);
//@line 2584 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.migrate.bookmarks-file.enabled", true);
pref("browser.migrate.brave.enabled", true);
pref("browser.migrate.canary.enabled", true);
pref("browser.migrate.chrome.enabled", true);
pref("browser.migrate.chrome.history.limit", 2000);
pref("browser.migrate.chrome.payment_methods.enabled", true);
pref("browser.migrate.chrome.extensions.enabled", true);
pref("browser.migrate.chrome.get_permissions.enabled", true);
pref("browser.migrate.chrome-beta.enabled", true);
pref("browser.migrate.chrome-dev.enabled", true);
pref("browser.migrate.chromium.enabled", true);
pref("browser.migrate.chromium-360se.enabled", true);
pref("browser.migrate.chromium-edge.enabled", true);
pref("browser.migrate.chromium-edge-beta.enabled", true);
pref("browser.migrate.edge.enabled", true);
pref("browser.migrate.firefox.enabled", true);
pref("browser.migrate.ie.enabled", true);
pref("browser.migrate.opera.enabled", true);
pref("browser.migrate.opera-gx.enabled", true);
pref("browser.migrate.safari.enabled", true);
pref("browser.migrate.vivaldi.enabled", true);
pref("browser.migrate.content-modal.import-all.enabled", true);
pref("browser.migrate.content-modal.about-welcome-behavior", "embedded");
pref("browser.migrate.history.maxAgeInDays", 180);
pref("browser.migrate.interactions.bookmarks", false);
pref("browser.migrate.interactions.csvpasswords", false);
pref("browser.migrate.interactions.history", false);
pref("browser.migrate.interactions.passwords", false);
pref("browser.migrate.preferences-entrypoint.enabled", true);
pref("extensions.pocket.api", "api.getpocket.com");
pref("extensions.pocket.bffApi", "firefox-api-proxy.cdn.mozilla.net");
pref("extensions.pocket.bffRecentSaves", true);
pref("extensions.pocket.enabled", false);
pref("extensions.pocket.oAuthConsumerKey", "40249-e88c401e1b1f2242d9e441c4");
pref("extensions.pocket.oAuthConsumerKeyBff", "94110-6d5ff7a89d72c869766af0e0");
pref("extensions.pocket.site", "getpocket.com");
pref("extensions.pocket.showHome", true);
pref("extensions.pocket.loggedOutVariant", "control");
pref("extensions.pocket.refresh.emailButton.enabled", false);
pref("extensions.pocket.refresh.hideRecentSaves.enabled", false);
pref("signon.firefoxRelay.feature", "available");
pref("signon.firefoxRelay.firstOfferVersionFallback", "control");
pref("signon.management.page.breach-alerts.enabled", true);
pref("signon.management.page.vulnerable-passwords.enabled", true);
pref("signon.management.page.sort", "name");
pref("signon.management.page.breachAlertUrl",
     "https://monitor.firefox.com/breach-details/");
pref("signon.passwordEditCapture.enabled", true);
pref("signon.relatedRealms.enabled", false);
pref("signon.showAutoCompleteFooter", true);
pref("signon.showAutoCompleteImport", "import");
pref("signon.suggestImportCount", 3);
//@line 2678 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.crashReports.unsubmittedCheck.enabled", false);
//@line 2680 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.crashReports.unsubmittedCheck.chancesUntilSuppress", 4);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
pref("services.sync.engine.creditcards.available", true);
pref("browser.sessionstore.restore_tabs_lazily", true);
pref("browser.suppress_first_window_animation", true);
pref("screenshots.browser.component.enabled", true);
pref("screenshots.browser.component.last-saved-method", "download");
pref("screenshots.browser.component.preventContentEvents", true);
pref("browser.screenshots.folderList", 1);
pref("browser.screenshots.dir", "");
pref("doh-rollout.clearModeOnShutdown", false);
pref("app.normandy.api_url", "https://normandy.cdn.mozilla.net/api/v1");
pref("app.normandy.dev_mode", false);
pref("app.normandy.enabled", true);
pref("app.normandy.first_run", true);
pref("app.normandy.logging.level", 50); // Warn
pref("app.normandy.run_interval_seconds", 21600); // 6 hours
pref("app.normandy.shieldLearnMoreUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/shield");
pref("app.normandy.last_seen_buildid", "");
pref("app.normandy.onsync_skew_sec", 600);
//@line 2730 "$SRCDIR/browser/app/profile/firefox.js"
  pref("app.shield.optoutstudies.enabled", true);
//@line 2734 "$SRCDIR/browser/app/profile/firefox.js"
//@line 2748 "$SRCDIR/browser/app/profile/firefox.js"
  pref("intl.multilingual.enabled", true);
  pref("intl.multilingual.downloadEnabled", true);
  pref("intl.multilingual.liveReload", true);
  pref("intl.multilingual.liveReloadBidirectional", false);
  pref("intl.multilingual.aboutWelcome.languageMismatchEnabled", true);
//@line 2760 "$SRCDIR/browser/app/profile/firefox.js"
pref("toolkit.coverage.enabled", false);
pref("toolkit.coverage.endpoint.base", "https://coverage.mozilla.org");
pref("browser.discovery.enabled", true);
pref("browser.discovery.containers.enabled", true);
pref("browser.discovery.sites", "addons.mozilla.org");
pref("browser.engagement.recent_visited_origins.expiry", 86400); // 24 * 60 * 60 (24 hours in seconds)
pref("browser.engagement.downloads-button.has-used", false);
pref("browser.engagement.fxa-toolbar-menu-button.has-used", false);
pref("browser.engagement.home-button.has-used", false);
pref("browser.engagement.sidebar-button.has-used", false);
pref("browser.engagement.library-button.has-used", false);
pref("browser.engagement.ctrlTab.has-used", false);
pref("browser.aboutConfig.showWarning", true);
pref("browser.toolbars.keyboard_navigation", true);
pref("browser.toolbars.bookmarks.visibility", "newtab");
pref("browser.toolbars.bookmarks.showOtherBookmarks", true);
pref("browser.privatebrowsing.felt-privacy-v1", false);
pref("security.certerrors.felt-privacy-v1", false);
pref("identity.fxaccounts.toolbar.enabled", true);
pref("identity.fxaccounts.toolbar.accessed", false);
pref("identity.fxaccounts.toolbar.defaultVisible", true);
pref("identity.fxaccounts.toolbar.pxiToolbarEnabled", true);
pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.monitorEnabled", true);
pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.relayEnabled", true);
pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.vpnEnabled", true);
pref("identity.fxaccounts.toolbar.syncSetup.panelAccessed", false);
pref("devtools.toolbox.footer.height", 250);
pref("devtools.toolbox.sidebar.width", 500);
pref("devtools.toolbox.host", "bottom");
pref("devtools.toolbox.previousHost", "right");
pref("devtools.toolbox.selectedTool", "inspector");
pref("devtools.toolbox.zoomValue", "1");
pref("devtools.toolbox.splitconsole.enabled", true);
pref("devtools.toolbox.splitconsole.open", false);
pref("devtools.toolbox.splitconsoleHeight", 100);
pref("devtools.toolbox.tabsOrder", "");
pref("devtools.toolbox.alwaysOnTop", true);
pref("devtools.browsertoolbox.scope", "parent-process");
pref("devtools.target-switching.server.enabled", true);
pref("devtools.every-frame-target.enabled", true);
pref("devtools.popups.debug", false);
pref("devtools.command-button-pick.enabled", true);
pref("devtools.command-button-frames.enabled", true);
pref("devtools.command-button-responsive.enabled", true);
pref("devtools.command-button-screenshot.enabled", false);
pref("devtools.command-button-rulers.enabled", false);
pref("devtools.command-button-measure.enabled", false);
pref("devtools.command-button-noautohide.enabled", false);
pref("devtools.command-button-errorcount.enabled", true);
//@line 2861 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.command-button-experimental-prefs.enabled", true);
//@line 2863 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.inspector.enabled", true);
pref("devtools.inspector.selectedSidebar", "layoutview");
pref("devtools.inspector.activeSidebar", "layoutview");
pref("devtools.inspector.remote", false);
pref("devtools.inspector.three-pane-enabled", true);
pref("devtools.inspector.chrome.three-pane-enabled", false);
pref("devtools.inspector.show_pseudo_elements", false);
pref("devtools.inspector.imagePreviewTooltipSize", 300);
pref("devtools.inspector.showUserAgentStyles", false);
pref("devtools.inspector.showAllAnonymousContent", false);
pref("devtools.overflow.debugging.enabled", true);
pref("devtools.inspector.draggable_properties", true);
pref("devtools.gridinspector.gridOutlineMaxColumns", 50);
pref("devtools.gridinspector.gridOutlineMaxRows", 50);
pref("devtools.gridinspector.showGridAreas", false);
pref("devtools.gridinspector.showGridLineNumbers", false);
pref("devtools.gridinspector.showInfiniteLines", false);
pref("devtools.gridinspector.maxHighlighters", 3);
pref("devtools.inspector.simple-highlighters-reduced-motion", false);
pref("devtools.inspector.rule-view.focusNextOnEnter", true);
pref("devtools.layout.boxmodel.opened", true);
pref("devtools.layout.flexbox.opened", true);
pref("devtools.layout.flex-container.opened", true);
pref("devtools.layout.flex-item.opened", true);
pref("devtools.layout.grid.opened", true);
//@line 2921 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.layout.boxmodel.highlightProperty", false);
//@line 2923 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.eyedropper.zoom", 6);
pref("devtools.markup.collapseAttributes", true);
pref("devtools.markup.collapseAttributeLength", 120);
pref("devtools.markup.beautifyOnCopy", false);
pref("devtools.defaultColorUnit", "authored");
pref("devtools.memory.enabled", true);
pref("devtools.memory.custom-census-displays", "{}");
pref("devtools.memory.custom-label-displays", "{}");
pref("devtools.memory.custom-tree-map-displays", "{}");
pref("devtools.memory.max-individuals", 1000);
pref("devtools.memory.max-retaining-paths", 10);
pref("devtools.performance.enabled", true);
pref("devtools.cache.disabled", false);
pref("devtools.serviceWorkers.testing.enabled", false);
pref("devtools.netmonitor.enabled", true);
pref("devtools.netmonitor.features.requestBlocking", true);
pref("devtools.application.enabled", true);
pref("devtools.custom-formatters.enabled", false);
pref("devtools.netmonitor.panes-network-details-width", 550);
pref("devtools.netmonitor.panes-network-details-height", 450);
pref("devtools.netmonitor.panes-search-width", 550);
pref("devtools.netmonitor.panes-search-height", 450);
pref("devtools.netmonitor.filters", "[\"all\"]");
pref("devtools.netmonitor.requestfilter", "");
pref("devtools.netmonitor.visibleColumns",
    "[\"override\",\"status\",\"method\",\"domain\",\"file\",\"initiator\",\"type\",\"transferred\",\"contentSize\",\"waterfall\"]"
);
pref("devtools.netmonitor.columnsData",
  '[{"name":"override","minWidth":20,"width":2}, {"name":"status","minWidth":30,"width":5}, {"name":"method","minWidth":30,"width":5}, {"name":"domain","minWidth":30,"width":10}, {"name":"file","minWidth":30,"width":25}, {"name":"url","minWidth":30,"width":25},{"name":"initiator","minWidth":30,"width":10},{"name":"type","minWidth":30,"width":5},{"name":"transferred","minWidth":30,"width":10},{"name":"contentSize","minWidth":30,"width":5},{"name":"waterfall","minWidth":150,"width":15}]');
pref("devtools.netmonitor.msg.payload-preview-height", 128);
pref("devtools.netmonitor.msg.visibleColumns",
  '["data", "time"]'
);
pref("devtools.netmonitor.msg.displayed-messages.limit", 500);
pref("devtools.netmonitor.response.ui.limit", 10240);
pref("devtools.netmonitor.ui.default-raw-response", false);
pref("devtools.netmonitor.saveRequestAndResponseBodies", true);
pref("devtools.netmonitor.har.defaultLogDir", "");
pref("devtools.netmonitor.har.defaultFileName", "%hostname_Archive [%date]");
pref("devtools.netmonitor.har.jsonp", false);
pref("devtools.netmonitor.har.jsonpCallback", "");
pref("devtools.netmonitor.har.includeResponseBodies", true);
pref("devtools.netmonitor.har.compress", false);
pref("devtools.netmonitor.har.forceExport", false);
pref("devtools.netmonitor.har.pageLoadedTimeout", 1500);
pref("devtools.netmonitor.har.enableAutoExportToFile", false);
pref("devtools.netmonitor.har.multiple-pages", false);
pref("devtools.netmonitor.audits.slow", 500);
  pref("devtools.netmonitor.features.newEditAndResend", true);
pref("devtools.netmonitor.customRequest", '{}');
pref("devtools.storage.enabled", true);
pref("devtools.styleeditor.enabled", true);
pref("devtools.styleeditor.autocompletion-enabled", true);
pref("devtools.styleeditor.showAtRulesSidebar", true);
pref("devtools.styleeditor.atRulesSidebarWidth", 238);
pref("devtools.styleeditor.navSidebarWidth", 245);
pref("devtools.styleeditor.transitions", true);
pref("devtools.screenshot.clipboard.enabled", false);
pref("devtools.screenshot.audio.enabled", true);
pref("devtools.dom.enabled", false);
pref("devtools.accessibility.enabled", true);
pref("devtools.webconsole.filter.error", true);
pref("devtools.webconsole.filter.warn", true);
pref("devtools.webconsole.filter.info", true);
pref("devtools.webconsole.filter.log", true);
pref("devtools.webconsole.filter.debug", true);
pref("devtools.webconsole.filter.css", false);
pref("devtools.webconsole.filter.net", false);
pref("devtools.webconsole.filter.netxhr", false);
pref("devtools.webconsole.input.autocomplete",true);
pref("devtools.webconsole.input.eagerEvaluation", true);
pref("devtools.browserconsole.filter.error", true);
pref("devtools.browserconsole.filter.warn", true);
pref("devtools.browserconsole.filter.info", true);
pref("devtools.browserconsole.filter.log", true);
pref("devtools.browserconsole.filter.debug", true);
pref("devtools.browserconsole.filter.css", false);
pref("devtools.browserconsole.filter.net", false);
pref("devtools.browserconsole.filter.netxhr", false);
pref("devtools.webconsole.inputHistoryCount", 300);
pref("devtools.webconsole.persistlog", false);
pref("devtools.netmonitor.persistlog", false);
pref("devtools.webconsole.timestampMessages", false);
//@line 3079 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.webconsole.sidebarToggle", false);
//@line 3081 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.webconsole.input.editor", false);
pref("devtools.browserconsole.input.editor", false);
pref("devtools.webconsole.input.editorWidth", 0);
pref("devtools.browserconsole.input.editorWidth", 0);
pref("devtools.webconsole.input.editorOnboarding", true);
pref("devtools.webconsole.groupWarningMessages", true);
pref("devtools.browserconsole.enableNetworkMonitoring", false);
pref("devtools.source-map.client-service.enabled", true);
pref("devtools.hud.loglimit", 10000);
pref("devtools.editor.tabsize", 2);
pref("devtools.editor.expandtab", true);
pref("devtools.editor.keymap", "default");
pref("devtools.editor.autoclosebrackets", true);
pref("devtools.editor.detectindentation", true);
pref("devtools.editor.enableCodeFolding", true);
pref("devtools.editor.autocomplete", true);
pref("devtools.responsive.viewport.angle", 0);
pref("devtools.responsive.viewport.width", 320);
pref("devtools.responsive.viewport.height", 480);
pref("devtools.responsive.viewport.pixelRatio", 0);
pref("devtools.responsive.leftAlignViewport.enabled", false);
pref("devtools.responsive.reloadConditions.touchSimulation", false);
pref("devtools.responsive.reloadConditions.userAgent", false);
pref("devtools.responsive.reloadNotification.enabled", true);
pref("devtools.responsive.touchSimulation.enabled", false);
pref("devtools.responsive.userAgent", "");
pref("devtools.responsive.showUserAgentInput", true);
pref("devtools.responsive.dynamicToolbar.enabled", false);
//@line 3149 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.aboutdebugging.local-tab-debugging", true);
//@line 3151 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.aboutdebugging.process-debugging", true);
pref("devtools.aboutdebugging.network-locations", "[]");
pref("devtools.aboutdebugging.collapsibilities.installedExtension", false);
pref("devtools.aboutdebugging.collapsibilities.otherWorker", false);
pref("devtools.aboutdebugging.collapsibilities.serviceWorker", false);
pref("devtools.aboutdebugging.collapsibilities.sharedWorker", false);
pref("devtools.aboutdebugging.collapsibilities.tab", false);
pref("devtools.aboutdebugging.collapsibilities.temporaryExtension", false);
//@line 3169 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.aboutdebugging.showHiddenAddons", true);
//@line 3171 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.aboutdebugging.showReduxActionsInConsole", false);
pref("devtools.debugger.features.map-await-expression", true);
pref("devtools.debugger.features.async-captured-stacks", true);
pref("devtools.debugger.features.async-live-stacks", false);
pref("devtools.debugger.show-content-scripts", false);
pref("devtools.debugger.hide-ignored-sources", false);
pref("devtools.popup.disable_autohide", false);
//@line 3197 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.high-contrast-mode-support", false);
//@line 3199 "$SRCDIR/browser/app/profile/firefox.js"
pref("first-startup.timeout", 30000);
//@line 3207 "$SRCDIR/browser/app/profile/firefox.js"
  pref("default-browser-agent.enabled", true);
//@line 3209 "$SRCDIR/browser/app/profile/firefox.js"
//@line 3212 "$SRCDIR/browser/app/profile/firefox.js"
  pref("app.normandy.test-prefs.bool", false);
  pref("app.normandy.test-prefs.integer", 0);
  pref("app.normandy.test-prefs.string", "");
//@line 3216 "$SRCDIR/browser/app/profile/firefox.js"
//@line 3221 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.menu.showViewImageInfo", false);
//@line 3223 "$SRCDIR/browser/app/profile/firefox.js"
//@line 3228 "$SRCDIR/browser/app/profile/firefox.js"
pref("svg.context-properties.content.allowed-domains", "profile.accounts.firefox.com,profile.stage.mozaws.net");
//@line 3240 "$SRCDIR/browser/app/profile/firefox.js"
//@line 3242 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.firefoxbridge.enabled", false);
pref("browser.firefoxbridge.extensionOrigins",
    "chrome-extension://gkcbmfjnnjoambnfmihmnkneakghogca/"
);
//@line 3247 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.places.interactions.enabled", true);
pref("browser.firefox-view.feature-tour", "{\"screen\":\"FIREFOX_VIEW_SPOTLIGHT\",\"complete\":false}");
pref("browser.firefox-view.view-count", 0);
pref("browser.firefox-view.max-history-rows", 0);
pref("browser.firefox-view.virtual-list.enabled", true);
pref("browser.pdfjs.feature-tour", "{\"screen\":\"\",\"complete\":false}");
pref("cookiebanners.ui.desktop.enabled", false);
pref("cookiebanners.ui.desktop.showCallout", false);
pref("cookiebanners.ui.desktop.cfrVariant", 0);
//@line 3291 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.swipe.navigation-icon-start-position", -40);
  pref("browser.swipe.navigation-icon-end-position", 60);
  pref("browser.swipe.navigation-icon-min-radius", 12);
  pref("browser.swipe.navigation-icon-max-radius", 20);
//@line 3296 "$SRCDIR/browser/app/profile/firefox.js"
//@line 3301 "$SRCDIR/browser/app/profile/firefox.js"
//@line 3305 "$SRCDIR/browser/app/profile/firefox.js"
pref("ui.new-webcompat-reporter.enabled", true);
//@line 3309 "$SRCDIR/browser/app/profile/firefox.js"
pref("ui.new-webcompat-reporter.send-more-info-link", true);
//@line 3313 "$SRCDIR/browser/app/profile/firefox.js"
//@line 3315 "$SRCDIR/browser/app/profile/firefox.js"
pref("ui.new-webcompat-reporter.reason-dropdown", 2);
pref("ui.new-webcompat-reporter.reason-dropdown.randomized", true);
//@line 3323 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.privatebrowsing.resetPBM.enabled", false);
//@line 3325 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.privatebrowsing.resetPBM.showConfirmationDialog", true);
pref("browser.mailto.dualPrompt", false);
pref("browser.mailto.dualPrompt.onLocationChange", false);
pref("browser.mailto.dualPrompt.dismissNotNowMinutes", 525600); // one year
pref("browser.mailto.dualPrompt.dismissXClickMinutes", 1440); // one day
pref("browser.backup.enabled", true);
pref("browser.backup.scheduled.enabled", false);
pref("browser.backup.preferences.ui.enabled", false);
pref("browser.backup.sqlite.pages_per_step", 50);
pref("browser.backup.sqlite.step_delay_ms", 50);
pref("browser.backup.scheduled.idle-threshold-seconds", 15);
pref("browser.backup.scheduled.minimum-time-between-backups-seconds", 3600);
pref("browser.backup.template.fallback-download.release", "https://www.mozilla.org/firefox/download/thanks/?s=direct&utm_medium=firefox-desktop&utm_source=backup&utm_campaign=firefox-backup-2024&utm_content=control");
pref("browser.backup.template.fallback-download.beta", "https://www.mozilla.org/firefox/channel/desktop/?utm_medium=firefox-desktop&utm_source=backup&utm_campaign=firefox-backup-2024&utm_content=control#beta");
pref("browser.backup.template.fallback-download.aurora", "https://www.mozilla.org/firefox/channel/desktop/?utm_medium=firefox-desktop&utm_source=backup&utm_campaign=firefox-backup-2024&utm_content=control#developer");
pref("browser.backup.template.fallback-download.nightly", "https://www.mozilla.org/firefox/channel/desktop/?utm_medium=firefox-desktop&utm_source=backup&utm_campaign=firefox-backup-2024&utm_content=control#nightly");
pref("browser.backup.template.fallback-download.esr", "https://www.mozilla.org/firefox/enterprise/?utm_medium=firefox-desktop&utm_source=backup&utm_campaign=firefox-backup-2024&utm_content=control#download");
//@line 3362 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.profiles.enabled", false);
//@line 3364 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.profiles.profile-name.updated", false);
pref("browser.profiles.sync.allow-danger-merge", false);
pref("startup.homepage_override_url_nimbus", "");
pref("startup.homepage_override_nimbus_maxVersion", "");
pref("startup.homepage_override_nimbus_minVersion", "");
pref("startup.homepage_override_nimbus_disable_wnp", false);
pref("toolkit.contentRelevancy.enabled", false);
pref("toolkit.contentRelevancy.ingestEnabled", false);
pref("toolkit.contentRelevancy.log", false);
pref("browser.contextual-services.contextId.rotation-in-days", 0);
pref("browser.contextual-services.contextId.rust-component.enabled", true);
pref("browser.ipProtection.enabled", false);
