import AppError from "./AppError.js";

/**
 * Fetches data from the TMDB (The Movie Database) API.
 *
 * @param {string} method - The HTTP method (e.g., GET, POST) to use for the request.
 * @param {string} endpoint - The TMDB API endpoint to query.
 * @param {string} query - The query parameters to append to the URL (e.g., `page=1`).
 * @param {function} next - The Express error-handling function to pass errors to.
 *
 * @returns {Object} The data fetched from the TMDB API.
 * @throws {AppError} Throws an AppError if the fetch request fails.
 */

async function fetchFromTMDB(method, endpoint, query, next) {
  const { API_URL, API_KEY, API_READ_ACCESS_TOKEN } = process.env;
  const url = `${API_URL}/${endpoint}?api_key=${API_KEY}&${query}`;

  const maxRetries = 4;
  let attempts = 0;

  const options = {
    method: method,
    headers: {
      accept: "application/json",
      // Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
    },
  };

  while (attempts < maxRetries) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new AppError(res.statusText, 404);
      const data = await res.json();
      return data;
    } catch (err) {
      attempts += 1;
      if (attempts >= maxRetries) throw err;
    }
  }
}

export default fetchFromTMDB;
