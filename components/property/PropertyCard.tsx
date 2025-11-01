interface Property {
  id: number;
  title: string;
  image: string;
  price: number;
  location: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="mt-2 font-bold text-blue-600">${property.price}/night</p>
      </div>
    </div>
  );
}
