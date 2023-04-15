import { FaStar } from "react-icons/fa";
export default function Rating({ num }) {
  return (
    <div>
      {[...Array(num)].map((star) => {
        return <FaStar />;
      })}
    </div>
  );
}