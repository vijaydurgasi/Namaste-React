const Shimmer = () => {
    return (
        <div className="flex flex-wrap gap-5 p-5">
            {Array(12)
                .fill("")
                .map((_, index) => (
                    <div
                        key={index}
                        className="w-[200px] h-[320px] rounded-xl bg-gray-200 overflow-hidden">
                        <div className="h-[150px] bg-gray-300 animate-pulse" />

                        <div className="p-3 space-y-2">
                            <div className="h-4 bg-gray-300 rounded animate-pulse" />
                            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse" />

                            <div className="flex justify-between items-center mt-4">
                                <div className="h-5 w-10 bg-gray-300 rounded animate-pulse" />
                                <div className="h-4 w-12 bg-gray-300 rounded animate-pulse" />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Shimmer;
