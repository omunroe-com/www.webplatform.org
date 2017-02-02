// DocPad Configuration File
// http://docpad.org/docs/config

// Define the DocPad Configuration
var docpadConfig = {
    localeCode: 'en',
    enableUnlistedPlugins: false,
    enabledPlugins: {
        eco: true,
        livereload: false,
        frontend: true,
        marked: true,
        partials: true
    },
    templateData: {
        site: {
            name: "WebPlatform",
            title_append: " · WebPlatform.org",
            tagline: "Your Web, documented",
            url: "http://www.webplatform.org",
            title: "Web Platform Docs",
            tld: "webplatform.org",
            piwik_id: 1
        }
    },
    port: 4000,
    outPath: 'build'
};

// Export the DocPad Configuration
module.exports = docpadConfig;
