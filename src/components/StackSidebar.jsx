const StackSidebar = ({
  selectedStack,
  handleRemove,
  handleClear,
}) => {
  return (
    <aside className="lg:sticky lg:top-24 lg:h-fit">
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-[9px] text-gray-400">
            {selectedStack.length} Technology Selected
          </p>
        </div>

        {/* Empty Stack */}
        {selectedStack.length === 0 ? (
          <div className="rounded-md border border-dashed border-gray-200 px-4 py-10 text-center">
            <p className="text-[10px] font-medium text-gray-400">
              Your stack is empty
            </p>

            <p className="mt-1 text-[9px] text-gray-300">
              Add technologies to build your stack
            </p>
          </div>
        ) : (
          /* Selected Items */
          <div className="space-y-2">
            {selectedStack.map((technologyInfo) => (
              <div
                key={technologyInfo.id}
                className="flex items-center justify-between rounded-md border border-gray-100 p-2"
              >

                {/* Technology Info */}
                <div className="flex items-center gap-2">
                  <img
                    src={technologyInfo.icon}
                    alt={technologyInfo.name}
                    className="h-6 w-6 object-contain"
                  />

                  <div>
                    <p className="text-[10px] font-semibold text-gray-800">
                      {technologyInfo.name}
                    </p>

                    <p className="text-[8px] text-gray-400">
                      {technologyInfo.category}
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(technologyInfo.id)}
                  className="text-lg leading-none text-gray-300 transition hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Remove All */}
        {selectedStack.length > 0 && (
          <button
            onClick={handleClear}
            className="mt-4 w-full rounded-md border border-red-100 py-2 text-[9px] font-medium text-red-400 transition hover:bg-red-50"
          >
            Remove All
          </button>
        )}

      </div>
    </aside>
  );
};

export default StackSidebar;