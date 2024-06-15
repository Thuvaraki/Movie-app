import Results from "./components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending;";
  const res = await new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3${
          genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
        }?api_key=${API_KEY}&language=en-US&page=1`,
        {
          next: { revalidates: 10000 },
        }
      );
      resolve(res); // When we call resolve with a value, the Promise's state changes from "pending" to "fulfilled".
    }, 2000);
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
