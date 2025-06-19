
import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and wait for video to be ready
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 500); // Small delay for smooth transition
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading your adventure...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Fallback loader animation since we can't access the video file */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-4 border-blue-500/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <h2 className="text-2xl font-bold text-primary dark:text-white mb-2">GlobeHopper</h2>
        <p className="text-gray-600 dark:text-gray-300">Interactive Scapes</p>
        <div className="mt-4 w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
