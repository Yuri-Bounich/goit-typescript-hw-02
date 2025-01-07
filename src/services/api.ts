import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

type FetchArticlesResponse = {
  total_pages: number;
  results: Array<{
    id: string;
    urls: { small: string; regular: string };
    alt_description?: string;
    user: { name: string; location?: string };
  }>;
};

const fetchArticles = async (
  query: string,
  page: number
): Promise<FetchArticlesResponse> => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: '1XVhfs4mUzOdwNBmD94EeUhJyEiTHj8y6Dfez-zNpns',
    },
  });
  return response.data;
};
export default fetchArticles;
