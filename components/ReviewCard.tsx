import StarIcon from "./StarIcon";

const ReviewCard = () => {
  return (
    <figure
      className="animate-fade-in rounded-3xl opacity-0 bg-white p-6 shadow-md shadow-gray-900/5 h"
      style={{ animationDelay: "0.4s" }}
    >
      <blockquote className="text-gray-900">
        <div className="flex">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p className="mt-4 text-lg font-semibold leading-6 before:content-[' “'] after:content-['” ']">
          Screw financial advisors.
        </p>
        <p className="mt-3 text-base leading-7">
          I barely made any money investing in mutual funds. With Pocket, I’m
          doubling my net-worth every single month.
        </p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['-_']">
        JordanBelfort1962
      </figcaption>
    </figure>
  );
};

export default ReviewCard;
