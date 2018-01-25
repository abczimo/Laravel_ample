(function () {
var hr = (function () {
  'use strict';

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('InsertHorizontalRule', function () {
      editor.execCommand('mceInsertContent', false, '<hr />');
    });
  };
  var $_3gl6igbjjctdj2ai = { register: register };

  var register$1 = function (editor) {
    editor.addButton('hr', {
      icon: 'hr',
      tooltip: 'Horizontal line',
      cmd: 'InsertHorizontalRule'
    });
    editor.addMenuItem('hr', {
      icon: 'hr',
      text: 'Horizontal line',
      cmd: 'InsertHorizontalRule',
      context: 'insert'
    });
  };
  var $_4gtf5gbkjctdj2aj = { register: register$1 };

  PluginManager.add('hr', function (editor) {
    $_3gl6igbjjctdj2ai.register(editor);
    $_4gtf5gbkjctdj2aj.register(editor);
  });
  var Plugin = function () {
  };

  return Plugin;

}());
})()
