Ext.define('App.view.selectorMultiPanel.SelectorPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.selectorpanel',

	title: '',
	flex: 1,
	style: {
		//Valores por defecto
		'padding': '25px',
		'cursor': 'pointer',
		borderStyle: 'solid',
		borderColor: '#a4a4a4',
		borderWidth: '0px 0px 0px 0px',
		// backgroundColor: '#ffcccc'
		// backgroundColor: '#F4F4F4'
		backgroundColor: '#efefef'
	},
	status: 0,
	listeners: {
		click: {
			element: 'el', //bind to the underlying el property on the panel
			scope: this,
			fn: function(e) {
				var panel = Ext.ComponentQuery.query('#' + e.target.id)[0];
				panel.toggleClsCustom('bluerow');
			}
		}
	},

	toggleClsCustom: function(className) {
		if (this.status === 0) {
			this.addCls(className);
			this.status = 1;
		} else if (this.status === 1) {
			this.removeCls(className);
			this.status = 0;
		}
		return this;
	},

	setCustomStyle: function(type, position) {
		if (type === undefined) return;
		if (type === 'middle' || type === 'bottom') {
			if (position === 'left') {
				this.setStyle({
					borderWidth: '0px 0px 1px 1px'
				});
			} else if (position === 'right') {
				this.setStyle({
					borderWidth: '0px 1px 1px 1px'
				});
			} else {
				this.setStyle({
					borderWidth: '0px 0px 1px 1px'
				});
			}
		} else if (type === 'top') {
			if (position === 'left') {
				this.setStyle({
					borderWidth: '1px 0px 1px 1px'
				});
			} else if (position === 'right') {
				this.setStyle({
					borderWidth: '1px 1px 1px 1px'
				});
			} else {
				this.setStyle({
					borderWidth: '1px 0px 1px 1px'
				});
			}
		} 
		// else if (position === 'middle') {
		// 	if (position === 'left') {
		// 		this.setStyle({
		// 			borderWidth: '1px 1px 0px 1px'
		// 		});
		// 	} else if (position === 'right') {
		// 		this.setStyle({
		// 			borderWidth: '1px 1px 0px 1px'
		// 		});
		// 	} else {
		// 		this.setStyle({
		// 			borderWidth: '1px 1px 0px 1px'
		// 		});
		// 	}
		// }
	},

	config: {
		configName: null
	}
});