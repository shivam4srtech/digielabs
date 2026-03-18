export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#020617] p-6 md:p-12">
      {/* Top Navigation Bar Skeleton */}
      <div className="flex justify-between items-center mb-12 animate-pulse">
        <div className="h-8 w-32 bg-slate-800 rounded-lg"></div>
        <div className="hidden md:flex gap-6">
          <div className="h-4 w-16 bg-slate-800 rounded-full"></div>
          <div className="h-4 w-16 bg-slate-800 rounded-full"></div>
          <div className="h-4 w-16 bg-slate-800 rounded-full"></div>
        </div>
        <div className="h-10 w-28 bg-indigo-600/20 rounded-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-10">
        {/* Hero Title Skeleton */}
        <div className="space-y-4 animate-pulse">
          <div className="h-12 md:h-20 w-3/4 bg-slate-800 rounded-2xl"></div>
          <div className="h-12 md:h-20 w-1/2 bg-slate-900 rounded-2xl"></div>
        </div>

        {/* Subtext Skeleton */}
        <div className="space-y-3 animate-pulse delay-75">
          <div className="h-4 w-full md:w-2/3 bg-slate-800/50 rounded-full"></div>
          <div className="h-4 w-full md:w-1/2 bg-slate-800/50 rounded-full"></div>
        </div>

        {/* Grid Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="h-64 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-8 space-y-4 overflow-hidden relative"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-slate-800/10 to-transparent"></div>
              
              <div className="h-12 w-12 bg-slate-800 rounded-2xl"></div>
              <div className="h-6 w-3/4 bg-slate-800 rounded-lg"></div>
              <div className="h-4 w-full bg-slate-800/50 rounded-lg"></div>
              <div className="h-4 w-5/6 bg-slate-800/50 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}