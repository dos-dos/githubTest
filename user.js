user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.contentblocking.category", strict);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.search.region", US);
user_pref("browser.startup.preXulSkeletonUI", false);
user_pref("browser.tabs.firefox.view", false);
user_pref("browser.urlbar.maxRichResults", 8);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("doh-rollout.home-region", US);
user_pref("dom.security.https_only_mode_ever_enabled_pbm", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);
user_pref("dom.security.https_only_mode", true);
user_pref("extensions.pictureinpicture.enable_picture_in_picture_overrides", true);
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("mousewheel.with_control.action", 5);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("nglayout.initialpaint.delay", 0);
user_pref("svg.content-properties.content.enabled", true);

user_pref("media.cache_size", 2048000); // default=512000
user_pref("media.cache_readahead_limit", 9000); // default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 6000); // default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold (in seconds)


/*To active container tabs without any extension */
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);

user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 0);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
