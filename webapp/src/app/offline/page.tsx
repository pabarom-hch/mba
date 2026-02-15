import { WifiOff } from "lucide-react";

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800">
            <WifiOff className="h-12 w-12 text-zinc-500" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-zinc-100 mb-3">
          You&apos;re Offline
        </h1>
        <p className="text-zinc-400 mb-6">
          It looks like you&apos;ve lost your internet connection. Some features
          may be unavailable until you&apos;re back online.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
