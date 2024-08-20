import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { FaStarHalfAlt } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
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
    <div className="bg-[#f5f5f5] min-h-screen">
      <Header></Header>
      <div className="w-full flex flex-row p-4">
        <div className="w-2/3 relative px-10">
          {/* Bnaner */}
          <div className="w-full h-[250px] ">
            <img
              src="https://salt.topdev.vn/tu4EGpNODfjK75d0IMcdJBwUu2xFMZcGZpeCqBkX-x4/fit/1080/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzA3LzI1L1RvcERldi0wNWMzODFhMDg2ODhlMTczNTQ5YWRlZWYzMmIxM2IyMS0xNjkwMjUwNzY3LmpwZw"
              alt="banner"
              className="w-full rounded-md h-full object-cover"
            />
          </div>

          {/* company info */}
          <div className="w-full h-[178px] flex flex-row items-center justify-around absolute top-[180px] left-0">
            <div className=" flex flex-row items-center justify-around w-[85%] h-[178px] p-4 bg-white rounded-md">
              <div className="h-full w-[146px]">
                <img
                  src={data?.company?.avatar}
                  alt="avatar"
                  className="w-full object-cover p-2"
                />
              </div>
              <div className="w-[560px] h-full p-4">
                <p className="text-xl font-semibold uppercase">
                  {data?.company?.name}
                </p>
                <div className="text-gray_text font-semibold w-full flex flex-row items-center h-auto">
                  Rating: {data?.company?.rating}
                  <FaStarHalfAlt
                    color="#5ba829"
                    size={12}
                    className="mx-2"
                  /> . {data?.company?.vote_quantity} reviews
                </div>
                {/* buttons */}
                <div className="w-full flex flex-row items-center justify-between mt-4">
                  <button className="w-[85%] text-white bg-purple2 rounded-md p-3 font-semibold cursor-pointer">
                    Write a reviews
                  </button>
                  <button className="w-[10%] text-purple2 bg-white border-purple2 border rounded-md p-3 flex flex-row items-center justify-center cursor-pointer">
                    <IoMdShare />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* tabs */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};
