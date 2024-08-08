import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const COMPANY = gql`
  query company($companyId: String!) {
    company(companyId: $companyId) {
      name
      description
      address
      website
      avatar
      rating
      vote_quantity
    }
  }
`;
export const Detail = () => {
  const { id } = useParams();

  console.log(id);
  const { data } = useQuery(COMPANY, { variables: { companyId: id } });
  console.log(data);
  return (
    <div>
      <Header></Header>
    </div>
  );
};
