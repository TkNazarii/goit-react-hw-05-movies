const APIKEY = '0309d9fcbfe86784218b292e3268a713';
const INTERVAL = 'day'
const BASEURL = 'https://api.themoviedb.org/3'

const urlTrending = `${BASEURL}/trending/movie/${INTERVAL}
?api_key=${APIKEY}`;


function fetchTrendingMovies() {
	return fetch(urlTrending)
	  .then(response => response.json())
	  .then(data => {
		// Обробка отриманих даних
		// console.log(data);
		return data;
	  })
	  .catch(error => {
		// Обробка помилки
		console.error(error);
		throw error;
	  });
  }

  // запит популярних фільмів
function fetchSearch(value) {
	return fetch(`${BASEURL}/search/movie?query=${value}&include_adult=false&page=1&api_key=${APIKEY}`)
	  .then(response => response.json())
	  .then(data => {
		// Обробка отриманих даних
		// console.log(data.results);
		return data;
	  })
	  .catch(error => {
		// Обробка помилки
		console.error(error);
		throw error;
	  });
  }

    // запит детальна інфа
function fetchDetails(id) {
	return fetch(`${BASEURL}/movie/${id}?language=en-US&api_key=${APIKEY}`)
	  .then(response => response.json())
	  .then(data => {
		// Обробка отриманих даних
		// console.log(data);
		return data;
	  })
	  .catch(error => {
		// Обробка помилки
		console.error(error);
		throw error;
	  });
  }

    // запит детальна інфа
function fetchCast(id) {
		return fetch(`${BASEURL}/movie/${id}/credits?language=en-US&api_key=${APIKEY}`)
		  .then(response => response.json())
		  .then(data => {
			// Обробка отриманих даних
			// console.log(data);
			return data;
		  })
		  .catch(error => {
			// Обробка помилки
			console.error(error);
			throw error;
		  });
	  }

function fetchRevievs(id) {
		return fetch(`${BASEURL}/movie/${id}/reviews?language=en-US&page=1&api_key=${APIKEY}`)
		  .then(response => response.json())
		  .then(data => {
			// Обробка отриманих даних
			console.log(data);
			return data;
		  })
		  .catch(error => {
			// Обробка помилки
			console.error(error);
			throw error;
		  });
	  }

export { fetchTrendingMovies, fetchSearch, fetchDetails, fetchCast, fetchRevievs }