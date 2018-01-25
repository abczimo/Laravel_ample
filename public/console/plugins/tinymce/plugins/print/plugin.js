(function () {
var print = (function () {
  'use strict';

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('mcePrint', function () {
      editor.getWin().print();
    });
  };
  var $_348ruhi2jctdj3dg = { register: register };

  var register$1 = function (editor) {
    editor.addButton('print', {
      title: 'Print',
      cmd: 'mcePrint'
    });
    editor.addMenuItem('print', {
      text: 'Print',
      cmd: 'mcePrint',
      icon: 'print'
    });
  };
  var $_8fbpcii3jctdj3dh = { register: register$1 };

  PluginManager.add('print', function (editor) {
    $_348ruhi2jctdj3dg.register(editor);
    $_8fbpcii3jctdj3dh.register(editor);
    editor.addShortcut('Meta+P', '', 'mcePrint');
  });
  var Plugin = function () {
  };

  return Plugin;

}());
})()
