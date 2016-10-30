var _       = require('lodash'),
    utils;

utils = {
    // 2016-10-30 17:39:33 去掉版本控制，博客靜態化時能找到靜態資源
    // assetTemplate: _.template('<%= source %>?v=<%= version %>'),
    // linkTemplate: _.template('<a href="<%= url %>"><%= text %></a>'),
    // scriptTemplate: _.template('<script src="<%= source %>?v=<%= version %>"></script>'),
    // inputTemplate: _.template('<input class="<%= className %>" type="<%= type %>" name="<%= name %>" <%= extras %> />'),
    assetTemplate: _.template('<%= source %>'),
    linkTemplate: _.template('<a href="<%= url %>"><%= text %></a>'),
    scriptTemplate: _.template('<script src="<%= source %>"></script>'),
    inputTemplate: _.template('<input class="<%= className %>" type="<%= type %>" name="<%= name %>" <%= extras %> />'),
    isProduction: process.env.NODE_ENV === 'production'
};

module.exports = utils;
