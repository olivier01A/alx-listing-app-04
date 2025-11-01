// components/property/PropertyDetail.tsx
import Image from "next/image";

interface PropertyDetailProps {
  property: {
    id: number | string;
    title: string;
    price: number;
    description: string;
    image: string;
    location: string;
    bedrooms?: number;
    bathrooms?: number;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <div className="relative w-full h-96 mb-4">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="text-gray-700 mb-2">
        <strong>Location:</strong> {property.location}
      </p>

      <p className="text-gray-700 mb-2">
        <strong>Price:</strong> ${property.price.toLocaleString()}
      </p>

      {property.bedrooms && property.bathrooms && (
        <p className="text-gray-700 mb-2">
          <strong>Bedrooms:</strong> {property.bedrooms} |{" "}
          <strong>Bathrooms:</strong> {property.bathrooms}
        </p>
      )}

      <p className="text-gray-600 mt-4 leading-relaxed">
        {property.description}
      </p>
    </div>
  );
}
