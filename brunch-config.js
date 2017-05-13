// See http://brunch.io for documentation.
exports.config = {
    paths: {
        watched: ["app/Resources/frontend/", "app/Resources/backend/"],
        public: "web"
    },
    files: {
        javascripts: {
            joinTo: {
                "javascripts/front.js": /frontend/,
                "javascripts/back.js": [
                    /backend/
                ],
                "javascripts/vendor.js": /^bower/,

            }
        },
        stylesheets: {
            joinTo: {
                "styles/front.css": /frontend/,
                "styles/back.css" : [
                    /backend/,
                ],
                "styles/vendor.css": [
                    "bower_components/normalize.css/normalize.css",
                    "bower_components/bootstrap-saas/aanimate.css",
                    "bower_components/bootstrap-saas/assets"
                ]
            }
        }
    },
    modules: {
        nameCleaner: function(path) {
            return path
                .replace('app/Resources/', '')
                .replace('/scripts/', '/');
        }
    },
    plugins: {
        sass: {
            mode: 'ruby',
            options: {
                includePaths: ["node_modules/bootstrap-sass/assets/stylesheets"], // tell sass-brunch where to look for files to @import
                precision: 8 // minimum precision required by bootstrap-sass
            }
        },
        cleancss: {
            keepSpecialComments: 0,
            removeEmpty: true,
            removeWhitespace: true
        },
        uglify: {
            mangle: false,
            compress: {
                global_defs: {
                    DEBUG: false
                }
            }
        }
    },
    overrides: {
        production: {
            optimize: true,
            sourceMaps: false
        }
    }
};