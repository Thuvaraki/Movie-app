import Results from "@/app/components/Results";
const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );

  if (!res.ok) {
    console.error("Failed to fetch data:", res.status, res.statusText);
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div className="">
      {results && results.length === 0 ? (
        <h1 className="text-center pt-6">No results found</h1>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
}
