import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const RecipeReview = ({ rating, reviewCount }) => {
  const num = Math.floor(rating * 2) / 2;
  let isHalfStar = false;
  let emptyStar = 0;
  let noStar = [];
  if (num % 1 !== 0) {
    isHalfStar = true;
  } else {
    emptyStar = 5 - num;
    noStar = Array.from({ length: emptyStar }, (_, i) => i + 1);
  }
  const filledStar = Math.floor(num);

  const customerRating = Array.from({ length: filledStar }, (_, i) => i + 1);

  return (
    <div className="align-items-center d-flex">
      <div className="d-inline-flex text-warning fs-5">
        {customerRating.map((star) => (
          <IoMdStar key={star} />
        ))}
        {isHalfStar && <IoMdStarHalf />}
        {emptyStar > 0 && noStar.map((star) => <IoMdStarOutline key={star} />)} 
      </div>
      <span>({reviewCount})</span>
    </div>
  );
};
export default RecipeReview;
