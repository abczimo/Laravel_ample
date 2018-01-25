(function () {
var code = (function () {
  'use strict';

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('code_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('code_dialog_height', Math.min(DOMUtils.DOM.getViewPort().h - 200, 500));
  };
  var $_bys4da91jctdj1zi = {
    getMinWidth: getMinWidth,
    getMinHeight: getMinHeight
  };

  var setContent = function (editor, html) {
    editor.focus();
    editor.undoManager.transact(function () {
      editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
  };
  var getContent = function (editor) {
    return editor.getContent({ source_view: true });
  };
  var $_6of8po93jctdj1zj = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_bys4da91jctdj1zi.getMinWidth(editor);
    var minHeight = $_bys4da91jctdj1zi.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source code',
      body: {
        type: 'textbox',
        name: 'code',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_6of8po93jctdj1zj.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_6of8po93jctdj1zj.getContent(editor));
  };
  var $_6joglc90jctdj1zg = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_6joglc90jctdj1zg.open(editor);
    });
  };
  var $_8hrmny8zjctdj1zf = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_6joglc90jctdj1zg.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_6joglc90jctdj1zg.open(editor);
      }
    });
  };
  var $_mzu7n94jctdj1zk = { register: register$1 };

  PluginManager.add('code', function (editor) {
    $_8hrmny8zjctdj1zf.register(editor);
    $_mzu7n94jctdj1zk.register(editor);
    return {};
  });
  var Plugin = function () {
  };

  return Plugin;

}());
})()
