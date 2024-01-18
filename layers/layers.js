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
var format_building_16 = new ol.format.GeoJSON();
var features_building_16 = format_building_16.readFeatures(json_building_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_16.addFeatures(features_building_16);
var lyr_building_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_16, 
                style: style_building_16,
                interactive: true,
                title: '<img src="styles/legend/building_16.png" /> building'
            });
var format_railway_17 = new ol.format.GeoJSON();
var features_railway_17 = format_railway_17.readFeatures(json_railway_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_17.addFeatures(features_railway_17);
var lyr_railway_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_17, 
                style: style_railway_17,
                interactive: true,
                title: '<img src="styles/legend/railway_17.png" /> railway'
            });
var format_barrier_18 = new ol.format.GeoJSON();
var features_barrier_18 = format_barrier_18.readFeatures(json_barrier_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrier_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrier_18.addFeatures(features_barrier_18);
var lyr_barrier_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barrier_18, 
                style: style_barrier_18,
                interactive: true,
    title: 'barrier<br />\
    <img src="styles/legend/barrier_18_0.png" /> red;white<br />\
    <img src="styles/legend/barrier_18_1.png" /> red-white<br />\
    <img src="styles/legend/barrier_18_2.png" /> silver<br />\
    <img src="styles/legend/barrier_18_3.png" /> <br />\
    <img src="styles/legend/barrier_18_4.png" /> white;red<br />\
    <img src="styles/legend/barrier_18_5.png" /> black<br />\
    <img src="styles/legend/barrier_18_6.png" /> yellow-black<br />\
    <img src="styles/legend/barrier_18_7.png" /> red<br />'
        });
var format_building_19 = new ol.format.GeoJSON();
var features_building_19 = format_building_19.readFeatures(json_building_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_19.addFeatures(features_building_19);
var lyr_building_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_19, 
                style: style_building_19,
                interactive: true,
                title: '<img src="styles/legend/building_19.png" /> building'
            });
var format_building_20 = new ol.format.GeoJSON();
var features_building_20 = format_building_20.readFeatures(json_building_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_20.addFeatures(features_building_20);
var lyr_building_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_20, 
                style: style_building_20,
                interactive: true,
                title: '<img src="styles/legend/building_20.png" /> building'
            });
var format_barrier_21 = new ol.format.GeoJSON();
var features_barrier_21 = format_barrier_21.readFeatures(json_barrier_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrier_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrier_21.addFeatures(features_barrier_21);
var lyr_barrier_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barrier_21, 
                style: style_barrier_21,
                interactive: true,
                title: '<img src="styles/legend/barrier_21.png" /> barrier'
            });
var format_access_22 = new ol.format.GeoJSON();
var features_access_22 = format_access_22.readFeatures(json_access_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_access_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_access_22.addFeatures(features_access_22);
var lyr_access_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_access_22, 
                style: style_access_22,
                interactive: true,
                title: '<img src="styles/legend/access_22.png" /> access'
            });
var format_access_23 = new ol.format.GeoJSON();
var features_access_23 = format_access_23.readFeatures(json_access_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_access_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_access_23.addFeatures(features_access_23);
var lyr_access_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_access_23, 
                style: style_access_23,
                interactive: true,
    title: 'access<br />\
    <img src="styles/legend/access_23_0.png" /> <br />\
    <img src="styles/legend/access_23_1.png" /> lime<br />'
        });
var format_building_24 = new ol.format.GeoJSON();
var features_building_24 = format_building_24.readFeatures(json_building_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_24.addFeatures(features_building_24);
var lyr_building_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_24, 
                style: style_building_24,
                interactive: true,
                title: '<img src="styles/legend/building_24.png" /> building'
            });
var format_access_25 = new ol.format.GeoJSON();
var features_access_25 = format_access_25.readFeatures(json_access_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_access_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_access_25.addFeatures(features_access_25);
var lyr_access_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_access_25, 
                style: style_access_25,
                interactive: true,
                title: '<img src="styles/legend/access_25.png" /> access'
            });
var format_access_26 = new ol.format.GeoJSON();
var features_access_26 = format_access_26.readFeatures(json_access_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_access_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_access_26.addFeatures(features_access_26);
var lyr_access_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_access_26, 
                style: style_access_26,
                interactive: true,
                title: '<img src="styles/legend/access_26.png" /> access'
            });
var format_barrier_27 = new ol.format.GeoJSON();
var features_barrier_27 = format_barrier_27.readFeatures(json_barrier_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrier_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrier_27.addFeatures(features_barrier_27);
var lyr_barrier_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barrier_27, 
                style: style_barrier_27,
                interactive: true,
                title: '<img src="styles/legend/barrier_27.png" /> barrier'
            });
var format_railway_28 = new ol.format.GeoJSON();
var features_railway_28 = format_railway_28.readFeatures(json_railway_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_28.addFeatures(features_railway_28);
var lyr_railway_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_28, 
                style: style_railway_28,
                interactive: true,
                title: '<img src="styles/legend/railway_28.png" /> railway'
            });
var format_building_29 = new ol.format.GeoJSON();
var features_building_29 = format_building_29.readFeatures(json_building_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_29.addFeatures(features_building_29);
var lyr_building_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_29, 
                style: style_building_29,
                interactive: true,
                title: '<img src="styles/legend/building_29.png" /> building'
            });
var format_railway_30 = new ol.format.GeoJSON();
var features_railway_30 = format_railway_30.readFeatures(json_railway_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_30.addFeatures(features_railway_30);
var lyr_railway_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_30, 
                style: style_railway_30,
                interactive: true,
                title: '<img src="styles/legend/railway_30.png" /> railway'
            });
var format_railway_31 = new ol.format.GeoJSON();
var features_railway_31 = format_railway_31.readFeatures(json_railway_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_31.addFeatures(features_railway_31);
var lyr_railway_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_31, 
                style: style_railway_31,
                interactive: true,
                title: '<img src="styles/legend/railway_31.png" /> railway'
            });
var format_barrier_32 = new ol.format.GeoJSON();
var features_barrier_32 = format_barrier_32.readFeatures(json_barrier_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrier_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrier_32.addFeatures(features_barrier_32);
var lyr_barrier_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barrier_32, 
                style: style_barrier_32,
                interactive: true,
                title: '<img src="styles/legend/barrier_32.png" /> barrier'
            });
var format_barrier_33 = new ol.format.GeoJSON();
var features_barrier_33 = format_barrier_33.readFeatures(json_barrier_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrier_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrier_33.addFeatures(features_barrier_33);
var lyr_barrier_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barrier_33, 
                style: style_barrier_33,
                interactive: true,
                title: '<img src="styles/legend/barrier_33.png" /> barrier'
            });
var format_railway_34 = new ol.format.GeoJSON();
var features_railway_34 = format_railway_34.readFeatures(json_railway_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_34.addFeatures(features_railway_34);
var lyr_railway_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_34, 
                style: style_railway_34,
                interactive: true,
                title: '<img src="styles/legend/railway_34.png" /> railway'
            });
var format_railway_35 = new ol.format.GeoJSON();
var features_railway_35 = format_railway_35.readFeatures(json_railway_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_35.addFeatures(features_railway_35);
var lyr_railway_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_35, 
                style: style_railway_35,
                interactive: true,
                title: '<img src="styles/legend/railway_35.png" /> railway'
            });
var format_access_36 = new ol.format.GeoJSON();
var features_access_36 = format_access_36.readFeatures(json_access_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_access_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_access_36.addFeatures(features_access_36);
var lyr_access_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_access_36, 
                style: style_access_36,
                interactive: true,
                title: '<img src="styles/legend/access_36.png" /> access'
            });
var format_barrier_37 = new ol.format.GeoJSON();
var features_barrier_37 = format_barrier_37.readFeatures(json_barrier_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrier_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrier_37.addFeatures(features_barrier_37);
var lyr_barrier_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barrier_37, 
                style: style_barrier_37,
                interactive: true,
    title: 'barrier<br />\
    <img src="styles/legend/barrier_37_0.png" /> gray<br />\
    <img src="styles/legend/barrier_37_1.png" /> red;white<br />\
    <img src="styles/legend/barrier_37_2.png" /> <br />\
    <img src="styles/legend/barrier_37_3.png" /> green<br />\
    <img src="styles/legend/barrier_37_4.png" /> black<br />\
    <img src="styles/legend/barrier_37_5.png" /> yellow<br />'
        });
var format_barrier_38 = new ol.format.GeoJSON();
var features_barrier_38 = format_barrier_38.readFeatures(json_barrier_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrier_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrier_38.addFeatures(features_barrier_38);
var lyr_barrier_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barrier_38, 
                style: style_barrier_38,
                interactive: true,
                title: '<img src="styles/legend/barrier_38.png" /> barrier'
            });

lyr_OSMStandard_0.setVisible(true);lyr_RafineriaGdaska_1.setVisible(true);lyr_Zabudowanieprzemysowe_2.setVisible(true);lyr_Brama_3.setVisible(true);lyr_Tory_4.setVisible(true);lyr_Drogiwewntrzne_5.setVisible(true);lyr_Ogrodzenie_6.setVisible(true);lyr_2Drogiwewntrzne_7.setVisible(true);lyr_2DrogaDojazdowa_8.setVisible(true);lyr_2Zabudowanieprzemysowe_9.setVisible(true);lyr_2BramaWjazdowa_10.setVisible(true);lyr_Terminalprzeadunkowy_11.setVisible(true);lyr_3Zabudowanieprzemysowe_12.setVisible(true);lyr_3Ogrodzenie_13.setVisible(true);lyr_3Drogiwewntrzne_14.setVisible(true);lyr_3brama_15.setVisible(true);lyr_building_16.setVisible(true);lyr_railway_17.setVisible(true);lyr_barrier_18.setVisible(true);lyr_building_19.setVisible(true);lyr_building_20.setVisible(true);lyr_barrier_21.setVisible(true);lyr_access_22.setVisible(true);lyr_access_23.setVisible(true);lyr_building_24.setVisible(true);lyr_access_25.setVisible(true);lyr_access_26.setVisible(true);lyr_barrier_27.setVisible(true);lyr_railway_28.setVisible(true);lyr_building_29.setVisible(true);lyr_railway_30.setVisible(true);lyr_railway_31.setVisible(true);lyr_barrier_32.setVisible(true);lyr_barrier_33.setVisible(true);lyr_railway_34.setVisible(true);lyr_railway_35.setVisible(true);lyr_access_36.setVisible(true);lyr_barrier_37.setVisible(true);lyr_barrier_38.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RafineriaGdaska_1,lyr_Zabudowanieprzemysowe_2,lyr_Brama_3,lyr_Tory_4,lyr_Drogiwewntrzne_5,lyr_Ogrodzenie_6,lyr_2Drogiwewntrzne_7,lyr_2DrogaDojazdowa_8,lyr_2Zabudowanieprzemysowe_9,lyr_2BramaWjazdowa_10,lyr_Terminalprzeadunkowy_11,lyr_3Zabudowanieprzemysowe_12,lyr_3Ogrodzenie_13,lyr_3Drogiwewntrzne_14,lyr_3brama_15,lyr_building_16,lyr_railway_17,lyr_barrier_18,lyr_building_19,lyr_building_20,lyr_barrier_21,lyr_access_22,lyr_access_23,lyr_building_24,lyr_access_25,lyr_access_26,lyr_barrier_27,lyr_railway_28,lyr_building_29,lyr_railway_30,lyr_railway_31,lyr_barrier_32,lyr_barrier_33,lyr_railway_34,lyr_railway_35,lyr_access_36,lyr_barrier_37,lyr_barrier_38];
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
lyr_building_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'fuel:h70': 'fuel:h70', 'fuel:h35': 'fuel:h35', 'note:geometry': 'note:geometry', 'indoor': 'indoor', 'covered': 'covered', 'bicycle_parking': 'bicycle_parking', 'substance': 'substance', 'pipeline': 'pipeline', 'recycling:plastic': 'recycling:plastic', 'recycling:glass': 'recycling:glass', 'addr:place': 'addr:place', 'addr:floor': 'addr:floor', 'designation': 'designation', 'railway:signal_box': 'railway:signal_box', 'railway:ref': 'railway:ref', 'railway': 'railway', 'max_level': 'max_level', 'operator:wikipedia': 'operator:wikipedia', 'loc_name': 'loc_name', 'landuse': 'landuse', 'min_height': 'min_height', 'craft': 'craft', 'construction': 'construction', 'pumping_station': 'pumping_station', 'roof:orientation': 'roof:orientation', 'min_age': 'min_age', 'healthcare:speciality': 'healthcare:speciality', 'service:vehicle:new_car_sales': 'service:vehicle:new_car_sales', 'mapillary': 'mapillary', 'shelter_type': 'shelter_type', 'unisex': 'unisex', 'name:signed': 'name:signed', 'service:vehicle:tyres': 'service:vehicle:tyres', 'addr:country': 'addr:country', 'building:min_level': 'building:min_level', 'contact:fax': 'contact:fax', 'contact:email': 'contact:email', 'stars': 'stars', 'contact:linkedin': 'contact:linkedin', 'contact:instagram': 'contact:instagram', 'contact:facebook': 'contact:facebook', 'roof:material': 'roof:material', 'building:levels:underground': 'building:levels:underground', 'gas_insulated': 'gas_insulated', 'service': 'service', 'building:use': 'building:use', 'compressed_air': 'compressed_air', 'product': 'product', 'wikimedia_commons': 'wikimedia_commons', 'service_times': 'service_times', 'parish:wikipedia': 'parish:wikipedia', 'parish:wikidata': 'parish:wikidata', 'facebook': 'facebook', 'recycling:scrap_metal': 'recycling:scrap_metal', 'recycling:paper': 'recycling:paper', 'recycling:electrical_appliances': 'recycling:electrical_appliances', 'recycling:cardboard': 'recycling:cardboard', 'recycling:cans': 'recycling:cans', 'roof:height': 'roof:height', 'material': 'material', 'source:opening_hours': 'source:opening_hours', 'min_level': 'min_level', 'level': 'level', 'highway': 'highway', 'image': 'image', 'bell_tower': 'bell_tower', 'indoor_seating': 'indoor_seating', 'drive_through': 'drive_through', 'delivery': 'delivery', 'atm': 'atm', 'payment:uta': 'payment:uta', 'payment:routex': 'payment:routex', 'payment:dkv': 'payment:dkv', 'fuel:octane_98': 'fuel:octane_98', 'fuel:octane_95': 'fuel:octane_95', 'fuel:lpg': 'fuel:lpg', 'fuel:diesel': 'fuel:diesel', 'fuel:adblue': 'fuel:adblue', 'social_facility': 'social_facility', 'contact:phone': 'contact:phone', 'tower:type': 'tower:type', 'ref:addr': 'ref:addr', 'old_addr:city': 'old_addr:city', 'police': 'police', 'content': 'content', 'service:vehicle:inspection': 'service:vehicle:inspection', 'service:vehicle:diagnostics': 'service:vehicle:diagnostics', 'service:vehicle:brakes': 'service:vehicle:brakes', 'payment:contactless': 'payment:contactless', 'payment:coins': 'payment:coins', 'diet:vegetarian': 'diet:vegetarian', 'company': 'company', 'opening_hours:workshop': 'opening_hours:workshop', 'name:pl': 'name:pl', 'name:be': 'name:be', 'takeaway': 'takeaway', 'website:ua': 'website:ua', 'ref:csioz': 'ref:csioz', 'dispensing': 'dispensing', 'operator:wikidata': 'operator:wikidata', 'ref:nid': 'ref:nid', 'parish': 'parish', 'heritage:operator': 'heritage:operator', 'heritage': 'heritage', 'diocese': 'diocese', 'deanery': 'deanery', 'church:type': 'church:type', 'disused': 'disused', 'brand:website': 'brand:website', 'ruins': 'ruins', 'sport:cycling': 'sport:cycling', 'name:uk': 'name:uk', 'supervised': 'supervised', 'building:material': 'building:material', 'building:flats': 'building:flats', 'club': 'club', 'opening_hours:signed': 'opening_hours:signed', 'noname': 'noname', 'check_date:opening_hours': 'check_date:opening_hours', 'nohousenumber': 'nohousenumber', 'house': 'house', 'waste': 'waste', 'old_addr:street': 'old_addr:street', 'abandoned': 'abandoned', 'service:vehicle:car_repair': 'service:vehicle:car_repair', 'self_service': 'self_service', 'automated': 'automated', 'was:shop': 'was:shop', 'historic': 'historic', 'disused:shop': 'disused:shop', 'disused:name': 'disused:name', 'park_ride': 'park_ride', 'fee': 'fee', 'capacity:disabled': 'capacity:disabled', 'source:building': 'source:building', 'outdoor_seating': 'outdoor_seating', 'cuisine': 'cuisine', 'old_addr:housenumber': 'old_addr:housenumber', 'man_made': 'man_made', 'name:ru': 'name:ru', 'sport': 'sport', 'operator:website': 'operator:website', 'operator:type': 'operator:type', 'operator:abbr': 'operator:abbr', 'leisure': 'leisure', 'source:operator': 'source:operator', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'frequency': 'frequency', 'recycling_type': 'recycling_type', 'location': 'location', 'capacity': 'capacity', 'old_addr:housename': 'old_addr:housename', 'toilets:wheelchair': 'toilets:wheelchair', 'changing_table': 'changing_table', 'payment:credit_cards': 'payment:credit_cards', 'payment:cash': 'payment:cash', 'rooms': 'rooms', 'source:name': 'source:name', 'operator': 'operator', 'roof:levels': 'roof:levels', 'parking': 'parking', 'access': 'access', 'denomination': 'denomination', 'religion': 'religion', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'survey:date': 'survey:date', 'aeroway': 'aeroway', 'source:office': 'source:office', 'fax': 'fax', 'wheelchair': 'wheelchair', 'toilets': 'toilets', 'stroller': 'stroller', 'smoking': 'smoking', 'shop': 'shop', 'payment:visa_electron': 'payment:visa_electron', 'payment:visa_debit': 'payment:visa_debit', 'payment:visa_contactless': 'payment:visa_contactless', 'payment:visa': 'payment:visa', 'payment:mastercard_debit': 'payment:mastercard_debit', 'payment:mastercard_contactless': 'payment:mastercard_contactless', 'payment:mastercard': 'payment:mastercard', 'payment:maestro': 'payment:maestro', 'payment:debit_cards': 'payment:debit_cards', 'payment:apple_pay': 'payment:apple_pay', 'opening_hours': 'opening_hours', 'official_name': 'official_name', 'internet_access:ssid': 'internet_access:ssid', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'email': 'email', 'branch': 'branch', 'alt_name': 'alt_name', 'air_conditioning': 'air_conditioning', 'name:en': 'name:en', 'description': 'description', 'wikipedia': 'wikipedia', 'short_name': 'short_name', 'check_date': 'check_date', 'old_name': 'old_name', 'office': 'office', 'government': 'government', 'admin_level': 'admin_level', 'roof:colour': 'roof:colour', 'building:colour': 'building:colour', 'phone': 'phone', 'source:height': 'source:height', 'layer': 'layer', 'height': 'height', 'wikidata': 'wikidata', 'website': 'website', 'tourism': 'tourism', 'source:geometry': 'source:geometry', 'healthcare': 'healthcare', 'contact:website': 'contact:website', 'amenity': 'amenity', 'start_date': 'start_date', 'building:part': 'building:part', 'roof:shape': 'roof:shape', 'addr:housename': 'addr:housename', 'ref': 'ref', 'name': 'name', 'type': 'type', 'source:addr': 'source:addr', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city:simc': 'addr:city:simc', 'addr:city': 'addr:city', });
lyr_railway_17.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'abandoned:railway': 'abandoned:railway', 'usage': 'usage', 'tunnel': 'tunnel', 'ref': 'ref', 'railway:track_ref': 'railway:track_ref', 'railway:shp': 'railway:shp', 'passenger_lines': 'passenger_lines', 'maxspeed': 'maxspeed', 'layer': 'layer', 'service': 'service', 'disused:railway': 'disused:railway', 'voltage': 'voltage', 'oneway': 'oneway', 'gauge': 'gauge', 'frequency': 'frequency', 'electrified': 'electrified', });
lyr_barrier_18.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', 'information': 'information', 'column:shape': 'column:shape', 'swing_gate:type': 'swing_gate:type', 'number': 'number', 'indoor': 'indoor', 'defibrillator:location:en': 'defibrillator:location:en', 'defibrillator:location': 'defibrillator:location', 'not:barrier': 'not:barrier', 'lit': 'lit', 'direction': 'direction', 'hgv': 'hgv', 'maxweight': 'maxweight', 'man_made': 'man_made', 'was:barrier': 'was:barrier', 'natural': 'natural', 'cycle_barrier:installation': 'cycle_barrier:installation', 'cycle_barrier': 'cycle_barrier', 'ruins': 'ruins', 'crossing:island': 'crossing:island', 'crossing': 'crossing', 'post:street': 'post:street', 'post:postcode': 'post:postcode', 'post:housenumber': 'post:housenumber', 'post:city': 'post:city', 'addr:flats': 'addr:flats', 'emergency': 'emergency', 'width': 'width', 'disused:wheelchair': 'disused:wheelchair', 'disused:highway': 'disused:highway', 'plant': 'plant', 'location': 'location', 'memorial': 'memorial', 'historic': 'historic', 'description': 'description', 'door': 'door', 'fence_type': 'fence_type', 'exit': 'exit', 'highway': 'highway', 'note:access': 'note:access', 'noexit': 'noexit', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'bin': 'bin', 'survey:date': 'survey:date', 'gate:type': 'gate:type', 'colour': 'colour', 'check_date:kerb': 'check_date:kerb', 'traffic_calming': 'traffic_calming', 'fee:conditional': 'fee:conditional', 'bus': 'bus', 'level': 'level', 'park_ride': 'park_ride', 'maxheight': 'maxheight', 'fee': 'fee', 'access:conditional': 'access:conditional', 'wikidata': 'wikidata', 'source:name': 'source:name', 'horse': 'horse', 'check_date': 'check_date', 'tourism': 'tourism', 'start_date': 'start_date', 'opening_hours': 'opening_hours', 'parking': 'parking', 'amenity': 'amenity', 'name:en': 'name:en', 'layer': 'layer', 'height': 'height', 'locked': 'locked', 'motorcycle': 'motorcycle', 'check_date:wheelchair': 'check_date:wheelchair', 'material': 'material', 'motorcar': 'motorcar', 'name': 'name', 'wheelchair': 'wheelchair', 'ref': 'ref', 'railway': 'railway', 'entrance': 'entrance', 'bollard': 'bollard', 'tactile_paving': 'tactile_paving', 'kerb': 'kerb', 'motor_vehicle': 'motor_vehicle', 'vehicle': 'vehicle', 'lift_gate:type': 'lift_gate:type', 'access': 'access', 'foot': 'foot', 'bicycle': 'bicycle', });
lyr_building_19.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'locked': 'locked', 'barrier': 'barrier', 'parking': 'parking', 'name': 'name', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'door': 'door', 'access': 'access', 'operator:wikidata': 'operator:wikidata', 'collection_times': 'collection_times', 'highway': 'highway', 'ref': 'ref', 'operator': 'operator', 'opening_hours': 'opening_hours', 'location': 'location', 'cash_in': 'cash_in', 'amenity': 'amenity', 'level': 'level', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'entrance': 'entrance', });
lyr_building_20.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'source:building': 'source:building', 'wheelchair': 'wheelchair', 'shop': 'shop', 'self_service': 'self_service', 'automated': 'automated', 'building:part': 'building:part', 'tower:type': 'tower:type', 'tower:construction': 'tower:construction', 'man_made': 'man_made', 'architect': 'architect', 'surface': 'surface', 'payment:cash': 'payment:cash', 'parking': 'parking', 'capacity:disabled': 'capacity:disabled', 'capacity': 'capacity', 'min_level': 'min_level', 'office': 'office', 'government': 'government', 'construction': 'construction', 'unisex': 'unisex', 'fee': 'fee', 'charge': 'charge', 'access': 'access', 'roof:material': 'roof:material', 'roof:colour': 'roof:colour', 'building:material': 'building:material', 'building:architecture': 'building:architecture', 'tourism': 'tourism', 'stars': 'stars', 'official_name': 'official_name', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'wikimedia_commons': 'wikimedia_commons', 'start_date': 'start_date', 'building:use': 'building:use', 'ref:nid': 'ref:nid', 'historic': 'historic', 'heritage:operator': 'heritage:operator', 'heritage': 'heritage', 'building:levels:underground': 'building:levels:underground', 'short_name': 'short_name', 'addr:housename': 'addr:housename', 'residential': 'residential', 'alt_name': 'alt_name', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'service_times': 'service_times', 'religion': 'religion', 'diocese': 'diocese', 'denomination': 'denomination', 'deanery': 'deanery', 'sport': 'sport', 'seasonal': 'seasonal', 'website': 'website', 'phone': 'phone', 'opening_hours': 'opening_hours', 'email': 'email', 'amenity': 'amenity', 'building:colour': 'building:colour', 'roof:levels': 'roof:levels', 'level': 'level', 'operator': 'operator', 'layer': 'layer', 'building:min_level': 'building:min_level', 'leisure': 'leisure', 'source:addr': 'source:addr', 'roof:shape': 'roof:shape', 'name': 'name', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'type': 'type', });
lyr_barrier_21.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', 'locked': 'locked', 'material': 'material', 'man_made': 'man_made', 'motorcar': 'motorcar', 'horse': 'horse', 'access': 'access', 'tactile_paving': 'tactile_paving', 'kerb': 'kerb', 'motorcycle': 'motorcycle', 'opening_hours': 'opening_hours', 'motor_vehicle': 'motor_vehicle', 'highway': 'highway', 'noexit': 'noexit', 'foot': 'foot', 'bicycle': 'bicycle', });
lyr_access_22.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'access': 'access', 'recycling_type': 'recycling_type', 'recycling:plastic': 'recycling:plastic', 'recycling:paper': 'recycling:paper', 'recycling:glass_bottles': 'recycling:glass_bottles', 'recycling:cans': 'recycling:cans', 'opening_hours': 'opening_hours', 'indoor': 'indoor', 'emergency': 'emergency', 'defibrillator:location:en': 'defibrillator:location:en', 'defibrillator:location': 'defibrillator:location', 'covered': 'covered', 'material': 'material', 'motor_vehicle': 'motor_vehicle', 'parking': 'parking', 'layer': 'layer', 'door': 'door', 'traffic_signals:vibration': 'traffic_signals:vibration', 'traffic_signals:sound': 'traffic_signals:sound', 'crossing:markings': 'crossing:markings', 'crossing:island': 'crossing:island', 'button_operated': 'button_operated', 'crossing': 'crossing', 'motorcar': 'motorcar', 'horse': 'horse', 'short_name': 'short_name', 'name': 'name', 'contact:phone': 'contact:phone', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'supervised': 'supervised', 'fee': 'fee', 'capacity': 'capacity', 'bicycle_parking': 'bicycle_parking', 'amenity': 'amenity', 'operator': 'operator', 'check_date': 'check_date', 'advertising': 'advertising', 'motorcycle': 'motorcycle', 'entrance': 'entrance', 'noexit': 'noexit', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'highway': 'highway', });
lyr_access_23.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'access': 'access', 'source_ref:url': 'source_ref:url', 'room': 'room', 'level': 'level', 'indoor': 'indoor', 'colour': 'colour', 'tunnel': 'tunnel', 'oneway': 'oneway', 'name': 'name', 'maxspeed:type': 'maxspeed:type', 'emergency': 'emergency', 'bicycle': 'bicycle', 'surface': 'surface', 'foot': 'foot', 'service': 'service', 'highway': 'highway', });
lyr_building_24.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'voltage': 'voltage', 'substation': 'substation', 'ref': 'ref', 'power': 'power', 'location': 'location', 'gas_insulated': 'gas_insulated', 'shop': 'shop', 'opening_hours': 'opening_hours', 'content': 'content', 'man_made': 'man_made', 'height': 'height', 'layer': 'layer', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'name': 'name', 'healthcare': 'healthcare', 'amenity': 'amenity', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_access_25.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', });
lyr_access_26.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'access': 'access', 'highway': 'highway', });
lyr_barrier_27.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', });
lyr_railway_28.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'train': 'train', 'public_transport': 'public_transport', 'name': 'name', 'source:ref': 'source:ref', 'ref': 'ref', });
lyr_building_29.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'emergency': 'emergency', 'construction': 'construction', 'landuse': 'landuse', 'building:min_level': 'building:min_level', 'abandoned:railway': 'abandoned:railway', 'leisure': 'leisure', 'payment:wire_transfer': 'payment:wire_transfer', 'man_made': 'man_made', 'content': 'content', 'building:part': 'building:part', 'opening_hours:signed': 'opening_hours:signed', 'check_date:opening_hours': 'check_date:opening_hours', 'access': 'access', 'automated': 'automated', 'recycling_type': 'recycling_type', 'disused': 'disused', 'payment:debit_cards': 'payment:debit_cards', 'payment:credit_cards': 'payment:credit_cards', 'min_level': 'min_level', 'internet_access': 'internet_access', 'information': 'information', 'disused:name': 'disused:name', 'disused:brand:wikidata': 'disused:brand:wikidata', 'disused:brand': 'disused:brand', 'url': 'url', 'image': 'image', 'diocese': 'diocese', 'deanery': 'deanery', 'church:type': 'church:type', 'ruins': 'ruins', 'portable': 'portable', 'short_name': 'short_name', 'ref': 'ref', 'addr:unit': 'addr:unit', 'fax': 'fax', 'smoking': 'smoking', 'nohousenumber': 'nohousenumber', 'voltage': 'voltage', 'location': 'location', 'gas_insulated': 'gas_insulated', 'roof:material': 'roof:material', 'roof:height': 'roof:height', 'roof:direction': 'roof:direction', 'roof:colour': 'roof:colour', 'building:material': 'building:material', 'building:colour': 'building:colour', 'self_service': 'self_service', 'payment:cash': 'payment:cash', 'name:ru': 'name:ru', 'service:vehicle:rv_repair': 'service:vehicle:rv_repair', 'service:vehicle:rv': 'service:vehicle:rv', 'service:vehicle:car_repair': 'service:vehicle:car_repair', 'service': 'service', 'old_name': 'old_name', 'contact:facebook': 'contact:facebook', 'roof': 'roof', 'layer': 'layer', 'social_facility': 'social_facility', 'substation': 'substation', 'power': 'power', 'tourism': 'tourism', 'disused:shop': 'disused:shop', 'office': 'office', 'brand:wikipedia': 'brand:wikipedia', 'atm': 'atm', 'loc_name': 'loc_name', 'house': 'house', 'roof:orientation': 'roof:orientation', 'toilets:wheelchair': 'toilets:wheelchair', 'toilets': 'toilets', 'religion': 'religion', 'parish': 'parish', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'operator:website': 'operator:website', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'denomination': 'denomination', 'source:building': 'source:building', 'ref:rspo': 'ref:rspo', 'ref:regon': 'ref:regon', 'operator:type': 'operator:type', 'official_name': 'official_name', 'website': 'website', 'source:amenity': 'source:amenity', 'phone': 'phone', 'nursery': 'nursery', 'isced:level': 'isced:level', 'email': 'email', 'capacity': 'capacity', 'parking': 'parking', 'old_addr:street': 'old_addr:street', 'old_addr:housenumber': 'old_addr:housenumber', 'noname': 'noname', 'cuisine': 'cuisine', 'amenity': 'amenity', 'wheelchair': 'wheelchair', 'name:signed': 'name:signed', 'craft': 'craft', 'check_date': 'check_date', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'start_date': 'start_date', 'description': 'description', 'architect': 'architect', 'brand:wikidata': 'brand:wikidata', 'was:shop': 'was:shop', 'was:opening_hours': 'was:opening_hours', 'was:name': 'was:name', 'was:brand:wikidata': 'was:brand:wikidata', 'was:brand': 'was:brand', 'opening_hours': 'opening_hours', 'height': 'height', 'historic': 'historic', 'abandoned': 'abandoned', 'operator': 'operator', 'shop': 'shop', 'brand': 'brand', 'roof:shape': 'roof:shape', 'roof:levels': 'roof:levels', 'addr:country': 'addr:country', 'railway:signal_box': 'railway:signal_box', 'railway:ref': 'railway:ref', 'railway:local_operated': 'railway:local_operated', 'railway': 'railway', 'name': 'name', 'building:flats': 'building:flats', 'building:levels': 'building:levels', 'type': 'type', 'source:addr': 'source:addr', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city:simc': 'addr:city:simc', 'addr:city': 'addr:city', });
lyr_railway_30.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'construction': 'construction', 'surface': 'surface', 'description': 'description', 'abandoned:railway': 'abandoned:railway', 'disused:railway': 'disused:railway', 'covered': 'covered', 'bridge': 'bridge', 'service': 'service', 'highway': 'highway', 'passenger_lines': 'passenger_lines', 'tunnel': 'tunnel', 'layer': 'layer', 'oneway': 'oneway', 'railway:shp': 'railway:shp', 'voltage': 'voltage', 'usage': 'usage', 'ref': 'ref', 'railway:track_ref': 'railway:track_ref', 'railway:preferred_direction': 'railway:preferred_direction', 'operator': 'operator', 'maxspeed': 'maxspeed', 'gauge': 'gauge', 'frequency': 'frequency', 'electrified': 'electrified', });
lyr_railway_31.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'start_date': 'start_date', 'layer': 'layer', 'wheelchair': 'wheelchair', 'train': 'train', 'tactile_paving': 'tactile_paving', 'surface': 'surface', 'ref': 'ref', 'public_transport': 'public_transport', 'operator': 'operator', 'network': 'network', 'lit': 'lit', 'departures_board': 'departures_board', 'covered': 'covered', 'bench': 'bench', 'building:levels': 'building:levels', 'type': 'type', 'railway:signal_box': 'railway:signal_box', 'railway:ref': 'railway:ref', 'railway:local_operated': 'railway:local_operated', 'name': 'name', 'building': 'building', });
lyr_barrier_32.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', 'tourism': 'tourism', 'information': 'information', 'backrest': 'backrest', 'surveillance:zone': 'surveillance:zone', 'surveillance:type': 'surveillance:type', 'surveillance': 'surveillance', 'camera:type': 'camera:type', 'camera:mount': 'camera:mount', 'camera:direction': 'camera:direction', 'man_made': 'man_made', 'natural': 'natural', 'noexit': 'noexit', 'locked': 'locked', 'covered': 'covered', 'capacity': 'capacity', 'bicycle_parking': 'bicycle_parking', 'height': 'height', 'wheelchair': 'wheelchair', 'opening_hours': 'opening_hours', 'bollard': 'bollard', 'description': 'description', 'parking': 'parking', 'amenity': 'amenity', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'type': 'type', 'tactile_paving': 'tactile_paving', 'kerb': 'kerb', 'entrance': 'entrance', 'motor_vehicle': 'motor_vehicle', 'material': 'material', 'lift_gate:type': 'lift_gate:type', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'access': 'access', 'name': 'name', });
lyr_barrier_33.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', 'tactile_paving': 'tactile_paving', 'kerb': 'kerb', 'layer': 'layer', 'covered': 'covered', 'barrier:barbed_wire': 'barrier:barbed_wire', 'substation': 'substation', 'operator:wikidata': 'operator:wikidata', 'operator': 'operator', 'location': 'location', 'frequency': 'frequency', 'wall': 'wall', 'level': 'level', 'material': 'material', 'height': 'height', 'motor_vehicle': 'motor_vehicle', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'access': 'access', 'voltage': 'voltage', 'power': 'power', 'name': 'name', 'fence_type': 'fence_type', });
lyr_railway_34.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'service': 'service', 'voltage': 'voltage', 'usage': 'usage', 'ref': 'ref', 'passenger_lines': 'passenger_lines', 'maxspeed': 'maxspeed', 'gauge': 'gauge', 'frequency': 'frequency', 'electrified': 'electrified', });
lyr_railway_35.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', });
lyr_access_36.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'access': 'access', 'disabled': 'disabled', 'leisure': 'leisure', 'start_date': 'start_date', 'phone': 'phone', 'payment:cash': 'payment:cash', 'email': 'email', 'building:levels': 'building:levels', 'addr:housenumber': 'addr:housenumber', 'lit': 'lit', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'smoothness': 'smoothness', 'landuse': 'landuse', 'barrier': 'barrier', 'zone': 'zone', 'orientation': 'orientation', 'fee:conditional': 'fee:conditional', 'capacity:disabled': 'capacity:disabled', 'capacity': 'capacity', 'unisex': 'unisex', 'opening_hours': 'opening_hours', 'charge': 'charge', 'building': 'building', 'surface': 'surface', 'supervised': 'supervised', 'name': 'name', 'fee': 'fee', 'parking': 'parking', 'operator': 'operator', 'amenity': 'amenity', });
lyr_barrier_37.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', 'substance': 'substance', 'emergency': 'emergency', 'surface': 'surface', 'paving_stones:shape': 'paving_stones:shape', 'paving_stones:pattern': 'paving_stones:pattern', 'paving_stones:direction': 'paving_stones:direction', 'paving_stones:colour': 'paving_stones:colour', 'area:highway': 'area:highway', 'name:ru': 'name:ru', 'name:pl': 'name:pl', 'name:be': 'name:be', 'int_name': 'int_name', 'tactile_paving': 'tactile_paving', 'kerb': 'kerb', 'start_date': 'start_date', 'disused:wheelchair': 'disused:wheelchair', 'disused:area:highway': 'disused:area:highway', 'wheelchair': 'wheelchair', 'incline': 'incline', 'source:height': 'source:height', 'lit': 'lit', 'advertising': 'advertising', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'lift_gate:type': 'lift_gate:type', 'ruined': 'ruined', 'opening_hours': 'opening_hours', 'horse': 'horse', 'todo': 'todo', 'leaf_type': 'leaf_type', 'leaf_cycle': 'leaf_cycle', 'ref': 'ref', 'recording:automated': 'recording:automated', 'monitoring:air_quality': 'monitoring:air_quality', 'name:en': 'name:en', 'foot': 'foot', 'bicycle': 'bicycle', 'motor_vehicle': 'motor_vehicle', 'wall_type': 'wall_type', 'source:geometry': 'source:geometry', 'bollard': 'bollard', 'alt_name': 'alt_name', 'layer': 'layer', 'source:addr': 'source:addr', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city:simc': 'addr:city:simc', 'addr:city': 'addr:city', 'survey:date': 'survey:date', 'description': 'description', 'recording': 'recording', 'monitoring:weather': 'monitoring:weather', 'man_made': 'man_made', 'material': 'material', 'location': 'location', 'substation': 'substation', 'short_name': 'short_name', 'operator': 'operator', 'wall': 'wall', 'fence_type': 'fence_type', 'height': 'height', 'colour': 'colour', 'access': 'access', 'tourism': 'tourism', 'level': 'level', 'voltage': 'voltage', 'power': 'power', 'name': 'name', });
lyr_barrier_38.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', 'water': 'water', 'industrial': 'industrial', 'pumping_station': 'pumping_station', 'capacity:women': 'capacity:women', 'capacity:parent': 'capacity:parent', 'garden:type': 'garden:type', 'pipeline': 'pipeline', 'payment:cash': 'payment:cash', 'image': 'image', 'charge': 'charge', 'playground:theme': 'playground:theme', 'opening_date': 'opening_date', 'noname': 'noname', 'start_date': 'start_date', 'preschool': 'preschool', 'description': 'description', 'kerb': 'kerb', 'area:highway': 'area:highway', 'tourism': 'tourism', 'name:ru': 'name:ru', 'name:pl': 'name:pl', 'name:be': 'name:be', 'government': 'government', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'social_facility:for': 'social_facility:for', 'source:name': 'source:name', 'source:amenity': 'source:amenity', 'nursery': 'nursery', 'mobile': 'mobile', 'min_age': 'min_age', 'opening_hours:signed': 'opening_hours:signed', 'name:signed': 'name:signed', 'check_date:opening_hours': 'check_date:opening_hours', 'survey:date': 'survey:date', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:fax': 'contact:fax', 'contact:email': 'contact:email', 'animal_shelter:adoption': 'animal_shelter:adoption', 'animal_shelter': 'animal_shelter', 'indoor': 'indoor', 'construction': 'construction', 'baby': 'baby', 'max_age': 'max_age', 'substance': 'substance', 'natural': 'natural', 'target': 'target', 'name:fr': 'name:fr', 'name:en': 'name:en', 'embassy': 'embassy', 'diplomatic': 'diplomatic', 'country': 'country', 'recycling_type': 'recycling_type', 'recycling:scrap_metal': 'recycling:scrap_metal', 'recycling:paper': 'recycling:paper', 'recycling:cans': 'recycling:cans', 'recycling:batteries': 'recycling:batteries', 'office': 'office', 'short_name': 'short_name', 'residential': 'residential', 'contact:facebook': 'contact:facebook', 'wheelchair': 'wheelchair', 'shop': 'shop', 'check_date': 'check_date', 'man_made': 'man_made', 'social_facility': 'social_facility', 'ref': 'ref', 'old_name': 'old_name', 'fax': 'fax', 'historic': 'historic', 'url': 'url', 'park_ride': 'park_ride', 'capacity:disabled': 'capacity:disabled', 'capacity': 'capacity', 'supervised': 'supervised', 'fee': 'fee', 'surface': 'surface', 'sport': 'sport', 'lit': 'lit', 'leisure': 'leisure', 'height': 'height', 'fence_type': 'fence_type', 'wikipedia': 'wikipedia', 'religion': 'religion', 'denomination': 'denomination', 'alt_name': 'alt_name', 'source:addr': 'source:addr', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city:simc': 'addr:city:simc', 'parking': 'parking', 'access': 'access', 'opening_hours': 'opening_hours', 'addr:street': 'addr:street', 'addr:city': 'addr:city', 'wikidata': 'wikidata', 'website': 'website', 'type': 'type', 'ref:vatin': 'ref:vatin', 'ref:rspo': 'ref:rspo', 'ref:regon': 'ref:regon', 'phone': 'phone', 'operator:type': 'operator:type', 'operator': 'operator', 'official_name': 'official_name', 'name': 'name', 'landuse': 'landuse', 'isced:level': 'isced:level', 'email': 'email', 'amenity': 'amenity', });
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
lyr_building_16.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'fuel:h70': '', 'fuel:h35': '', 'note:geometry': '', 'indoor': '', 'covered': '', 'bicycle_parking': '', 'substance': '', 'pipeline': '', 'recycling:plastic': '', 'recycling:glass': '', 'addr:place': '', 'addr:floor': '', 'designation': '', 'railway:signal_box': '', 'railway:ref': '', 'railway': '', 'max_level': '', 'operator:wikipedia': '', 'loc_name': '', 'landuse': '', 'min_height': '', 'craft': '', 'construction': '', 'pumping_station': '', 'roof:orientation': '', 'min_age': '', 'healthcare:speciality': '', 'service:vehicle:new_car_sales': '', 'mapillary': '', 'shelter_type': '', 'unisex': '', 'name:signed': '', 'service:vehicle:tyres': '', 'addr:country': '', 'building:min_level': '', 'contact:fax': '', 'contact:email': '', 'stars': '', 'contact:linkedin': '', 'contact:instagram': '', 'contact:facebook': '', 'roof:material': '', 'building:levels:underground': '', 'gas_insulated': '', 'service': '', 'building:use': '', 'compressed_air': '', 'product': '', 'wikimedia_commons': '', 'service_times': '', 'parish:wikipedia': '', 'parish:wikidata': '', 'facebook': '', 'recycling:scrap_metal': '', 'recycling:paper': '', 'recycling:electrical_appliances': '', 'recycling:cardboard': '', 'recycling:cans': '', 'roof:height': '', 'material': '', 'source:opening_hours': '', 'min_level': '', 'level': '', 'highway': '', 'image': '', 'bell_tower': '', 'indoor_seating': '', 'drive_through': '', 'delivery': '', 'atm': '', 'payment:uta': '', 'payment:routex': '', 'payment:dkv': '', 'fuel:octane_98': '', 'fuel:octane_95': '', 'fuel:lpg': '', 'fuel:diesel': '', 'fuel:adblue': '', 'social_facility': '', 'contact:phone': '', 'tower:type': '', 'ref:addr': '', 'old_addr:city': '', 'police': '', 'content': '', 'service:vehicle:inspection': '', 'service:vehicle:diagnostics': '', 'service:vehicle:brakes': '', 'payment:contactless': '', 'payment:coins': '', 'diet:vegetarian': '', 'company': '', 'opening_hours:workshop': '', 'name:pl': '', 'name:be': '', 'takeaway': '', 'website:ua': '', 'ref:csioz': '', 'dispensing': '', 'operator:wikidata': '', 'ref:nid': '', 'parish': '', 'heritage:operator': '', 'heritage': '', 'diocese': '', 'deanery': '', 'church:type': '', 'disused': '', 'brand:website': '', 'ruins': '', 'sport:cycling': '', 'name:uk': '', 'supervised': '', 'building:material': '', 'building:flats': '', 'club': '', 'opening_hours:signed': '', 'noname': '', 'check_date:opening_hours': '', 'nohousenumber': '', 'house': '', 'waste': '', 'old_addr:street': '', 'abandoned': '', 'service:vehicle:car_repair': '', 'self_service': '', 'automated': '', 'was:shop': '', 'historic': '', 'disused:shop': '', 'disused:name': '', 'park_ride': '', 'fee': '', 'capacity:disabled': '', 'source:building': '', 'outdoor_seating': '', 'cuisine': '', 'old_addr:housenumber': '', 'man_made': '', 'name:ru': '', 'sport': '', 'operator:website': '', 'operator:type': '', 'operator:abbr': '', 'leisure': '', 'source:operator': '', 'voltage': '', 'substation': '', 'power': '', 'frequency': '', 'recycling_type': '', 'location': '', 'capacity': '', 'old_addr:housename': '', 'toilets:wheelchair': '', 'changing_table': '', 'payment:credit_cards': '', 'payment:cash': '', 'rooms': '', 'source:name': '', 'operator': '', 'roof:levels': '', 'parking': '', 'access': '', 'denomination': '', 'religion': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'brand': '', 'survey:date': '', 'aeroway': '', 'source:office': '', 'fax': '', 'wheelchair': '', 'toilets': '', 'stroller': '', 'smoking': '', 'shop': '', 'payment:visa_electron': '', 'payment:visa_debit': '', 'payment:visa_contactless': '', 'payment:visa': '', 'payment:mastercard_debit': '', 'payment:mastercard_contactless': '', 'payment:mastercard': '', 'payment:maestro': '', 'payment:debit_cards': '', 'payment:apple_pay': '', 'opening_hours': '', 'official_name': '', 'internet_access:ssid': '', 'internet_access:fee': '', 'internet_access': '', 'email': '', 'branch': '', 'alt_name': '', 'air_conditioning': '', 'name:en': '', 'description': '', 'wikipedia': '', 'short_name': '', 'check_date': '', 'old_name': '', 'office': '', 'government': '', 'admin_level': '', 'roof:colour': '', 'building:colour': '', 'phone': '', 'source:height': '', 'layer': '', 'height': '', 'wikidata': '', 'website': '', 'tourism': '', 'source:geometry': '', 'healthcare': '', 'contact:website': '', 'amenity': '', 'start_date': '', 'building:part': '', 'roof:shape': '', 'addr:housename': '', 'ref': '', 'name': '', 'type': '', 'source:addr': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city:simc': '', 'addr:city': '', });
lyr_railway_17.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'abandoned:railway': '', 'usage': '', 'tunnel': '', 'ref': '', 'railway:track_ref': '', 'railway:shp': '', 'passenger_lines': '', 'maxspeed': '', 'layer': '', 'service': '', 'disused:railway': '', 'voltage': '', 'oneway': '', 'gauge': '', 'frequency': '', 'electrified': '', });
lyr_barrier_18.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', 'information': '', 'column:shape': '', 'swing_gate:type': '', 'number': '', 'indoor': '', 'defibrillator:location:en': '', 'defibrillator:location': '', 'not:barrier': '', 'lit': '', 'direction': '', 'hgv': '', 'maxweight': '', 'man_made': '', 'was:barrier': '', 'natural': '', 'cycle_barrier:installation': '', 'cycle_barrier': '', 'ruins': '', 'crossing:island': '', 'crossing': '', 'post:street': '', 'post:postcode': '', 'post:housenumber': '', 'post:city': '', 'addr:flats': '', 'emergency': '', 'width': '', 'disused:wheelchair': '', 'disused:highway': '', 'plant': '', 'location': '', 'memorial': '', 'historic': '', 'description': '', 'door': '', 'fence_type': '', 'exit': '', 'highway': '', 'note:access': '', 'noexit': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'bin': '', 'survey:date': '', 'gate:type': '', 'colour': '', 'check_date:kerb': '', 'traffic_calming': '', 'fee:conditional': '', 'bus': '', 'level': '', 'park_ride': '', 'maxheight': '', 'fee': '', 'access:conditional': '', 'wikidata': '', 'source:name': '', 'horse': '', 'check_date': '', 'tourism': '', 'start_date': '', 'opening_hours': '', 'parking': '', 'amenity': '', 'name:en': '', 'layer': '', 'height': '', 'locked': '', 'motorcycle': '', 'check_date:wheelchair': '', 'material': '', 'motorcar': '', 'name': '', 'wheelchair': '', 'ref': '', 'railway': '', 'entrance': '', 'bollard': '', 'tactile_paving': '', 'kerb': '', 'motor_vehicle': '', 'vehicle': '', 'lift_gate:type': '', 'access': '', 'foot': '', 'bicycle': '', });
lyr_building_19.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'locked': '', 'barrier': '', 'parking': '', 'name': '', 'brand:wikidata': '', 'brand': '', 'door': '', 'access': '', 'operator:wikidata': '', 'collection_times': '', 'highway': '', 'ref': '', 'operator': '', 'opening_hours': '', 'location': '', 'cash_in': '', 'amenity': '', 'level': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'entrance': '', });
lyr_building_20.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'source:building': '', 'wheelchair': '', 'shop': '', 'self_service': '', 'automated': '', 'building:part': '', 'tower:type': '', 'tower:construction': '', 'man_made': '', 'architect': '', 'surface': '', 'payment:cash': '', 'parking': '', 'capacity:disabled': '', 'capacity': '', 'min_level': '', 'office': '', 'government': '', 'construction': '', 'unisex': '', 'fee': '', 'charge': '', 'access': '', 'roof:material': '', 'roof:colour': '', 'building:material': '', 'building:architecture': '', 'tourism': '', 'stars': '', 'official_name': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'brand': '', 'wikimedia_commons': '', 'start_date': '', 'building:use': '', 'ref:nid': '', 'historic': '', 'heritage:operator': '', 'heritage': '', 'building:levels:underground': '', 'short_name': '', 'addr:housename': '', 'residential': '', 'alt_name': '', 'wikipedia': '', 'wikidata': '', 'service_times': '', 'religion': '', 'diocese': '', 'denomination': '', 'deanery': '', 'sport': '', 'seasonal': '', 'website': '', 'phone': '', 'opening_hours': '', 'email': '', 'amenity': '', 'building:colour': '', 'roof:levels': '', 'level': '', 'operator': '', 'layer': '', 'building:min_level': '', 'leisure': '', 'source:addr': '', 'roof:shape': '', 'name': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'type': '', });
lyr_barrier_21.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', 'locked': '', 'material': '', 'man_made': '', 'motorcar': '', 'horse': '', 'access': '', 'tactile_paving': '', 'kerb': '', 'motorcycle': '', 'opening_hours': '', 'motor_vehicle': '', 'highway': '', 'noexit': '', 'foot': '', 'bicycle': '', });
lyr_access_22.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'access': '', 'recycling_type': '', 'recycling:plastic': '', 'recycling:paper': '', 'recycling:glass_bottles': '', 'recycling:cans': '', 'opening_hours': '', 'indoor': '', 'emergency': '', 'defibrillator:location:en': '', 'defibrillator:location': '', 'covered': '', 'material': '', 'motor_vehicle': '', 'parking': '', 'layer': '', 'door': '', 'traffic_signals:vibration': '', 'traffic_signals:sound': '', 'crossing:markings': '', 'crossing:island': '', 'button_operated': '', 'crossing': '', 'motorcar': '', 'horse': '', 'short_name': '', 'name': '', 'contact:phone': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'supervised': '', 'fee': '', 'capacity': '', 'bicycle_parking': '', 'amenity': '', 'operator': '', 'check_date': '', 'advertising': '', 'motorcycle': '', 'entrance': '', 'noexit': '', 'foot': '', 'bicycle': '', 'barrier': '', 'highway': '', });
lyr_access_23.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'access': '', 'source_ref:url': '', 'room': '', 'level': '', 'indoor': '', 'colour': '', 'tunnel': '', 'oneway': '', 'name': '', 'maxspeed:type': '', 'emergency': '', 'bicycle': '', 'surface': '', 'foot': '', 'service': '', 'highway': '', });
lyr_building_24.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'voltage': '', 'substation': '', 'ref': '', 'power': '', 'location': '', 'gas_insulated': '', 'shop': '', 'opening_hours': '', 'content': '', 'man_made': '', 'height': '', 'layer': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'brand': '', 'name': '', 'healthcare': '', 'amenity': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_access_25.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', });
lyr_access_26.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'access': '', 'highway': '', });
lyr_barrier_27.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'barrier': 'TextEdit', });
lyr_railway_28.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'train': '', 'public_transport': '', 'name': '', 'source:ref': '', 'ref': '', });
lyr_building_29.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'emergency': '', 'construction': '', 'landuse': '', 'building:min_level': '', 'abandoned:railway': '', 'leisure': '', 'payment:wire_transfer': '', 'man_made': '', 'content': '', 'building:part': '', 'opening_hours:signed': '', 'check_date:opening_hours': '', 'access': '', 'automated': '', 'recycling_type': '', 'disused': '', 'payment:debit_cards': '', 'payment:credit_cards': '', 'min_level': '', 'internet_access': '', 'information': '', 'disused:name': '', 'disused:brand:wikidata': '', 'disused:brand': '', 'url': '', 'image': '', 'diocese': '', 'deanery': '', 'church:type': '', 'ruins': '', 'portable': '', 'short_name': '', 'ref': '', 'addr:unit': '', 'fax': '', 'smoking': '', 'nohousenumber': '', 'voltage': '', 'location': '', 'gas_insulated': '', 'roof:material': '', 'roof:height': '', 'roof:direction': '', 'roof:colour': '', 'building:material': '', 'building:colour': '', 'self_service': '', 'payment:cash': '', 'name:ru': '', 'service:vehicle:rv_repair': '', 'service:vehicle:rv': '', 'service:vehicle:car_repair': '', 'service': '', 'old_name': '', 'contact:facebook': '', 'roof': '', 'layer': '', 'social_facility': '', 'substation': '', 'power': '', 'tourism': '', 'disused:shop': '', 'office': '', 'brand:wikipedia': '', 'atm': '', 'loc_name': '', 'house': '', 'roof:orientation': '', 'toilets:wheelchair': '', 'toilets': '', 'religion': '', 'parish': '', 'operator:wikipedia': '', 'operator:wikidata': '', 'operator:website': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'denomination': '', 'source:building': '', 'ref:rspo': '', 'ref:regon': '', 'operator:type': '', 'official_name': '', 'website': '', 'source:amenity': '', 'phone': '', 'nursery': '', 'isced:level': '', 'email': '', 'capacity': '', 'parking': '', 'old_addr:street': '', 'old_addr:housenumber': '', 'noname': '', 'cuisine': '', 'amenity': '', 'wheelchair': '', 'name:signed': '', 'craft': '', 'check_date': '', 'wikipedia': '', 'wikidata': '', 'start_date': '', 'description': '', 'architect': '', 'brand:wikidata': '', 'was:shop': '', 'was:opening_hours': '', 'was:name': '', 'was:brand:wikidata': '', 'was:brand': '', 'opening_hours': '', 'height': '', 'historic': '', 'abandoned': '', 'operator': '', 'shop': '', 'brand': '', 'roof:shape': '', 'roof:levels': '', 'addr:country': '', 'railway:signal_box': '', 'railway:ref': '', 'railway:local_operated': '', 'railway': '', 'name': '', 'building:flats': '', 'building:levels': '', 'type': '', 'source:addr': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city:simc': '', 'addr:city': '', });
lyr_railway_30.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'construction': '', 'surface': '', 'description': '', 'abandoned:railway': '', 'disused:railway': '', 'covered': '', 'bridge': '', 'service': '', 'highway': '', 'passenger_lines': '', 'tunnel': '', 'layer': '', 'oneway': '', 'railway:shp': '', 'voltage': '', 'usage': '', 'ref': '', 'railway:track_ref': '', 'railway:preferred_direction': '', 'operator': '', 'maxspeed': '', 'gauge': '', 'frequency': '', 'electrified': '', });
lyr_railway_31.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'start_date': '', 'layer': '', 'wheelchair': '', 'train': '', 'tactile_paving': '', 'surface': '', 'ref': '', 'public_transport': '', 'operator': '', 'network': '', 'lit': '', 'departures_board': '', 'covered': '', 'bench': '', 'building:levels': '', 'type': '', 'railway:signal_box': '', 'railway:ref': '', 'railway:local_operated': '', 'name': '', 'building': '', });
lyr_barrier_32.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', 'tourism': '', 'information': '', 'backrest': '', 'surveillance:zone': '', 'surveillance:type': '', 'surveillance': '', 'camera:type': '', 'camera:mount': '', 'camera:direction': '', 'man_made': '', 'natural': '', 'noexit': '', 'locked': '', 'covered': '', 'capacity': '', 'bicycle_parking': '', 'height': '', 'wheelchair': '', 'opening_hours': '', 'bollard': '', 'description': '', 'parking': '', 'amenity': '', 'motorcycle': '', 'motorcar': '', 'type': '', 'tactile_paving': '', 'kerb': '', 'entrance': '', 'motor_vehicle': '', 'material': '', 'lift_gate:type': '', 'horse': '', 'foot': '', 'bicycle': '', 'access': '', 'name': '', });
lyr_barrier_33.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', 'tactile_paving': '', 'kerb': '', 'layer': '', 'covered': '', 'barrier:barbed_wire': '', 'substation': '', 'operator:wikidata': '', 'operator': '', 'location': '', 'frequency': '', 'wall': '', 'level': '', 'material': '', 'height': '', 'motor_vehicle': '', 'horse': '', 'foot': '', 'bicycle': '', 'access': '', 'voltage': '', 'power': '', 'name': '', 'fence_type': '', });
lyr_railway_34.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'service': '', 'voltage': '', 'usage': '', 'ref': '', 'passenger_lines': '', 'maxspeed': '', 'gauge': '', 'frequency': '', 'electrified': '', });
lyr_railway_35.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', });
lyr_access_36.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'access': '', 'disabled': '', 'leisure': '', 'start_date': '', 'phone': '', 'payment:cash': '', 'email': '', 'building:levels': '', 'addr:housenumber': '', 'lit': '', 'addr:street': '', 'addr:postcode': '', 'addr:city': '', 'smoothness': '', 'landuse': '', 'barrier': '', 'zone': '', 'orientation': '', 'fee:conditional': '', 'capacity:disabled': '', 'capacity': '', 'unisex': '', 'opening_hours': '', 'charge': '', 'building': '', 'surface': '', 'supervised': '', 'name': '', 'fee': '', 'parking': '', 'operator': '', 'amenity': '', });
lyr_barrier_37.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', 'substance': '', 'emergency': '', 'surface': '', 'paving_stones:shape': '', 'paving_stones:pattern': '', 'paving_stones:direction': '', 'paving_stones:colour': '', 'area:highway': '', 'name:ru': '', 'name:pl': '', 'name:be': '', 'int_name': '', 'tactile_paving': '', 'kerb': '', 'start_date': '', 'disused:wheelchair': '', 'disused:area:highway': '', 'wheelchair': '', 'incline': '', 'source:height': '', 'lit': '', 'advertising': '', 'motorcycle': '', 'motorcar': '', 'lift_gate:type': '', 'ruined': '', 'opening_hours': '', 'horse': '', 'todo': '', 'leaf_type': '', 'leaf_cycle': '', 'ref': '', 'recording:automated': '', 'monitoring:air_quality': '', 'name:en': '', 'foot': '', 'bicycle': '', 'motor_vehicle': '', 'wall_type': '', 'source:geometry': '', 'bollard': '', 'alt_name': '', 'layer': '', 'source:addr': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city:simc': '', 'addr:city': '', 'survey:date': '', 'description': '', 'recording': '', 'monitoring:weather': '', 'man_made': '', 'material': '', 'location': '', 'substation': '', 'short_name': '', 'operator': '', 'wall': '', 'fence_type': '', 'height': '', 'colour': '', 'access': '', 'tourism': '', 'level': '', 'voltage': '', 'power': '', 'name': '', });
lyr_barrier_38.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', 'water': '', 'industrial': '', 'pumping_station': '', 'capacity:women': '', 'capacity:parent': '', 'garden:type': '', 'pipeline': '', 'payment:cash': '', 'image': '', 'charge': '', 'playground:theme': '', 'opening_date': '', 'noname': '', 'start_date': '', 'preschool': '', 'description': '', 'kerb': '', 'area:highway': '', 'tourism': '', 'name:ru': '', 'name:pl': '', 'name:be': '', 'government': '', 'voltage': '', 'substation': '', 'power': '', 'operator:wikipedia': '', 'operator:wikidata': '', 'social_facility:for': '', 'source:name': '', 'source:amenity': '', 'nursery': '', 'mobile': '', 'min_age': '', 'opening_hours:signed': '', 'name:signed': '', 'check_date:opening_hours': '', 'survey:date': '', 'contact:website': '', 'contact:phone': '', 'contact:fax': '', 'contact:email': '', 'animal_shelter:adoption': '', 'animal_shelter': '', 'indoor': '', 'construction': '', 'baby': '', 'max_age': '', 'substance': '', 'natural': '', 'target': '', 'name:fr': '', 'name:en': '', 'embassy': '', 'diplomatic': '', 'country': '', 'recycling_type': '', 'recycling:scrap_metal': '', 'recycling:paper': '', 'recycling:cans': '', 'recycling:batteries': '', 'office': '', 'short_name': '', 'residential': '', 'contact:facebook': '', 'wheelchair': '', 'shop': '', 'check_date': '', 'man_made': '', 'social_facility': '', 'ref': '', 'old_name': '', 'fax': '', 'historic': '', 'url': '', 'park_ride': '', 'capacity:disabled': '', 'capacity': '', 'supervised': '', 'fee': '', 'surface': '', 'sport': '', 'lit': '', 'leisure': '', 'height': '', 'fence_type': '', 'wikipedia': '', 'religion': '', 'denomination': '', 'alt_name': '', 'source:addr': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city:simc': '', 'parking': '', 'access': '', 'opening_hours': '', 'addr:street': '', 'addr:city': '', 'wikidata': '', 'website': '', 'type': '', 'ref:vatin': '', 'ref:rspo': '', 'ref:regon': '', 'phone': '', 'operator:type': '', 'operator': '', 'official_name': '', 'name': '', 'landuse': '', 'isced:level': '', 'email': '', 'amenity': '', });
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
lyr_building_16.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'fuel:h70': 'no label', 'fuel:h35': 'no label', 'note:geometry': 'no label', 'indoor': 'no label', 'covered': 'no label', 'bicycle_parking': 'no label', 'substance': 'no label', 'pipeline': 'no label', 'recycling:plastic': 'no label', 'recycling:glass': 'no label', 'addr:place': 'no label', 'addr:floor': 'no label', 'designation': 'no label', 'railway:signal_box': 'no label', 'railway:ref': 'no label', 'railway': 'no label', 'max_level': 'no label', 'operator:wikipedia': 'no label', 'loc_name': 'no label', 'landuse': 'no label', 'min_height': 'no label', 'craft': 'no label', 'construction': 'no label', 'pumping_station': 'no label', 'roof:orientation': 'no label', 'min_age': 'no label', 'healthcare:speciality': 'no label', 'service:vehicle:new_car_sales': 'no label', 'mapillary': 'no label', 'shelter_type': 'no label', 'unisex': 'no label', 'name:signed': 'no label', 'service:vehicle:tyres': 'no label', 'addr:country': 'no label', 'building:min_level': 'no label', 'contact:fax': 'no label', 'contact:email': 'no label', 'stars': 'no label', 'contact:linkedin': 'no label', 'contact:instagram': 'no label', 'contact:facebook': 'no label', 'roof:material': 'no label', 'building:levels:underground': 'no label', 'gas_insulated': 'no label', 'service': 'no label', 'building:use': 'no label', 'compressed_air': 'no label', 'product': 'no label', 'wikimedia_commons': 'no label', 'service_times': 'no label', 'parish:wikipedia': 'no label', 'parish:wikidata': 'no label', 'facebook': 'no label', 'recycling:scrap_metal': 'no label', 'recycling:paper': 'no label', 'recycling:electrical_appliances': 'no label', 'recycling:cardboard': 'no label', 'recycling:cans': 'no label', 'roof:height': 'no label', 'material': 'no label', 'source:opening_hours': 'no label', 'min_level': 'no label', 'level': 'no label', 'highway': 'no label', 'image': 'no label', 'bell_tower': 'no label', 'indoor_seating': 'no label', 'drive_through': 'no label', 'delivery': 'no label', 'atm': 'no label', 'payment:uta': 'no label', 'payment:routex': 'no label', 'payment:dkv': 'no label', 'fuel:octane_98': 'no label', 'fuel:octane_95': 'no label', 'fuel:lpg': 'no label', 'fuel:diesel': 'no label', 'fuel:adblue': 'no label', 'social_facility': 'no label', 'contact:phone': 'no label', 'tower:type': 'no label', 'ref:addr': 'no label', 'old_addr:city': 'no label', 'police': 'no label', 'content': 'no label', 'service:vehicle:inspection': 'no label', 'service:vehicle:diagnostics': 'no label', 'service:vehicle:brakes': 'no label', 'payment:contactless': 'no label', 'payment:coins': 'no label', 'diet:vegetarian': 'no label', 'company': 'no label', 'opening_hours:workshop': 'no label', 'name:pl': 'no label', 'name:be': 'no label', 'takeaway': 'no label', 'website:ua': 'no label', 'ref:csioz': 'no label', 'dispensing': 'no label', 'operator:wikidata': 'no label', 'ref:nid': 'no label', 'parish': 'no label', 'heritage:operator': 'no label', 'heritage': 'no label', 'diocese': 'no label', 'deanery': 'no label', 'church:type': 'no label', 'disused': 'no label', 'brand:website': 'no label', 'ruins': 'no label', 'sport:cycling': 'no label', 'name:uk': 'no label', 'supervised': 'no label', 'building:material': 'no label', 'building:flats': 'no label', 'club': 'no label', 'opening_hours:signed': 'no label', 'noname': 'no label', 'check_date:opening_hours': 'no label', 'nohousenumber': 'no label', 'house': 'no label', 'waste': 'no label', 'old_addr:street': 'no label', 'abandoned': 'no label', 'service:vehicle:car_repair': 'no label', 'self_service': 'no label', 'automated': 'no label', 'was:shop': 'no label', 'historic': 'no label', 'disused:shop': 'no label', 'disused:name': 'no label', 'park_ride': 'no label', 'fee': 'no label', 'capacity:disabled': 'no label', 'source:building': 'no label', 'outdoor_seating': 'no label', 'cuisine': 'no label', 'old_addr:housenumber': 'no label', 'man_made': 'no label', 'name:ru': 'no label', 'sport': 'no label', 'operator:website': 'no label', 'operator:type': 'no label', 'operator:abbr': 'no label', 'leisure': 'no label', 'source:operator': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'frequency': 'no label', 'recycling_type': 'no label', 'location': 'no label', 'capacity': 'no label', 'old_addr:housename': 'no label', 'toilets:wheelchair': 'no label', 'changing_table': 'no label', 'payment:credit_cards': 'no label', 'payment:cash': 'no label', 'rooms': 'no label', 'source:name': 'no label', 'operator': 'no label', 'roof:levels': 'no label', 'parking': 'no label', 'access': 'no label', 'denomination': 'no label', 'religion': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'survey:date': 'no label', 'aeroway': 'no label', 'source:office': 'no label', 'fax': 'no label', 'wheelchair': 'no label', 'toilets': 'no label', 'stroller': 'no label', 'smoking': 'no label', 'shop': 'no label', 'payment:visa_electron': 'no label', 'payment:visa_debit': 'no label', 'payment:visa_contactless': 'no label', 'payment:visa': 'no label', 'payment:mastercard_debit': 'no label', 'payment:mastercard_contactless': 'no label', 'payment:mastercard': 'no label', 'payment:maestro': 'no label', 'payment:debit_cards': 'no label', 'payment:apple_pay': 'no label', 'opening_hours': 'no label', 'official_name': 'no label', 'internet_access:ssid': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'email': 'no label', 'branch': 'no label', 'alt_name': 'no label', 'air_conditioning': 'no label', 'name:en': 'no label', 'description': 'no label', 'wikipedia': 'no label', 'short_name': 'no label', 'check_date': 'no label', 'old_name': 'no label', 'office': 'no label', 'government': 'no label', 'admin_level': 'no label', 'roof:colour': 'no label', 'building:colour': 'no label', 'phone': 'no label', 'source:height': 'no label', 'layer': 'no label', 'height': 'no label', 'wikidata': 'no label', 'website': 'no label', 'tourism': 'no label', 'source:geometry': 'no label', 'healthcare': 'no label', 'contact:website': 'no label', 'amenity': 'no label', 'start_date': 'no label', 'building:part': 'no label', 'roof:shape': 'no label', 'addr:housename': 'no label', 'ref': 'no label', 'name': 'no label', 'type': 'no label', 'source:addr': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city:simc': 'no label', 'addr:city': 'no label', });
lyr_railway_17.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'abandoned:railway': 'no label', 'usage': 'no label', 'tunnel': 'no label', 'ref': 'no label', 'railway:track_ref': 'no label', 'railway:shp': 'no label', 'passenger_lines': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'service': 'no label', 'disused:railway': 'no label', 'voltage': 'no label', 'oneway': 'no label', 'gauge': 'no label', 'frequency': 'no label', 'electrified': 'no label', });
lyr_barrier_18.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', 'information': 'no label', 'column:shape': 'no label', 'swing_gate:type': 'no label', 'number': 'no label', 'indoor': 'no label', 'defibrillator:location:en': 'no label', 'defibrillator:location': 'no label', 'not:barrier': 'no label', 'lit': 'no label', 'direction': 'no label', 'hgv': 'no label', 'maxweight': 'no label', 'man_made': 'no label', 'was:barrier': 'no label', 'natural': 'no label', 'cycle_barrier:installation': 'no label', 'cycle_barrier': 'no label', 'ruins': 'no label', 'crossing:island': 'no label', 'crossing': 'no label', 'post:street': 'no label', 'post:postcode': 'no label', 'post:housenumber': 'no label', 'post:city': 'no label', 'addr:flats': 'no label', 'emergency': 'no label', 'width': 'no label', 'disused:wheelchair': 'no label', 'disused:highway': 'no label', 'plant': 'no label', 'location': 'no label', 'memorial': 'no label', 'historic': 'no label', 'description': 'no label', 'door': 'no label', 'fence_type': 'no label', 'exit': 'no label', 'highway': 'no label', 'note:access': 'no label', 'noexit': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'bin': 'no label', 'survey:date': 'no label', 'gate:type': 'no label', 'colour': 'no label', 'check_date:kerb': 'no label', 'traffic_calming': 'no label', 'fee:conditional': 'no label', 'bus': 'no label', 'level': 'no label', 'park_ride': 'no label', 'maxheight': 'no label', 'fee': 'no label', 'access:conditional': 'no label', 'wikidata': 'no label', 'source:name': 'no label', 'horse': 'no label', 'check_date': 'no label', 'tourism': 'no label', 'start_date': 'no label', 'opening_hours': 'no label', 'parking': 'no label', 'amenity': 'no label', 'name:en': 'no label', 'layer': 'no label', 'height': 'no label', 'locked': 'no label', 'motorcycle': 'no label', 'check_date:wheelchair': 'no label', 'material': 'no label', 'motorcar': 'no label', 'name': 'no label', 'wheelchair': 'no label', 'ref': 'no label', 'railway': 'no label', 'entrance': 'no label', 'bollard': 'no label', 'tactile_paving': 'no label', 'kerb': 'no label', 'motor_vehicle': 'no label', 'vehicle': 'no label', 'lift_gate:type': 'no label', 'access': 'no label', 'foot': 'no label', 'bicycle': 'no label', });
lyr_building_19.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'locked': 'no label', 'barrier': 'no label', 'parking': 'no label', 'name': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'door': 'no label', 'access': 'no label', 'operator:wikidata': 'no label', 'collection_times': 'no label', 'highway': 'no label', 'ref': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'location': 'no label', 'cash_in': 'no label', 'amenity': 'no label', 'level': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'entrance': 'no label', });
lyr_building_20.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'source:building': 'no label', 'wheelchair': 'no label', 'shop': 'no label', 'self_service': 'no label', 'automated': 'no label', 'building:part': 'no label', 'tower:type': 'no label', 'tower:construction': 'no label', 'man_made': 'no label', 'architect': 'no label', 'surface': 'no label', 'payment:cash': 'no label', 'parking': 'no label', 'capacity:disabled': 'no label', 'capacity': 'no label', 'min_level': 'no label', 'office': 'no label', 'government': 'no label', 'construction': 'no label', 'unisex': 'no label', 'fee': 'no label', 'charge': 'no label', 'access': 'no label', 'roof:material': 'no label', 'roof:colour': 'no label', 'building:material': 'no label', 'building:architecture': 'no label', 'tourism': 'no label', 'stars': 'no label', 'official_name': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'wikimedia_commons': 'no label', 'start_date': 'no label', 'building:use': 'no label', 'ref:nid': 'no label', 'historic': 'no label', 'heritage:operator': 'no label', 'heritage': 'no label', 'building:levels:underground': 'no label', 'short_name': 'no label', 'addr:housename': 'no label', 'residential': 'no label', 'alt_name': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'service_times': 'no label', 'religion': 'no label', 'diocese': 'no label', 'denomination': 'no label', 'deanery': 'no label', 'sport': 'no label', 'seasonal': 'no label', 'website': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'email': 'no label', 'amenity': 'no label', 'building:colour': 'no label', 'roof:levels': 'no label', 'level': 'no label', 'operator': 'no label', 'layer': 'no label', 'building:min_level': 'no label', 'leisure': 'no label', 'source:addr': 'no label', 'roof:shape': 'no label', 'name': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'type': 'no label', });
lyr_barrier_21.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', 'locked': 'no label', 'material': 'no label', 'man_made': 'no label', 'motorcar': 'no label', 'horse': 'no label', 'access': 'no label', 'tactile_paving': 'no label', 'kerb': 'no label', 'motorcycle': 'no label', 'opening_hours': 'no label', 'motor_vehicle': 'no label', 'highway': 'no label', 'noexit': 'no label', 'foot': 'no label', 'bicycle': 'no label', });
lyr_access_22.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'access': 'no label', 'recycling_type': 'no label', 'recycling:plastic': 'no label', 'recycling:paper': 'no label', 'recycling:glass_bottles': 'no label', 'recycling:cans': 'no label', 'opening_hours': 'no label', 'indoor': 'no label', 'emergency': 'no label', 'defibrillator:location:en': 'no label', 'defibrillator:location': 'no label', 'covered': 'no label', 'material': 'no label', 'motor_vehicle': 'no label', 'parking': 'no label', 'layer': 'no label', 'door': 'no label', 'traffic_signals:vibration': 'no label', 'traffic_signals:sound': 'no label', 'crossing:markings': 'no label', 'crossing:island': 'no label', 'button_operated': 'no label', 'crossing': 'no label', 'motorcar': 'no label', 'horse': 'no label', 'short_name': 'no label', 'name': 'no label', 'contact:phone': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'supervised': 'no label', 'fee': 'no label', 'capacity': 'no label', 'bicycle_parking': 'no label', 'amenity': 'no label', 'operator': 'no label', 'check_date': 'no label', 'advertising': 'no label', 'motorcycle': 'no label', 'entrance': 'no label', 'noexit': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'highway': 'no label', });
lyr_access_23.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'access': 'no label', 'source_ref:url': 'no label', 'room': 'no label', 'level': 'no label', 'indoor': 'no label', 'colour': 'no label', 'tunnel': 'no label', 'oneway': 'no label', 'name': 'no label', 'maxspeed:type': 'no label', 'emergency': 'no label', 'bicycle': 'no label', 'surface': 'no label', 'foot': 'no label', 'service': 'no label', 'highway': 'no label', });
lyr_building_24.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'voltage': 'no label', 'substation': 'no label', 'ref': 'no label', 'power': 'no label', 'location': 'no label', 'gas_insulated': 'no label', 'shop': 'no label', 'opening_hours': 'no label', 'content': 'no label', 'man_made': 'no label', 'height': 'no label', 'layer': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'name': 'no label', 'healthcare': 'no label', 'amenity': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_access_25.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', });
lyr_access_26.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'access': 'no label', 'highway': 'no label', });
lyr_barrier_27.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', });
lyr_railway_28.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'train': 'no label', 'public_transport': 'no label', 'name': 'no label', 'source:ref': 'no label', 'ref': 'no label', });
lyr_building_29.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'emergency': 'no label', 'construction': 'no label', 'landuse': 'no label', 'building:min_level': 'no label', 'abandoned:railway': 'no label', 'leisure': 'no label', 'payment:wire_transfer': 'no label', 'man_made': 'no label', 'content': 'no label', 'building:part': 'no label', 'opening_hours:signed': 'no label', 'check_date:opening_hours': 'no label', 'access': 'no label', 'automated': 'no label', 'recycling_type': 'no label', 'disused': 'no label', 'payment:debit_cards': 'no label', 'payment:credit_cards': 'no label', 'min_level': 'no label', 'internet_access': 'no label', 'information': 'no label', 'disused:name': 'no label', 'disused:brand:wikidata': 'no label', 'disused:brand': 'no label', 'url': 'no label', 'image': 'no label', 'diocese': 'no label', 'deanery': 'no label', 'church:type': 'no label', 'ruins': 'no label', 'portable': 'no label', 'short_name': 'no label', 'ref': 'no label', 'addr:unit': 'no label', 'fax': 'no label', 'smoking': 'no label', 'nohousenumber': 'no label', 'voltage': 'no label', 'location': 'no label', 'gas_insulated': 'no label', 'roof:material': 'no label', 'roof:height': 'no label', 'roof:direction': 'no label', 'roof:colour': 'no label', 'building:material': 'no label', 'building:colour': 'no label', 'self_service': 'no label', 'payment:cash': 'no label', 'name:ru': 'no label', 'service:vehicle:rv_repair': 'no label', 'service:vehicle:rv': 'no label', 'service:vehicle:car_repair': 'no label', 'service': 'no label', 'old_name': 'no label', 'contact:facebook': 'no label', 'roof': 'no label', 'layer': 'no label', 'social_facility': 'no label', 'substation': 'no label', 'power': 'no label', 'tourism': 'no label', 'disused:shop': 'no label', 'office': 'no label', 'brand:wikipedia': 'no label', 'atm': 'no label', 'loc_name': 'no label', 'house': 'no label', 'roof:orientation': 'no label', 'toilets:wheelchair': 'no label', 'toilets': 'no label', 'religion': 'no label', 'parish': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'operator:website': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'denomination': 'no label', 'source:building': 'no label', 'ref:rspo': 'no label', 'ref:regon': 'no label', 'operator:type': 'no label', 'official_name': 'no label', 'website': 'no label', 'source:amenity': 'no label', 'phone': 'no label', 'nursery': 'no label', 'isced:level': 'no label', 'email': 'no label', 'capacity': 'no label', 'parking': 'no label', 'old_addr:street': 'no label', 'old_addr:housenumber': 'no label', 'noname': 'no label', 'cuisine': 'no label', 'amenity': 'no label', 'wheelchair': 'no label', 'name:signed': 'no label', 'craft': 'no label', 'check_date': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'start_date': 'no label', 'description': 'no label', 'architect': 'no label', 'brand:wikidata': 'no label', 'was:shop': 'no label', 'was:opening_hours': 'no label', 'was:name': 'no label', 'was:brand:wikidata': 'no label', 'was:brand': 'no label', 'opening_hours': 'no label', 'height': 'no label', 'historic': 'no label', 'abandoned': 'no label', 'operator': 'no label', 'shop': 'no label', 'brand': 'no label', 'roof:shape': 'no label', 'roof:levels': 'no label', 'addr:country': 'no label', 'railway:signal_box': 'no label', 'railway:ref': 'no label', 'railway:local_operated': 'no label', 'railway': 'no label', 'name': 'no label', 'building:flats': 'no label', 'building:levels': 'no label', 'type': 'no label', 'source:addr': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city:simc': 'no label', 'addr:city': 'no label', });
lyr_railway_30.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'construction': 'no label', 'surface': 'no label', 'description': 'no label', 'abandoned:railway': 'no label', 'disused:railway': 'no label', 'covered': 'no label', 'bridge': 'no label', 'service': 'no label', 'highway': 'no label', 'passenger_lines': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'oneway': 'no label', 'railway:shp': 'no label', 'voltage': 'no label', 'usage': 'no label', 'ref': 'no label', 'railway:track_ref': 'no label', 'railway:preferred_direction': 'no label', 'operator': 'no label', 'maxspeed': 'no label', 'gauge': 'no label', 'frequency': 'no label', 'electrified': 'no label', });
lyr_railway_31.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'start_date': 'no label', 'layer': 'no label', 'wheelchair': 'no label', 'train': 'no label', 'tactile_paving': 'no label', 'surface': 'no label', 'ref': 'no label', 'public_transport': 'no label', 'operator': 'no label', 'network': 'no label', 'lit': 'no label', 'departures_board': 'no label', 'covered': 'no label', 'bench': 'no label', 'building:levels': 'no label', 'type': 'no label', 'railway:signal_box': 'no label', 'railway:ref': 'no label', 'railway:local_operated': 'no label', 'name': 'no label', 'building': 'no label', });
lyr_barrier_32.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', 'tourism': 'no label', 'information': 'no label', 'backrest': 'no label', 'surveillance:zone': 'no label', 'surveillance:type': 'no label', 'surveillance': 'no label', 'camera:type': 'no label', 'camera:mount': 'no label', 'camera:direction': 'no label', 'man_made': 'no label', 'natural': 'no label', 'noexit': 'no label', 'locked': 'no label', 'covered': 'no label', 'capacity': 'no label', 'bicycle_parking': 'no label', 'height': 'no label', 'wheelchair': 'no label', 'opening_hours': 'no label', 'bollard': 'no label', 'description': 'no label', 'parking': 'no label', 'amenity': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'type': 'no label', 'tactile_paving': 'no label', 'kerb': 'no label', 'entrance': 'no label', 'motor_vehicle': 'no label', 'material': 'no label', 'lift_gate:type': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'access': 'no label', 'name': 'no label', });
lyr_barrier_33.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', 'tactile_paving': 'no label', 'kerb': 'no label', 'layer': 'no label', 'covered': 'no label', 'barrier:barbed_wire': 'no label', 'substation': 'no label', 'operator:wikidata': 'no label', 'operator': 'no label', 'location': 'no label', 'frequency': 'no label', 'wall': 'no label', 'level': 'no label', 'material': 'no label', 'height': 'no label', 'motor_vehicle': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'access': 'no label', 'voltage': 'no label', 'power': 'no label', 'name': 'no label', 'fence_type': 'no label', });
lyr_railway_34.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'service': 'no label', 'voltage': 'no label', 'usage': 'no label', 'ref': 'no label', 'passenger_lines': 'no label', 'maxspeed': 'no label', 'gauge': 'no label', 'frequency': 'no label', 'electrified': 'no label', });
lyr_railway_35.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', });
lyr_access_36.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'access': 'no label', 'disabled': 'no label', 'leisure': 'no label', 'start_date': 'no label', 'phone': 'no label', 'payment:cash': 'no label', 'email': 'no label', 'building:levels': 'no label', 'addr:housenumber': 'no label', 'lit': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'barrier': 'no label', 'zone': 'no label', 'orientation': 'no label', 'fee:conditional': 'no label', 'capacity:disabled': 'no label', 'capacity': 'no label', 'unisex': 'no label', 'opening_hours': 'no label', 'charge': 'no label', 'building': 'no label', 'surface': 'no label', 'supervised': 'no label', 'name': 'no label', 'fee': 'no label', 'parking': 'no label', 'operator': 'no label', 'amenity': 'no label', });
lyr_barrier_37.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', 'substance': 'no label', 'emergency': 'no label', 'surface': 'no label', 'paving_stones:shape': 'no label', 'paving_stones:pattern': 'no label', 'paving_stones:direction': 'no label', 'paving_stones:colour': 'no label', 'area:highway': 'no label', 'name:ru': 'no label', 'name:pl': 'no label', 'name:be': 'no label', 'int_name': 'no label', 'tactile_paving': 'no label', 'kerb': 'no label', 'start_date': 'no label', 'disused:wheelchair': 'no label', 'disused:area:highway': 'no label', 'wheelchair': 'no label', 'incline': 'no label', 'source:height': 'no label', 'lit': 'no label', 'advertising': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'lift_gate:type': 'no label', 'ruined': 'no label', 'opening_hours': 'no label', 'horse': 'no label', 'todo': 'no label', 'leaf_type': 'no label', 'leaf_cycle': 'no label', 'ref': 'no label', 'recording:automated': 'no label', 'monitoring:air_quality': 'no label', 'name:en': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'motor_vehicle': 'no label', 'wall_type': 'no label', 'source:geometry': 'no label', 'bollard': 'no label', 'alt_name': 'no label', 'layer': 'no label', 'source:addr': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city:simc': 'no label', 'addr:city': 'no label', 'survey:date': 'no label', 'description': 'no label', 'recording': 'no label', 'monitoring:weather': 'no label', 'man_made': 'no label', 'material': 'no label', 'location': 'no label', 'substation': 'no label', 'short_name': 'no label', 'operator': 'no label', 'wall': 'no label', 'fence_type': 'no label', 'height': 'no label', 'colour': 'no label', 'access': 'no label', 'tourism': 'no label', 'level': 'no label', 'voltage': 'no label', 'power': 'no label', 'name': 'no label', });
lyr_barrier_38.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', 'water': 'no label', 'industrial': 'no label', 'pumping_station': 'no label', 'capacity:women': 'no label', 'capacity:parent': 'no label', 'garden:type': 'no label', 'pipeline': 'no label', 'payment:cash': 'no label', 'image': 'no label', 'charge': 'no label', 'playground:theme': 'no label', 'opening_date': 'no label', 'noname': 'no label', 'start_date': 'no label', 'preschool': 'no label', 'description': 'no label', 'kerb': 'no label', 'area:highway': 'no label', 'tourism': 'no label', 'name:ru': 'no label', 'name:pl': 'no label', 'name:be': 'no label', 'government': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'social_facility:for': 'no label', 'source:name': 'no label', 'source:amenity': 'no label', 'nursery': 'no label', 'mobile': 'no label', 'min_age': 'no label', 'opening_hours:signed': 'no label', 'name:signed': 'no label', 'check_date:opening_hours': 'no label', 'survey:date': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:fax': 'no label', 'contact:email': 'no label', 'animal_shelter:adoption': 'no label', 'animal_shelter': 'no label', 'indoor': 'no label', 'construction': 'no label', 'baby': 'no label', 'max_age': 'no label', 'substance': 'no label', 'natural': 'no label', 'target': 'no label', 'name:fr': 'no label', 'name:en': 'no label', 'embassy': 'no label', 'diplomatic': 'no label', 'country': 'no label', 'recycling_type': 'no label', 'recycling:scrap_metal': 'no label', 'recycling:paper': 'no label', 'recycling:cans': 'no label', 'recycling:batteries': 'no label', 'office': 'no label', 'short_name': 'no label', 'residential': 'no label', 'contact:facebook': 'no label', 'wheelchair': 'no label', 'shop': 'no label', 'check_date': 'no label', 'man_made': 'no label', 'social_facility': 'no label', 'ref': 'no label', 'old_name': 'no label', 'fax': 'no label', 'historic': 'no label', 'url': 'no label', 'park_ride': 'no label', 'capacity:disabled': 'no label', 'capacity': 'no label', 'supervised': 'no label', 'fee': 'no label', 'surface': 'no label', 'sport': 'no label', 'lit': 'no label', 'leisure': 'no label', 'height': 'no label', 'fence_type': 'no label', 'wikipedia': 'no label', 'religion': 'no label', 'denomination': 'no label', 'alt_name': 'no label', 'source:addr': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city:simc': 'no label', 'parking': 'no label', 'access': 'no label', 'opening_hours': 'no label', 'addr:street': 'no label', 'addr:city': 'no label', 'wikidata': 'no label', 'website': 'no label', 'type': 'no label', 'ref:vatin': 'no label', 'ref:rspo': 'no label', 'ref:regon': 'no label', 'phone': 'no label', 'operator:type': 'no label', 'operator': 'no label', 'official_name': 'no label', 'name': 'no label', 'landuse': 'no label', 'isced:level': 'no label', 'email': 'no label', 'amenity': 'no label', });
lyr_barrier_38.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});