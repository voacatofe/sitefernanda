"use client";

import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

interface LocationSectionProps {
  title: string;
  description: string;
  highlights: {
    title: string;
    description: string;
  }[];
  location: {
    lat: number;
    lng: number;
  };
  address: string;
}

export default function LocationSection({
  title,
  description,
  highlights,
  location,
  address,
}: LocationSectionProps) {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => location, [location]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <div>Carregando mapa...</div>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <GoogleMap
                options={mapOptions}
                zoom={15}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: "100%", height: "100%" }}
              >
                <MarkerF position={location} />
              </GoogleMap>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 text-sm">{address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 