import { FaStar } from "react-icons/fa";

const Rating = ({ rate, total }: { rate: number; total: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(total)].map((_, i) => {
        const filled = i < rate;
        return (
          <FaStar
            key={i}
            size={20}
            color={filled ? "#FFD700" : "#E0E0E0"} // gold + grey
          />
        );
      })}
    </div>
  );
};

export default Rating;
