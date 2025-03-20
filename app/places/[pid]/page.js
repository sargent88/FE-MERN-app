export default function PlacePage({ place }) {
  return (
    <div>
      <h1>{place.name}</h1>
      <p>{place.description}</p>
    </div>
  );
}
