import { gql, useQuery } from '@apollo/client';
import { Trending } from '../interface/type';
import { TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const TREND = gql`
  query topCompanies {
    topCompanies {
      company_id
      name
    }
  }
`;
const Trend = () => {
  const { data } = useQuery(TREND);
  const navigate = useNavigate();
  return (
    <div className="flex flex-row m-2 pt-2 text-sm text-gray_text font-semibold">
      <TrendingUp color="#5ba829" className="mr-2" />
      {data &&
        data.topCompanies.map((item: Trending) => (
          <div
            className="mr-4 px-2 h-fit shadow-card cursor-pointer"
            onClick={() => navigate(`/company/${item.company_id}`)}
          >
            {item.name}
          </div>
        ))}
    </div>
  );
};

export default Trend;
