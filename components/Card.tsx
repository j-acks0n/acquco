import { ScaleIcon } from "@heroicons/react/outline";

const Card = ({ name, amount }) => {
  return (
    <div className="w-60 h-20">
      <div className="relative flex-1 flex flex-col gap-2 px-4">
        <label className="text-gray-800 text-base font-semibold tracking-wider">
          {name}
        </label>
        <label className="text-green-800 text-4xl font-bold">${amount}</label>
        <div className="absolute bg-red-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
          - 5%
        </div>
      </div>
    </div>
  );
};

export default Card;
