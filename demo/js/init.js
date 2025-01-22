
function getPanoPathByCabinClass(cabinClass) {
  return './img/pano/'+ cabinClass + '_orig.jpg';
}

var ECONOMY = '67c701f77e379da88b06912aa4b339f6';
var PREMIUM = 'ee7c15bc4df903446f708574ddb62dbb';
var BUSINESS = 'a028d526c023d7fcd6384180b5e53790';

var DEFAULT_CABIN_CLASS = PREMIUM;
var baselineColor = 'transparent';
var currentCabinClass = DEFAULT_CABIN_CLASS;

var economyMarkers = [
  { // floor-baseline
    id: 'floor-baseline',
    polyline_rad: [
      [0.9288711561314895, -0.5509078426146616], [1.1132595774770913, -0.6060786633137685]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // GO TO PREMIUM
    id: PREMIUM,
    longitude: 0.9800152882229237,
    latitude: -0.6066284420128767,
    image: './img/round-button-left.svg',
    width: 50,
    height: 50,
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'floor-baseline',
    tooltip: '<b>Go to PREMIUM cabin</b>',
    data: {
      clickable: true
    }
  },
  { // baggage-baseline
    id: 'baggage-baseline',
    polyline_rad: [
      [5.960820673989106, 0.2538083683936654], [0.3177880113189839, 0.2488895745732509]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // seat-features-baseline
    id: 'seat-features-baseline',
    polyline_rad: [
      [6.102863457503989, -0.2831421029932222], [0.17606831409412085, -0.2831421029932222]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // seat-pitch-baseline
    id: 'seat-pitch-baseline',
    polyline_rad: [
      [4.938862876493943, -0.7078611581912826], [5.2458867369676305, -0.6388530705111828]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // seat-width-baseline
    id: 'seat-width-baseline',
    polyline_rad: [
      [5.545242963969918, -1.1949193509125684], [0.6639553974426338, -1.216130073207508]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // BAGGAGE
    id: 'baggage',
    longitude: 0.3124735478285692,
    latitude: 0.7531683510480384,
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'baggage-baseline',
    html: '<div class="suitcase"> <h3>Baggage allowance</h3> <div class="suitcase-details"> <ul> <li>1 carry-on 7 kg</li> <li>1 check-in 23 kg</li> </ul> </div> <div>',
    scale: [0.7, 2.75],
    className: 'baggage-container'
  },
  { // seat-features
    id: 'seat-features',
    longitude: 6.281953541132897,
    latitude: -0.32072457181291738,
    html: '<h3>Economy 38B</h3> <ul> <li>No Power</li> <li>On-demand TV</li> <li>Close to toilets</li> </ul>',
    lockRotation: false,
    basePolylineAnchor: 'seat-features-baseline',
    anchor: 'center center',
    scale: [0.5, 1.5],
    className: 'seat-features'
  },
  { // seat-pitch
    id: 'seat-pitch',
    longitude: 5.0838540887659915,
    latitude: -0.6434326067153382,
    html: '<h3>Seat Pitch</h3> <p>&larr;&nbsp;&nbsp;&nbsp; 30" / 76 cm &nbsp;&nbsp;&nbsp;&rarr;</p> <p>Limited Recline</p>',
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'seat-pitch-baseline',
    scale: [0.5, 1.5],
    className: 'seat-pitch'
  },
  { // seat-width
    id: 'seat-width',
    longitude: 6.249224534018304,
    latitude: -1.2543892936604787,
    html: '<h3>Seat Width</h3> <p>&larr;&nbsp;&nbsp;&nbsp; 17" / 43 cm &nbsp;&nbsp;&nbsp;&rarr;</p>',
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'seat-width-baseline',
    scale: [0.5, 1.5],
    className: 'seat-width'
  }
];

var premiumMarkers = [
  { // floor-baseline
    id: 'floor-baseline',
    polyline_rad: [
      [1.2380357588123516, -0.8389753696127173], [1.662612524871784, -0.8723052557377113]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // BUSINESS
    id: BUSINESS,
    // longitude: 0.4399585617360035, latitude: -0.380779722777129,
    longitude: 0.6427535351000322, latitude: -0.6813538458416315,
    image: './img/round-button-left.svg',
    width: 50,
    height: 50,
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'floor-baseline',
    tooltip: '<b>Go to BUSINESS cabin</b>',
    data: {
      clickable: true
    }
  },
  { // ECONOMY
    id: ECONOMY,
    // longitude: 1.8907360190582252, latitude: -0.7799607745289139,
    longitude: 1.4099500562229634, latitude: -0.9207906541244717,
    image: './img/round-button-right.svg',
    width: 50,
    height: 50,
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'floor-baseline',
    tooltip: '<b>Go to ECONOMY cabin</b>',
    data: {
      clickable: true
    }
  },
  { // baggage-baseline
    id: 'baggage-baseline',
    polyline_rad: [
      [5.960820673989106, 0.2538083683936654], [0.3177880113189839, 0.2488895745732509]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // seat-features-baseline
    id: 'seat-features-baseline',
    polyline_rad: [
      [6.102863457503989, -0.2831421029932222], [0.17606831409412085, -0.2831421029932222]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // seat-pitch-baseline
    id: 'seat-pitch-baseline',
    polyline_rad: [
      [4.938862876493943, -0.7078611581912826], [5.2458867369676305, -0.6388530705111828]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // seat-width-baseline
    id: 'seat-width-baseline',
    polyline_rad: [
      [5.545242963969918, -1.1949193509125684], [0.6639553974426338, -1.216130073207508]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // BAGGAGE
    id: 'baggage',
    // longitude: 0.3124735478285692, latitude: 0.7531683510480384,
    longitude: 6.271047275753268, latitude: 1.0423417537022974,
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'baggage-baseline',
    html: '<div class="suitcase"> <h3>Baggage allowance</h3> <div class="suitcase-details"> <ul> <li>1 carry-on 7 kg</li> <li>2 check-in 23 kg</li> </ul> </div> <div>',
    scale: [0.7, 2.75],
    className: 'baggage-container'
  },
  { // seat-features
    id: 'seat-features',
    longitude: 6.281953541132897,
    latitude: -0.32072457181291738,
    html: '<h3>Premium 14G</h3> <ul> <li>AC Power</li> <li>On-demand TV</li> <li>Fast boarding</li> </ul> <button type="button" class="blue-button">Upgrade $99</button>',
    lockRotation: false,
    basePolylineAnchor: 'seat-features-baseline',
    anchor: 'center center',
    scale: [0.5, 1.5],
    className: 'seat-features'
  },
  { // seat-pitch
    id: 'seat-pitch',
    longitude: 5.0838540887659915,
    latitude: -0.6434326067153382,
    html: '<h3>Seat Pitch</h3> <p>&larr;&nbsp;&nbsp;&nbsp; 38" / 96 cm &nbsp;&nbsp;&nbsp;&rarr;</p> <p>20\' Recline</p>',
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'seat-pitch-baseline',
    scale: [0.5, 1.5],
    className: 'seat-pitch'
  },
  { // seat-width
    id: 'seat-width',
    longitude: 6.249224534018304,
    latitude: -1.2543892936604787,
    html: '<h3>Seat Width</h3> <p>&larr;&nbsp;&nbsp;&nbsp; 18" / 45 cm &nbsp;&nbsp;&nbsp;&rarr;</p>',
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'seat-width-baseline',
    scale: [0.5, 1.5],
    className: 'seat-width'
  }
];

var businessMarkers = [
  { // floor-baseline
    id: 'floor-baseline',
    polyline_rad: [
      [5.556099049021131, -0.7226116427281228], [5.768892120153048, -0.5724561188867989]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  }, { // PREMIUM
    id: PREMIUM,
    longitude: 5.73130830812395, latitude: -0.7130745590337577,
    image: './img/round-button-left.svg',
    width: 50,
    height: 50,
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'floor-baseline',
    tooltip: '<b>Go to PREMIUM cabin</b>',
    data: {
      clickable: true
    }
  },
  { // baggage-baseline
    id: 'baggage-baseline',
    polyline_rad: [
      [5.960820673989106, 0.2538083683936654], [0.3177880113189839, 0.2488895745732509]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // seat-features-baseline
    id: 'seat-features-baseline',
    polyline_rad: [
      [6.102863457503989, -0.2831421029932222], [0.17606831409412085, -0.2831421029932222]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // seat-pitch-baseline
    id: 'seat-pitch-baseline',
    polyline_rad: [
      [0.7722560566135938, -0.6438247250013673], [1.417321558310246, -0.730004983912214]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // seat-width-baseline
    id: 'seat-width-baseline',
    polyline_rad: [
      [5.545242963969918, -1.1949193509125684], [0.6639553974426338, -1.216130073207508]
    ],
    svgStyle: {
      stroke: baselineColor,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2px'
    }
  },
  { // BAGGAGE
    id: 'baggage',
    longitude: 0.3124735478285692,
    latitude: 0.7531683510480384,
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'baggage-baseline',
    html: '<div class="suitcase"> <h3>Baggage allowance</h3> <div class="suitcase-details"> <ul> <li>2 carry-on 7 kg</li> <li>2 check-in 23 kg</li> </ul> </div> <div>',
    scale: [0.7, 2.75],
    className: 'baggage-container'
  },
  { // seat-features
    id: 'seat-features',
    longitude: 6.196556322854318, latitude: -0.3607325879435441,
    html: '<h3>Business 4C</h3> <ul> <li>AC Power</li> <li>On-demand TV</li> <li>Fast boarding</li> </ul> <button type="button" class="blue-button">Upgrade $499</button>',
    lockRotation: false,
    basePolylineAnchor: 'seat-features-baseline',
    anchor: 'center center',
    scale: [0.5, 1.5],
    className: 'seat-features'
  },
  { // seat-pitch
    id: 'seat-pitch',
    longitude: 1.071398691943174,
    latitude: -0.7340348091256002,
    html: '<h3>Seat Pitch</h3> <p>&larr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 64" / 162 cm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rarr;</p> <p>Flat bed</p>',
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'seat-pitch-baseline',
    scale: [0.5, 1.5],
    className: 'seat-pitch'
  },
  { // seat-width
    id: 'seat-width',
    longitude: 6.060891335151936, latitude: -1.0995788932337036,
    html: '<h3>Seat Width</h3> <p>&larr;&nbsp;&nbsp;&nbsp; 20" / 50 cm &nbsp;&nbsp;&nbsp;&rarr;</p>',
    anchor: 'center center',
    lockRotation: false,
    basePolylineAnchor: 'seat-width-baseline',
    scale: [0.5, 1.5],
    className: 'seat-width'
  }
];

var markersByCabinClass = {};
markersByCabinClass[ECONOMY] = economyMarkers;
markersByCabinClass[PREMIUM] = premiumMarkers;
markersByCabinClass[BUSINESS] = businessMarkers;

var viewer = new PhotoSphereViewer({
  container: document.querySelector('#viewer'),
  panorama: getPanoPathByCabinClass(DEFAULT_CABIN_CLASS),
  caption: '',
  navbar: [
    'autorotate',
    'zoom',
    'caption',
    'fullscreen'
  ],
  default_fov: 100,
  fisheye: false,
  move_speed: 1.0,
  time_anim: false,
  loading_img: 'favicon-310.png',
  transition: {
    duration: 1500,
    loader: true
  },
  anim_speed: '3rpm',
  usexmpdata: false
});

viewer.on('select-marker', function (marker) {
  if (marker.data && marker.data.clickable) {
    viewer.clearMarkers();
    currentCabinClass = marker.id;
    viewer.setPanorama(getPanoPathByCabinClass(currentCabinClass));
  }
});

viewer.on('click', function (e) {
  console.log('longitude:' + e.longitude + ',', 'latitude:' + e.latitude);
});

viewer.on('panorama-loaded', function () {
  var markers = markersByCabinClass[currentCabinClass];
  for (var i = 0; i < markers.length; i++) {
    viewer.addMarker(markers[i]);
  }
});
