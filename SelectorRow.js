/**
 * @class MyNamespace.agrupacionPeriodo
 * @extends extendsClass
 * Description
 */
Ext.define('App.view.selectorMultiPanel.SelectorRow', {
	extend: 'Ext.Container',
	alias: 'widget.selectorrow',
	layout: 'hbox',
	flex: 1,
	items: [{
		// flex: 1,
		xtype: 'mpanel',
		width: 26,
		reference: 'title',
		header: {
			titleAlign: 'right',
			titleRotation: 2
		}
	}, {
		xtype: 'selectorpanel',
		reference: '0'
	}, {
		xtype: 'selectorpanel',
		reference: '1'
	}, {
		xtype: 'selectorpanel',
		reference: '2'
	}, {
		xtype: 'selectorpanel',
		reference: '3'
	}, {
		xtype: 'selectorpanel',
		reference: '4'
	}, {
		xtype: 'selectorpanel',
		reference: '5'
	}, {
		xtype: 'selectorpanel',
		reference: '6'
	}, {
		xtype: 'selectorpanel',
		reference: '7'
	}, {
		xtype: 'selectorpanel',
		reference: '8'
	}, {
		xtype: 'selectorpanel',
		reference: '9'
	}, {
		xtype: 'selectorpanel',
		reference: '10'
	}, {
		xtype: 'selectorpanel',
		reference: '11'
	}],

	insertPanels: function(panels) {
		//for each
		//por cada pasada  this.add(panel[index], {xtype: 'agrupacionMes'reference: index})
		if (Ext.isArray(panels)) {
			Ext.Array.each(panels, function(panel, index, panelsItself) {
				panel.reference = index;
				var myPanel = Ext.widget('selectorpanel', panel);
				var item = this.add(myPanel);
			});
		} else if (Ext.isNumber(panels)) {
			for (i = 0; i < panels; i++) {
				var myPanel = Ext.widget('selectorpanel', {reference: i.toString()});
				var item = this.add(myPanel);
				itemId = item.getId();

			}
		} else return;


		// Ext.Array.each(panels, function(panel, index, panelsItself) {
		// 	panel.destroy();
		// });
	},

	getAllPanels: function() {
		return this.query('selectorpanel');
	},


	cleanAllPanels: function() {
		var panels = this.getAllPanels();
		Ext.Array.each(panels, function(panel, index, panelsItself) {
			panel.destroy();
		});
	},

	countAllPanels: function() {
		var panels = this.getAllPanels();
		return panels.length;
	},

	setRowId: function(value) {
		if (value === undefined) return;
		this.setId(value);
	},

	changeRotation: function(value) {
		if (value === undefined || value > 2 || value < 0) value = 0;
		this.down('[reference="title"]').getHeader().setTitleRotation(value);
	},

	changeTitle: function(value) {
		if (value === undefined) return;
		this.down('[reference="title"]').setTitle(value);
	},

	togglePanel: function(index) {
		if (index === undefined) return;
		var panel = this.down('[reference="' + index + '"]');
		panel.toggleClsCustom('bluerow');
	},

	setPanel: function(index, value) {
		if (index === undefined) return;
		var panel = this.down('[reference="' + index + '"]');
		// if(value === 0) panel.removeCls('bluerow');
		if (value === 1) panel.toggleClsCustom('bluerow');
	},

	setPosition: function(type) {
		if (type === undefined) type = 'middle';
		for (i = 0; i <= this.countAllPanels() - 1; i++) {
			var panel = this.down('[reference="' + i + '"]');
			if (i === 0) {
				panel.setCustomStyle(type, 'left');
			} else if (i === 11) {
				panel.setCustomStyle(type, 'right');
			} else {
				panel.setCustomStyle(type);
			}
		}
	},

	returnMainTitle: function() {
		var title = this.down('[reference="title"]').getTitle();
		return title;
	},

	returnValues: function() {
		var arrayValues = this.getAllPanels();
		var subperiodo = {};
		subperiodo.title = this.returnMainTitle();
		subperiodo.status = [];
		Ext.Array.each(arrayValues, function(segmento, index, periodosItself) {
			if (segmento.xtype === "selectorpanel") {
				var reference = segmento.reference;
				var status = segmento.status;

				this.status[reference] = status;
			} else {
				// var year = periodo.title;
			}
		}, subperiodo);

		return subperiodo;
	},

	config: {
		configName: null
	}
});