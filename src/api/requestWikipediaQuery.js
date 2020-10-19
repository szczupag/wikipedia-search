const urlWithParamsBuilder = (baseURL, data) => {
  const searchParams = new URLSearchParams(data);
  const url = new URL(baseURL);
  url.search = searchParams.toString();
  return url;
};

const requestWikipediaQuery = async (searchPhrase) => {
  const requestParams = {
    action: 'query',
    list: 'search',
    format: 'json',
    srlimit: '10',
    origin: '*',
    srsearch: searchPhrase,
  };
  const url = urlWithParamsBuilder('https://en.wikipedia.org/w/api.php', requestParams);
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw(`Wikipedia API error: ${response.status} 😰`);
  }
  const result = (data.query || {}).search || [];
  if (result.length === 0) {
    throw('No result found! 🥺')
  }
  return result;
};

export default requestWikipediaQuery;
