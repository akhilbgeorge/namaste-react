const StarRatingIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill="url(#ratingGradient)" />
      <path
        d="M10 13l-3.09 1.62.59-3.44-2.5-2.43 3.46-.5L10 5l1.54 3.25 3.46.5-2.5 2.43.59 3.44L10 13z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="ratingGradient"
          x1="10"
          y1="1"
          x2="10"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21973B" />
          <stop offset="1" stopColor="#128540" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StarRatingIcon;
