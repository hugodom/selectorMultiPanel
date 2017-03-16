Ext.define('App.view.selectorMultiPanel.SelectorMultiPanel', {
	extend: 'M.panel.MPanel',
	alias: 'widget.selectormultipanel',
	requires: [
		'App.view.selectorMultiPanel.SelectorRow',
		'App.view.selectorMultiPanel.SelectorPanel'
	],
	cls: 'selectorMultiPanel',
	bodyPadding: '0 14 0 0',
	margin: '0 0 20 0',
	initComponent: function() {
		Ext.apply(this, {
			items: [
				this.cabecera()
			],
		});
		this.callParent(arguments);
	},
	listeners: {
		afterrender: {
			fn: function() {
				//Todo este listener es para borrar, solo se mantiene para referencia
				// var myPanel = Ext.widget('agrupacionPeriodo');
				// debugger;
				// myPanel.toggleMonth(6);
				// myPanel.toggleMonth(8);
				// myPanel.setPosition('top');
				// myPanel.changeYear('2017');
				// this.add(myPanel);


				// myPanel = Ext.widget('agrupacionPeriodo');
				// myPanel.changeYear('2016');
				// myPanel.toggleMonth(0);
				// myPanel.toggleMonth(3);
				// myPanel.toggleMonth(5);
				// myPanel.toggleMonth(10);
				// myPanel.setPosition();
				// this.add(myPanel);
				// myPanel = Ext.widget('agrupacionPeriodo');
				// myPanel.changeYear('2017');
				// myPanel.toggleMonth(2);
				// myPanel.setPosition();
				// this.add(myPanel);
				// myPanel = Ext.widget('agrupacionPeriodo');
				// myPanel.changeYear('2018');
				// myPanel.setPosition('bottom');
				// this.add(myPanel);

				// this.add(myPanel);
			}
		}
	},
	cabecera: function() {
		return {
			xtype: 'container',
			layout: 'hbox',
			flex: 1,
			defaults: {
				titleAlign: 'center'
			},
			items: [{
				title: '',
				width: 26,
				// flex: 1
			}, {
				title: 'Ene',
				flex: 1
			}, {
				title: 'Feb',
				flex: 1
			}, {
				title: 'Mar',
				flex: 1
			}, {
				title: 'Abr',
				flex: 1
			}, {
				title: 'May',
				flex: 1
			}, {
				title: 'Jun',
				flex: 1
			}, {
				title: 'Jul',
				flex: 1
			}, {
				title: 'Ago',
				flex: 1
			}, {
				title: 'Sep',
				flex: 1
			}, {
				title: 'Oct',
				flex: 1
			}, {
				title: 'Nov',
				flex: 1
			}, {
				title: 'Dic',
				flex: 1
			}]
		};
	},

	insertPanels: function(panels) {
		//for each
		//por cada pasada  this.add(panel[index], {title: panel[index].nombre, flex: 1})
		Ext.Object.each(panels, function(key, val) {

		});
	},

	loadPanels: function(data) {
		if (data === undefined) return;
		//Analizar que hacer si es que el usuario introduce sus propios paneles
		var myPanel = Ext.widget('selectorrow');
		Ext.Array.each(data, function(element, index, periodosItself) {
			if (element.year !== undefined) myPanel.changeTitle(element.year);
			if (index === 0) myPanel.setPosition('top');
			else if(index === periodosItself.length) myPanel.setPosition('bottom');
			else myPanel.setPosition('middle');
			Ext.Object.each(element.months, function(index, element) {
				myPanel.setPanel(index, element);
			}, this);
			this.add(myPanel);
			//this.add(myPanel); //this en este caso seria agrupacionGrid
		}, this);
	},

	resetPanels: function() {
		var components = Ext.ComponentQuery.query('selectorrow'); //Cambiar de nombre

		Ext.Array.each(components, function(component, index, periodosItself) {
			component.destroy();
		}, this);
	},

	returnSingleRowValues: function(title){
		var selectedRow = this.down('[title="'+ title +'"]').up('selectorrow');
		return selectedRow.returnValues();
	},

	returnSingleRow: function(title){
		var selectedRow = this.down('[title="'+ title +'"]').up('selectorrow');
		return selectedRow;
	},

	returnSingleRowById: function(id){
		var selectedRow = this.down('[id="'+ id +'"]');
		return selectedRow;
	},

	returnValues: function() {
		var allPeriodos = Ext.ComponentQuery.query('[xtype="selectorrow"]', this);
		var arrayPeriodos = [];
		var subperiodo = {};

		Ext.Array.each(allPeriodos, function(periodo, index, periodosItself) {
			subperiodo.title = periodo.returnMainTitle();
			subperiodo.status = [];
			Ext.Array.each(periodo.items.items, function(segmento, index, periodosItself) {
				if (segmento.xtype === "selectorpanel") {
					var reference = segmento.reference;
					var status = segmento.status;

					this.status[reference] = status;
				} else {
					// var year = periodo.title;
				}
			}, subperiodo);
			arrayPeriodos.push(Ext.clone(subperiodo));
		}, this);

		return arrayPeriodos;
	},

	config: {
		configName: null
	}
});