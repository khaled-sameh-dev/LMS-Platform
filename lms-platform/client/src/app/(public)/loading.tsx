export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-accent/30 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full animate-spin" />
        </div>
        <p className="text-white text-lg font-semibold">Loading...</p>
        <p className="text-dirty-grey text-sm mt-2">Please wait</p>
      </div>
    </div>
  );
}