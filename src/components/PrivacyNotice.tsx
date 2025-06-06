export const PrivacyNotice = () => {
  return (
    <div className="bg-yellow-100/60 dark:bg-yellow-700/30 border border-yellow-400 dark:border-yellow-600 text-yellow-900 dark:text-yellow-100 rounded-lg px-6 py-3 mt-8 shadow-md w-full max-w-lg text-center mx-auto flex items-center justify-center gap-2">
      <svg className="w-6 h-6 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0ZM12 17h.01" />
      </svg>
      <div className="flex-1 text-left gap-1.5">
        <p>
          <strong className="font-semibold">Privacy Notice:</strong>
        </p>
        <p>This app does not save or store any of your location data.</p>
      </div>
    </div>
  );
};
