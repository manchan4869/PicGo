var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> 黄冈市行政区划'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 黄冈市行政区划境界线'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 黄冈市水系（面）'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 黄冈市居民地（面）'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 黄冈市水系（线）'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 黄冈市水系（点）'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 黄冈市居民地（点）'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> 黄冈市铁路'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> 黄冈市公路'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> 黄冈市自然地名'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> 黄冈市行政地名'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10];
lyr__0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PAC': 'PAC', 'NAME': 'NAME', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'HYDC': 'HYDC', 'NAME': 'NAME', 'PERIOD': 'PERIOD', 'VOL': 'VOL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr__4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'HYDC': 'HYDC', 'NAME': 'NAME', 'PERIOD': 'PERIOD', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr__5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'NAME': 'NAME', 'ANGLE': 'ANGLE', });
lyr__6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'ANGLE': 'ANGLE', });
lyr__7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'RN': 'RN', 'NAME': 'NAME', 'TYPE': 'TYPE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr__8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'RN': 'RN', 'NAME': 'NAME', 'RTEG': 'RTEG', 'TYPE': 'TYPE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr__9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CLASS': 'CLASS', 'NAME': 'NAME', 'PINYIN': 'PINYIN', });
lyr__10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CLASS': 'CLASS', 'NAME': 'NAME', 'PINYIN': 'PINYIN', 'GNID': 'GNID', 'XZNAME': 'XZNAME', });
lyr__0.set('fieldImages', {'OBJECTID': 'TextEdit', 'PAC': 'TextEdit', 'NAME': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'GB': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr__2.set('fieldImages', {'OBJECTID': 'TextEdit', 'GB': 'TextEdit', 'HYDC': 'TextEdit', 'NAME': 'TextEdit', 'PERIOD': 'TextEdit', 'VOL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr__3.set('fieldImages', {'OBJECTID': '', 'GB': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr__4.set('fieldImages', {'OBJECTID': '', 'GB': '', 'HYDC': '', 'NAME': '', 'PERIOD': '', 'SHAPE_Leng': '', });
lyr__5.set('fieldImages', {'OBJECTID': '', 'GB': '', 'NAME': '', 'ANGLE': '', });
lyr__6.set('fieldImages', {'OBJECTID': 'TextEdit', 'GB': 'TextEdit', 'ANGLE': 'TextEdit', });
lyr__7.set('fieldImages', {'OBJECTID': '', 'GB': '', 'RN': '', 'NAME': '', 'TYPE': '', 'SHAPE_Leng': '', });
lyr__8.set('fieldImages', {'OBJECTID': '', 'GB': '', 'RN': '', 'NAME': '', 'RTEG': '', 'TYPE': '', 'SHAPE_Leng': '', });
lyr__9.set('fieldImages', {'OBJECTID': '', 'CLASS': '', 'NAME': '', 'PINYIN': '', });
lyr__10.set('fieldImages', {'OBJECTID': '', 'CLASS': '', 'NAME': '', 'PINYIN': '', 'GNID': '', 'XZNAME': '', });
lyr__0.set('fieldLabels', {'OBJECTID': 'inline label', 'PAC': 'inline label', 'NAME': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr__1.set('fieldLabels', {'OBJECTID': 'inline label', 'GB': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr__2.set('fieldLabels', {'OBJECTID': 'inline label', 'GB': 'inline label', 'HYDC': 'inline label', 'NAME': 'inline label', 'PERIOD': 'inline label', 'VOL': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr__3.set('fieldLabels', {'OBJECTID': 'inline label', 'GB': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr__4.set('fieldLabels', {'OBJECTID': 'inline label', 'GB': 'inline label', 'HYDC': 'inline label', 'NAME': 'inline label', 'PERIOD': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr__5.set('fieldLabels', {'OBJECTID': 'inline label', 'GB': 'inline label', 'NAME': 'inline label', 'ANGLE': 'inline label', });
lyr__6.set('fieldLabels', {'OBJECTID': 'inline label', 'GB': 'inline label', 'ANGLE': 'inline label', });
lyr__7.set('fieldLabels', {'OBJECTID': 'inline label', 'GB': 'inline label', 'RN': 'inline label', 'NAME': 'inline label', 'TYPE': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr__8.set('fieldLabels', {'OBJECTID': 'inline label', 'GB': 'inline label', 'RN': 'inline label', 'NAME': 'inline label', 'RTEG': 'inline label', 'TYPE': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr__9.set('fieldLabels', {'OBJECTID': 'inline label', 'CLASS': 'inline label', 'NAME': 'inline label', 'PINYIN': 'inline label', });
lyr__10.set('fieldLabels', {'OBJECTID': 'inline label', 'CLASS': 'inline label', 'NAME': 'inline label', 'PINYIN': 'inline label', 'GNID': 'inline label', 'XZNAME': 'inline label', });
lyr__10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});