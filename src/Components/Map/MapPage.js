import React, { useEffect, useState } from 'react';
import { Loader } from "@googlemaps/js-api-loader"
import allMarkers from '../../data/Markers.json'

import UniMarker from './Markers/uni.svg'
import ParkMarker from './Markers/park.svg'
import CafeMarker from './Markers/cafe.svg'
import LibraryMarker from './Markers/library.svg'

import useStyles from './styles';
import MapStyle from './MapStyle';

import config from '../../config';

const getLocation = () => {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(
      showPosition,
      (error) => console.warn(error.message),
      {enableHighAccuracy: true, timeout: 10000});
  }
  return [0, 0]
}

const showPosition = (position) => {
  // Your Code
  localStorage.setItem('lng', position.coords.longitude)
  localStorage.setItem('lat', position.coords.latitude)
}

var key = config.REACT_APP_GOOGLE_API_KEY;

const loader = new Loader({
  apiKey: key,
  version: 'weekly'
})

const google = window.google;

const test = async () => {

  await getLocation();

  await loader.load().then((google) => {

  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.5229, lng: -73.6674},
    zoom: 11,
    streetViewControl: false,
    styles: MapStyle
  });

  var infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });

  const image = UniMarker;

  console.log(localStorage.getItem('lng'));
  console.log(localStorage.getItem('lat'));

  const userMarker = new google.maps.Marker({
    map: map,
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    },
    position: {lng: Number(localStorage.getItem('lng')),
              lat: Number(localStorage.getItem('lat'))},
  })

  userMarker.addListener("click", () => {
    const content = `<div id="content" style={{backgroundColor:'black'}}>` +
                    `<h2>That's you! (approximately)</h2>` +
                    '</div>';

      infoWindow.setContent(content);
      infoWindow.open(map, userMarker)
  })

  const labels = "";
  var universityMarkers = [];
  allMarkers.Universities.map((university, i) => {
    const lab = labels[i % labels.length];
    const image = UniMarker;
    const marker = new google.maps.Marker({
                    map: map,
                    label: lab,
                    key: university.name,
                    position: {lat: university.lat, lng: university.lng},
                    icon : {url: image, scaledSize: new google.maps.Size(35, 35)}
    });

    marker.addListener("click", () => {
      const content = `<div id="content" style={{backgroundColor:'black'}}>` +
                      `<h2>${university.name}</h2>` +
                      `<h2>${university.type}</h2>` +
                      `<h3>${university.addresse}</h3>` +
                      `<div>${university.description}</div>` +
                      '</div>';

      infoWindow.setContent(content);
      infoWindow.open(map, marker)
    });
    universityMarkers.push(marker);
  });

  const cafeMarkers = allMarkers.Cafes.map((cafe, i) => {
    const lab = labels[i % labels.length];
    const image = CafeMarker;
    const marker = new google.maps.Marker({
                    map: map,
                    label: lab,
                    key: cafe.name,
                    position: {lat: cafe.lat, lng: cafe.lng},
                    icon : {url: image, scaledSize: new google.maps.Size(35, 35)}
    });

    marker.addListener("click", () => {
      const content = `<div id="content" style={{backgroundColor:'black'}}>` +
                      `<h2>${cafe.name}</h2>` +
                      `<h2>${cafe.type}</h2>` +
                      `<h3>${cafe.addresse}</h3>` +
                      `<div><a target="_blank" href=${cafe.website}>${cafe.website}</a></div>` +
                      '</div>';

      infoWindow.setContent(content);
      infoWindow.open(map, marker)
      // setSelectedMarker(marker);
    });
    return marker;
  });

  const parkMarkers = allMarkers.Parks.map((parks, i) => {
    const lab = labels[i % labels.length];
    const image = ParkMarker;
    const marker = new google.maps.Marker({
                    map: map,
                    label: lab,
                    key: parks.name,
                    position: {lat: parks.lat, lng: parks.lng},
                    icon : {url: image, scaledSize: new google.maps.Size(35, 35)}
    });

    marker.addListener("click", () => {
      const content = `<div id="content" style={{backgroundColor:'black'}}>` +
                      `<h2>${parks.name}</h2>` +
                      `<h2>${parks.type}</h2>` +
                      `<h3>${parks.addresse}</h3>` +
                      '</div>';

      infoWindow.setContent(content);
      infoWindow.open(map, marker)
      // setSelectedMarker(marker);
    });
    return marker;
  });


  const libraryMarkers = allMarkers.Libraries.map((library, i) => {
    const lab = labels[i % labels.length];
    const image = LibraryMarker;
    const marker = new google.maps.Marker({
                    map: map,
                    label: lab,
                    key: library.name,
                    position: {lat: library.lat, lng: library.lng},
                    icon : {url: image, scaledSize: new google.maps.Size(35, 35)}
    });

    marker.addListener("click", () => {
      const content = `<div id="content" style={{backgroundColor:'black'}}>` +
                      `<h2 style={{color: 'black'}}>${library.name}</h2>` +
                      `<h2>${library.type}</h2>` +
                      `<h3>${library.addresse}</h3>` +
                      '</div>';

      infoWindow.setContent(content);
      infoWindow.open(map, marker)
    });
    return marker;
  });

}
).catch(function (error) {
  console.error(error)
});
}

function Map() {

  useEffect(() => {
    test()
  }, [])

  const classes = useStyles();

  return (

    <div>
      <div style={{textAlign: 'center'}}>
      </div>
        <div id="map" className={classes.map} style={{color: 'black', height: '75vh', width: '80%'}}>

        </div>
    </div>
  );
}

export default Map;
