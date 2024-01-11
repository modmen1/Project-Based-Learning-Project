var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RafineriaGdaska_1 = new ol.format.GeoJSON();
var features_RafineriaGdaska_1 = format_RafineriaGdaska_1.readFeatures(json_RafineriaGdaska_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RafineriaGdaska_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RafineriaGdaska_1.addFeatures(features_RafineriaGdaska_1);
var lyr_RafineriaGdaska_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RafineriaGdaska_1, 
                style: style_RafineriaGdaska_1,
                interactive: true,
                title: '<img src="styles/legend/RafineriaGdaska_1.png" /> Rafineria Gdańska'
            });
var format_Zabudowanieprzemysowe_2 = new ol.format.GeoJSON();
var features_Zabudowanieprzemysowe_2 = format_Zabudowanieprzemysowe_2.readFeatures(json_Zabudowanieprzemysowe_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zabudowanieprzemysowe_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zabudowanieprzemysowe_2.addFeatures(features_Zabudowanieprzemysowe_2);
var lyr_Zabudowanieprzemysowe_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zabudowanieprzemysowe_2, 
                style: style_Zabudowanieprzemysowe_2,
                interactive: true,
                title: '<img src="styles/legend/Zabudowanieprzemysowe_2.png" /> Zabudowanie przemysłowe'
            });
var format_Brama_3 = new ol.format.GeoJSON();
var features_Brama_3 = format_Brama_3.readFeatures(json_Brama_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brama_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brama_3.addFeatures(features_Brama_3);
var lyr_Brama_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brama_3, 
                style: style_Brama_3,
                interactive: true,
                title: '<img src="styles/legend/Brama_3.png" /> Brama'
            });
var format_Tory_4 = new ol.format.GeoJSON();
var features_Tory_4 = format_Tory_4.readFeatures(json_Tory_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tory_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tory_4.addFeatures(features_Tory_4);
var lyr_Tory_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tory_4, 
                style: style_Tory_4,
                interactive: true,
                title: '<img src="styles/legend/Tory_4.png" /> Tory'
            });
var format_Drogiwewntrzne_5 = new ol.format.GeoJSON();
var features_Drogiwewntrzne_5 = format_Drogiwewntrzne_5.readFeatures(json_Drogiwewntrzne_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drogiwewntrzne_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drogiwewntrzne_5.addFeatures(features_Drogiwewntrzne_5);
var lyr_Drogiwewntrzne_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drogiwewntrzne_5, 
                style: style_Drogiwewntrzne_5,
                interactive: true,
                title: '<img src="styles/legend/Drogiwewntrzne_5.png" /> Drogi wewnętrzne'
            });
var format_Ogrodzenie_6 = new ol.format.GeoJSON();
var features_Ogrodzenie_6 = format_Ogrodzenie_6.readFeatures(json_Ogrodzenie_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ogrodzenie_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ogrodzenie_6.addFeatures(features_Ogrodzenie_6);
var lyr_Ogrodzenie_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ogrodzenie_6, 
                style: style_Ogrodzenie_6,
                interactive: true,
                title: '<img src="styles/legend/Ogrodzenie_6.png" /> Ogrodzenie'
            });
var format_2Drogiwewntrzne_7 = new ol.format.GeoJSON();
var features_2Drogiwewntrzne_7 = format_2Drogiwewntrzne_7.readFeatures(json_2Drogiwewntrzne_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Drogiwewntrzne_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Drogiwewntrzne_7.addFeatures(features_2Drogiwewntrzne_7);
var lyr_2Drogiwewntrzne_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Drogiwewntrzne_7, 
                style: style_2Drogiwewntrzne_7,
                interactive: true,
                title: '<img src="styles/legend/2Drogiwewntrzne_7.png" /> 2Drogi wewnętrzne'
            });
var format_2DrogaDojazdowa_8 = new ol.format.GeoJSON();
var features_2DrogaDojazdowa_8 = format_2DrogaDojazdowa_8.readFeatures(json_2DrogaDojazdowa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2DrogaDojazdowa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2DrogaDojazdowa_8.addFeatures(features_2DrogaDojazdowa_8);
var lyr_2DrogaDojazdowa_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2DrogaDojazdowa_8, 
                style: style_2DrogaDojazdowa_8,
                interactive: true,
                title: '<img src="styles/legend/2DrogaDojazdowa_8.png" /> 2Droga Dojazdowa'
            });
var format_2Zabudowanieprzemysowe_9 = new ol.format.GeoJSON();
var features_2Zabudowanieprzemysowe_9 = format_2Zabudowanieprzemysowe_9.readFeatures(json_2Zabudowanieprzemysowe_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Zabudowanieprzemysowe_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Zabudowanieprzemysowe_9.addFeatures(features_2Zabudowanieprzemysowe_9);
var lyr_2Zabudowanieprzemysowe_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Zabudowanieprzemysowe_9, 
                style: style_2Zabudowanieprzemysowe_9,
                interactive: true,
                title: '<img src="styles/legend/2Zabudowanieprzemysowe_9.png" /> 2Zabudowanie przemysłowe'
            });
var format_2BramaWjazdowa_10 = new ol.format.GeoJSON();
var features_2BramaWjazdowa_10 = format_2BramaWjazdowa_10.readFeatures(json_2BramaWjazdowa_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2BramaWjazdowa_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2BramaWjazdowa_10.addFeatures(features_2BramaWjazdowa_10);
var lyr_2BramaWjazdowa_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2BramaWjazdowa_10, 
                style: style_2BramaWjazdowa_10,
                interactive: true,
                title: '<img src="styles/legend/2BramaWjazdowa_10.png" /> 2Brama Wjazdowa'
            });
var format_Terminalprzeadunkowy_11 = new ol.format.GeoJSON();
var features_Terminalprzeadunkowy_11 = format_Terminalprzeadunkowy_11.readFeatures(json_Terminalprzeadunkowy_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terminalprzeadunkowy_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terminalprzeadunkowy_11.addFeatures(features_Terminalprzeadunkowy_11);
var lyr_Terminalprzeadunkowy_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Terminalprzeadunkowy_11, 
                style: style_Terminalprzeadunkowy_11,
                interactive: true,
                title: '<img src="styles/legend/Terminalprzeadunkowy_11.png" /> Terminal przeładunkowy'
            });
var format_3Zabudowanieprzemysowe_12 = new ol.format.GeoJSON();
var features_3Zabudowanieprzemysowe_12 = format_3Zabudowanieprzemysowe_12.readFeatures(json_3Zabudowanieprzemysowe_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3Zabudowanieprzemysowe_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3Zabudowanieprzemysowe_12.addFeatures(features_3Zabudowanieprzemysowe_12);
var lyr_3Zabudowanieprzemysowe_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3Zabudowanieprzemysowe_12, 
                style: style_3Zabudowanieprzemysowe_12,
                interactive: true,
                title: '<img src="styles/legend/3Zabudowanieprzemysowe_12.png" /> 3Zabudowanie przemysłowe'
            });
var format_3Ogrodzenie_13 = new ol.format.GeoJSON();
var features_3Ogrodzenie_13 = format_3Ogrodzenie_13.readFeatures(json_3Ogrodzenie_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3Ogrodzenie_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3Ogrodzenie_13.addFeatures(features_3Ogrodzenie_13);
var lyr_3Ogrodzenie_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3Ogrodzenie_13, 
                style: style_3Ogrodzenie_13,
                interactive: true,
                title: '<img src="styles/legend/3Ogrodzenie_13.png" /> 3Ogrodzenie'
            });
var format_3Drogiwewntrzne_14 = new ol.format.GeoJSON();
var features_3Drogiwewntrzne_14 = format_3Drogiwewntrzne_14.readFeatures(json_3Drogiwewntrzne_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3Drogiwewntrzne_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3Drogiwewntrzne_14.addFeatures(features_3Drogiwewntrzne_14);
var lyr_3Drogiwewntrzne_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3Drogiwewntrzne_14, 
                style: style_3Drogiwewntrzne_14,
                interactive: true,
                title: '<img src="styles/legend/3Drogiwewntrzne_14.png" /> 3Drogi wewnętrzne'
            });
var format_3brama_15 = new ol.format.GeoJSON();
var features_3brama_15 = format_3brama_15.readFeatures(json_3brama_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3brama_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3brama_15.addFeatures(features_3brama_15);
var lyr_3brama_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3brama_15, 
                style: style_3brama_15,
                interactive: true,
                title: '<img src="styles/legend/3brama_15.png" /> 3brama'
            });

lyr_OSMStandard_0.setVisible(true);lyr_RafineriaGdaska_1.setVisible(true);lyr_Zabudowanieprzemysowe_2.setVisible(true);lyr_Brama_3.setVisible(true);lyr_Tory_4.setVisible(true);lyr_Drogiwewntrzne_5.setVisible(true);lyr_Ogrodzenie_6.setVisible(true);lyr_2Drogiwewntrzne_7.setVisible(true);lyr_2DrogaDojazdowa_8.setVisible(true);lyr_2Zabudowanieprzemysowe_9.setVisible(true);lyr_2BramaWjazdowa_10.setVisible(true);lyr_Terminalprzeadunkowy_11.setVisible(true);lyr_3Zabudowanieprzemysowe_12.setVisible(true);lyr_3Ogrodzenie_13.setVisible(true);lyr_3Drogiwewntrzne_14.setVisible(true);lyr_3brama_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RafineriaGdaska_1,lyr_Zabudowanieprzemysowe_2,lyr_Brama_3,lyr_Tory_4,lyr_Drogiwewntrzne_5,lyr_Ogrodzenie_6,lyr_2Drogiwewntrzne_7,lyr_2DrogaDojazdowa_8,lyr_2Zabudowanieprzemysowe_9,lyr_2BramaWjazdowa_10,lyr_Terminalprzeadunkowy_11,lyr_3Zabudowanieprzemysowe_12,lyr_3Ogrodzenie_13,lyr_3Drogiwewntrzne_14,lyr_3brama_15];
lyr_RafineriaGdaska_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'start_date': 'start_date', 'power': 'power', 'plant_sour': 'plant_sour', 'plant_outp': 'plant_outp', 'plant_meth': 'plant_meth', 'substation': 'substation', 'substance': 'substance', 'pipeline': 'pipeline', 'barrier': 'barrier', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator': 'operator', 'name': 'name', 'industrial': 'industrial', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', });
lyr_Zabudowanieprzemysowe_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr_city_': 'addr_city_', 'historic': 'historic', 'height': 'height', 'start_date': 'start_date', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'voltage': 'voltage', 'power': 'power', 'operator': 'operator', 'location': 'location', 'gas_insula': 'gas_insula', 'frequency': 'frequency', 'brand': 'brand', 'amenity': 'amenity', 'layer': 'layer', 'man_made': 'man_made', 'building_l': 'building_l', 'name': 'name', 'source_add': 'source_add', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_count': 'addr_count', 'addr_city': 'addr_city', });
lyr_Brama_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', 'name': 'name', });
lyr_Tory_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'voltage': 'voltage', 'frequency': 'frequency', 'layer': 'layer', 'bridge': 'bridge', 'service': 'service', 'gauge': 'gauge', 'electrifie': 'electrifie', });
lyr_Drogiwewntrzne_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'access': 'access', 'tunnel': 'tunnel', 'oneway': 'oneway', 'service': 'service', 'name': 'name', 'foot': 'foot', 'cutting': 'cutting', 'bicycle': 'bicycle', 'highway': 'highway', });
lyr_Ogrodzenie_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', });
lyr_2Drogiwewntrzne_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'access': 'access', 'smoothness': 'smoothness', 'service': 'service', 'highway': 'highway', });
lyr_2DrogaDojazdowa_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'smoothness': 'smoothness', 'access': 'access', 'service': 'service', });
lyr_2Zabudowanieprzemysowe_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'man_made': 'man_made', 'source_add': 'source_add', 'addr_stree': 'addr_stree', 'addr_str_1': 'addr_str_1', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city_': 'addr_city_', 'addr_city': 'addr_city', });
lyr_2BramaWjazdowa_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', 'access': 'access', });
lyr_Terminalprzeadunkowy_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'industrial': 'industrial', 'depot': 'depot', 'website': 'website', 'operator': 'operator', 'descriptio': 'descriptio', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'name': 'name', 'military': 'military', 'wikimedia_': 'wikimedia_', 'wikimedi_1': 'wikimedi_1', 'name_de': 'name_de', 'barrier': 'barrier', 'addr_postc': 'addr_postc', 'addr_count': 'addr_count', 'addr_city_': 'addr_city_', 'addr_city': 'addr_city', });
lyr_3Zabudowanieprzemysowe_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'substation': 'substation', 'power': 'power', 'descriptio': 'descriptio', 'descript_1': 'descript_1', 'content': 'content', 'capacity': 'capacity', 'man_made': 'man_made', 'image': 'image', 'layer': 'layer', 'website': 'website', 'short_name': 'short_name', 'phone': 'phone', 'office': 'office', 'name': 'name', 'email': 'email', 'building_l': 'building_l', 'building_f': 'building_f', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', });
lyr_3Ogrodzenie_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', });
lyr_3Drogiwewntrzne_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'access': 'access', 'service': 'service', 'highway': 'highway', });
lyr_3brama_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', 'access': 'access', });
lyr_RafineriaGdaska_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'start_date': 'TextEdit', 'power': 'TextEdit', 'plant_sour': '', 'plant_outp': '', 'plant_meth': '', 'substation': 'TextEdit', 'substance': 'TextEdit', 'pipeline': 'TextEdit', 'barrier': 'TextEdit', 'operator_w': '', 'operator_1': '', 'operator': 'TextEdit', 'name': 'TextEdit', 'industrial': 'TextEdit', 'brand_wiki': '', 'brand_wi_1': '', });
lyr_Zabudowanieprzemysowe_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr_city_': '', 'historic': '', 'height': '', 'start_date': '', 'generator_': '', 'generato_1': '', 'generato_2': '', 'generato_3': '', 'voltage': '', 'power': '', 'operator': '', 'location': '', 'gas_insula': '', 'frequency': '', 'brand': '', 'amenity': '', 'layer': '', 'man_made': '', 'building_l': '', 'name': '', 'source_add': '', 'addr_stree': '', 'addr_postc': '', 'addr_house': '', 'addr_count': '', 'addr_city': '', });
lyr_Brama_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', 'name': '', });
lyr_Tory_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'voltage': '', 'frequency': '', 'layer': '', 'bridge': '', 'service': '', 'gauge': '', 'electrifie': '', });
lyr_Drogiwewntrzne_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'access': '', 'tunnel': '', 'oneway': '', 'service': '', 'name': '', 'foot': '', 'cutting': '', 'bicycle': '', 'highway': '', });
lyr_Ogrodzenie_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', });
lyr_2Drogiwewntrzne_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'access': 'TextEdit', 'smoothness': 'TextEdit', 'service': 'TextEdit', 'highway': 'TextEdit', });
lyr_2DrogaDojazdowa_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'access': 'TextEdit', 'service': 'TextEdit', });
lyr_2Zabudowanieprzemysowe_9.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'man_made': '', 'source_add': '', 'addr_stree': '', 'addr_str_1': '', 'addr_postc': '', 'addr_house': '', 'addr_city_': '', 'addr_city': '', });
lyr_2BramaWjazdowa_10.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', 'access': '', });
lyr_Terminalprzeadunkowy_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'industrial': 'TextEdit', 'depot': 'TextEdit', 'website': 'TextEdit', 'operator': 'TextEdit', 'descriptio': '', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', 'military': 'TextEdit', 'wikimedia_': '', 'wikimedi_1': '', 'name_de': '', 'barrier': 'TextEdit', 'addr_postc': '', 'addr_count': '', 'addr_city_': '', 'addr_city': '', });
lyr_3Zabudowanieprzemysowe_12.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'substation': '', 'power': '', 'descriptio': '', 'descript_1': '', 'content': '', 'capacity': '', 'man_made': '', 'image': '', 'layer': '', 'website': '', 'short_name': '', 'phone': '', 'office': '', 'name': '', 'email': '', 'building_l': '', 'building_f': '', 'addr_stree': '', 'addr_postc': '', 'addr_house': '', 'addr_city': '', });
lyr_3Ogrodzenie_13.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', });
lyr_3Drogiwewntrzne_14.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'access': 'TextEdit', 'service': 'TextEdit', 'highway': 'TextEdit', });
lyr_3brama_15.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', });
lyr_RafineriaGdaska_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'start_date': 'no label', 'power': 'no label', 'plant_sour': 'no label', 'plant_outp': 'no label', 'plant_meth': 'no label', 'substation': 'no label', 'substance': 'no label', 'pipeline': 'no label', 'barrier': 'no label', 'operator_w': 'no label', 'operator_1': 'no label', 'operator': 'no label', 'name': 'no label', 'industrial': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', });
lyr_Zabudowanieprzemysowe_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr_city_': 'no label', 'historic': 'no label', 'height': 'no label', 'start_date': 'no label', 'generator_': 'no label', 'generato_1': 'no label', 'generato_2': 'no label', 'generato_3': 'no label', 'voltage': 'no label', 'power': 'no label', 'operator': 'no label', 'location': 'no label', 'gas_insula': 'no label', 'frequency': 'no label', 'brand': 'no label', 'amenity': 'no label', 'layer': 'no label', 'man_made': 'no label', 'building_l': 'no label', 'name': 'no label', 'source_add': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', });
lyr_Brama_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', 'name': 'no label', });
lyr_Tory_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'voltage': 'no label', 'frequency': 'no label', 'layer': 'no label', 'bridge': 'no label', 'service': 'no label', 'gauge': 'no label', 'electrifie': 'no label', });
lyr_Drogiwewntrzne_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'access': 'no label', 'tunnel': 'no label', 'oneway': 'no label', 'service': 'no label', 'name': 'no label', 'foot': 'no label', 'cutting': 'no label', 'bicycle': 'no label', 'highway': 'no label', });
lyr_Ogrodzenie_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', });
lyr_2Drogiwewntrzne_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'access': 'no label', 'smoothness': 'no label', 'service': 'no label', 'highway': 'no label', });
lyr_2DrogaDojazdowa_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'access': 'no label', 'service': 'no label', });
lyr_2Zabudowanieprzemysowe_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'man_made': 'no label', 'source_add': 'no label', 'addr_stree': 'no label', 'addr_str_1': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city_': 'no label', 'addr_city': 'no label', });
lyr_2BramaWjazdowa_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', 'access': 'no label', });
lyr_Terminalprzeadunkowy_11.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'industrial': 'no label', 'depot': 'no label', 'website': 'no label', 'operator': 'no label', 'descriptio': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'name': 'no label', 'military': 'no label', 'wikimedia_': 'no label', 'wikimedi_1': 'no label', 'name_de': 'no label', 'barrier': 'no label', 'addr_postc': 'no label', 'addr_count': 'no label', 'addr_city_': 'no label', 'addr_city': 'no label', });
lyr_3Zabudowanieprzemysowe_12.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'substation': 'no label', 'power': 'no label', 'descriptio': 'no label', 'descript_1': 'no label', 'content': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'image': 'no label', 'layer': 'no label', 'website': 'no label', 'short_name': 'no label', 'phone': 'no label', 'office': 'no label', 'name': 'no label', 'email': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', });
lyr_3Ogrodzenie_13.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', });
lyr_3Drogiwewntrzne_14.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'access': 'no label', 'service': 'no label', 'highway': 'no label', });
lyr_3brama_15.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', 'access': 'no label', });
lyr_3brama_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});