var app = window.app || {};

app.DefaultViewModel = (function (ko, db) {
  'use strict';

  var me = {
    catalog: ko.observableArray([]),
    init: init
  };

  function init () {
    db.getCatalog(function (catalog) {
      var a = [];

      ko.utils.arrayForEach(catalog || [], function (item) {
        a.push(new app.Media(item.ISBN, item.MediaType, item.Name));
      });

      me.catalog(a);
    })
  }

  return me;
}
)(ko, app.dataContext);
