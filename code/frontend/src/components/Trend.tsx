import { gql, useQuery } from '@apollo/client';
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
  console.log(data);
  return <div>Trend</div>;
};

export default Trend;
