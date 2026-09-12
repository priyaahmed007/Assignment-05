const TechnologyCard = ({ technologyInfo, handleAdd, isSelected }) => {
  return (
    <div
      className={`rounded-lg p-[2px] transition-all duration-200 ${
        isSelected
          ? "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 shadow-md"
          : "border border-gray-200"
      }`}
    >
      <div className="rounded-[7px] bg-white p-4">
        {/* Top */}
        <div className="flex items-start justify-between">
         <img
  src={technologyInfo.icon}
  alt={technologyInfo.name}
  className="h-9 w-9 object-contain"
/>
          <span
            className={`rounded-full px-2 py-1 text-[9px] font-medium ${technologyInfo.badgeColor}`}
          >
            {technologyInfo.badge}
          </span>
        </div>

        {/* Name */}
        <h3 className="mt-3 text-sm font-bold text-gray-900">
          {technologyInfo.name}
        </h3>

        {/* Description */}
        <p className="mt-2 h-10 overflow-hidden text-[10px] leading-4 text-gray-400">
          {technologyInfo.description}
        </p>

        {/* Category + Rating */}
        <div className="mt-4 flex items-center justify-between text-[9px] text-gray-400">
          <span>{technologyInfo.category}</span>

          <span>⭐ {technologyInfo.rating}</span>
        </div>

        {/* Add Button */}
        <button
          onClick={() => handleAdd(technologyInfo)}
          disabled={isSelected}
          className={`mt-3 flex w-full items-center justify-center gap-1 rounded-md py-2 text-[10px] font-medium transition ${
            isSelected
              ? "cursor-not-allowed bg-gray-100 text-gray-400"
              : "bg-[#111827] text-white hover:bg-gray-800"
          }`}
        >
          {isSelected ? (
            <>
              <span>🚫</span>
              Already Added
            </>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
