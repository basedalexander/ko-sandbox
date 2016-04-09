var app = window.app || {};

app.dataContext = (function ($) {
  'use strict';


  function getCatalog (callback) {
    if ($.isFunction(callback)) {
      $.getJSON('json/Catalog.json', function (data) {
        console.log(data.Catalog);
        callback(data.Catalog);
      });
    }
  }

    return {
        getCatalog: getCatalog
    };
}
)(jQuery);
