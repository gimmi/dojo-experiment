define(["dojo/dom"], function(dom) {

    // Store the original text before changing it
    var originalText = "";
    var node;

    // Return the module's return value
    return {
        updateText: function(id, message) {
            node = dom.byId(id);
            originalText = node.innerHTML;
            node.innerHTML = message;
        },
        restoreText: function(id) {
            node.innerHTML = originalText;
        }
    };
});