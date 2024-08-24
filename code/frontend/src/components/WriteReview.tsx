import Rate from './Rate';

const WriteReview = ({ name, avatar }: { name: string; avatar: string }) => {
  return (
    <div className="w-[60%] bg-white p-4">
      <div className="w-full text-text_1 text-[22px] font-bold h-8 flex flex-row">
        <div className="w-[20%] h-full object-cover bg-p">
          <img
            src={avatar}
            alt=""
            className="w-full p-2 object-cover mr-4 border border-purple"
          />
        </div>
        <div className="p-2 h-full">Write a review for {name}</div>
      </div>

      <Rate />
    </div>
  );
};

export default WriteReview;
