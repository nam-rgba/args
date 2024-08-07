import { gql, useQuery } from '@apollo/client';
import { useDebounce } from 'use-debounce';
import { SearchResult as SearchType } from '../interface/type';
import { Star } from 'lucide-react';

const SEARCH = gql`
  query search($query: String!) {
    search(query: $query) {
      name
      avatar
      rating
      vote_quantity
    }
  }
`;

const SearchResult = ({ text }: { text: string }) => {
  const [debouncedSearchTerm] = useDebounce(text, 500);
  const { loading, error, data } = useQuery(SEARCH, {
    variables: { query: debouncedSearchTerm },
    skip: !debouncedSearchTerm,
  });

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className=" bg-white text-text_1 p-2 w-1/2 text-left rounded ">
      {data &&
        data.search.map((item: SearchType) => (
          <div className="flex flex-row items-center">
            <div className="w-12 h-6 object-cover ">
              <img src={item.avatar} className="w-full h-full " />
            </div>
            <p className="ml-4">{item.name}</p>
            <div className="ml-10">
              rating: {item.rating}{' '}
              <Star color="#fcbf49" size={12} className="inline" />{' '}
            </div>
            <span className="ml-2">{item.vote_quantity} votes</span>
          </div>
        ))}
    </div>
  );
};

export default SearchResult;
