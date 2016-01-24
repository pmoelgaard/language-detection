var LanguageLayerAPI = require('../index');
var languageLayerAPI = new LanguageLayerAPI({
    access_key: '[ACCESS_KEY]'
});

var detectQuery = {
    query: 'I like apples & oranges.',
    show_query: 0
};

languageLayerAPI.detect(detectQuery)
    .then(function (result) {
        console.log('Detect Promise Resolve: ' + JSON.stringify(result));
    })
    .catch(function (err) {
        console.log('Detect Promise Reject: ' + JSON.stringify(err));
    });