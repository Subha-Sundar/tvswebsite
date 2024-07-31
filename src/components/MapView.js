import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axiosInstance from "../api";

// Fix the default icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Radius of the Earth in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const MapView = () => {
  const [locations, setLocations] = useState([]);
  

  useEffect(() => {
    // Function to fetch user data
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get("users_latlong/", {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });

        console.log("Users Response:", response.data);
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        return [];
      }
    };

    fetchUserDetails();
  }, []);
  const [adjustedLocations, setAdjustedLocations] = useState([]);

  useEffect(() => {
    const adjustMarkerPositions = (locations) => {
      const adjusted = [...locations]; // Clone locations array to work on adjustments
      const distanceThreshold = 10; // Distance threshold in meters to determine overlap

      // Function to slightly adjust a location
      const adjustLocation = (lat, lng) => {
        return {
          latitude: lat + 0.0001 * (Math.random() - 0.5), // Adjust the latitude slightly
          longitude: lng + 0.0001 * (Math.random() - 0.5) // Adjust the longitude slightly
        };
      };

      // Check for overlap among all pairs of markers
      for (let i = 0; i < adjusted.length; i++) {
        for (let j = i + 1; j < adjusted.length; j++) {
          const loc1 = adjusted[i];
          const loc2 = adjusted[j];

          if (calculateDistance(loc1.latitude, loc1.longitude, loc2.latitude, loc2.longitude) < distanceThreshold) {
            const adjustment = adjustLocation(loc2.latitude, loc2.longitude);
            adjusted[j] = { ...loc2, latitude: adjustment.latitude, longitude: adjustment.longitude };
          }
        }
      }

      return adjusted;
    };

    const adjusted = adjustMarkerPositions(locations);
    setAdjustedLocations(adjusted);
  }, [locations]);

  return (
    <div className="h-screen w-full pt-4">
      <h2 className="text-3xl font-bold">
        Map <span className="text-blue-500">View</span>
      </h2>
      <MapContainer
        center={[13.0827, 80.2707]}
        zoom={10}
        className="h-full w-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
       {adjustedLocations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
        >
          <Popup>
            {`${location.firstName} ${location.lastName} - ${location.serviceProviding}`}
          </Popup>
        </Marker>
      ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
