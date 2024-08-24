import { useState } from 'react';
import { Star } from 'lucide-react';

const Rate = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex flex-row mt-8">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Star
            className="cursor-pointer "
            onClick={() => setRating(ratingValue)}
            color={ratingValue <= rating ? 'orange' : 'gray'}
            fill={ratingValue <= rating ? 'orange' : 'none'}
            size={24}
          />
        );
      })}
    </div>
  );
};

export default Rate;
