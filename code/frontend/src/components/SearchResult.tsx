import { gql, useQuery } from '@apollo/client';
import { useDebounce } from 'use-debounce';
import { SearchResult as SearchType } from '../interface/type';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SEARCH = gql`
  query search($query: String!) {
    search(query: $query) {
      company_id
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
  const navigate = useNavigate();

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className=" bg-white text-text_1 rounded-md ">
      {data &&
        data.search.map((item: SearchType) => (
          <div
            className="flex flex-row items-center p-2 mt-2 cursor-pointer hover:shadow-card"
            onClick={() => navigate(`/company/${item.company_id}`)}
          >
            <div className="w-12 h-6 object-cover ">
              <img src={item.avatar} className=" h-full " />
            </div>
            <p className="ml-4">{item.name}</p>
            <div
              className={`ml-5 text-white bg-[#5ba829] px-2 flex flex-row items-center`}
            >
              {item.rating}{' '}
              <Star
                color="#ffffff"
                size={12}
                className="inline ml-[0.2rem]"
                fill="#ffffff"
              />{' '}
            </div>
            <div className="ml-4 flex flex-row">
              {item.vote_quantity.toString()}
              {' votes'}
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchResult;
