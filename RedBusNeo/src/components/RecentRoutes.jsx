export default function RecentRoutes() {
  const routes =
    JSON.parse(
      localStorage.getItem(
        "routes"
      ) || "[]"
    );

  if (!routes.length)
    return null;

  return (
    <div
      style={{
        marginBottom: 20,
      }}
    >
      <h3>
        Recent Routes
      </h3>

      {routes.map(
        (r, i) => (
          <div key={i}>
            🚌 {r}
          </div>
        )
      )}
    </div>
  );
}