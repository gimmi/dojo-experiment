define([ 'dojo/_base/declare', 'dojo/dom', 'dijit/form/Button', 'dijit/layout/BorderContainer', 'dijit/layout/ContentPane' ], function (declare, dom, Button, BorderContainer, ContentPane) {
	return declare(null, {
		createLayout: function (parent) {
			var bc = new BorderContainer({
				id: 'main'
			});

			bc.addChild(new ContentPane({
				region: "center",
				content: "Center content"
			}));

			bc.addChild(new ContentPane({
				region: "top",
				content: "Top content",
				splitter: true
			}));

			bc.addChild(new ContentPane({
				region: "bottom",
				content: "Bottom content",
				splitter: true
			}));

			bc.addChild(new ContentPane({
				region: "left",
				content: "Left content",
				splitter: true
			}));

			bc.addChild(new ContentPane({
				region: "right",
				content: "Right content",
				splitter: true
			}));

			bc.placeAt(parent);
			bc.startup();
			return bc;
		},
		createButton: function (domId) {
			var button = new Button({ label: 'a button' });
			button.placeAt(domId);
			button.startup();
			return button;
		}
	});
});