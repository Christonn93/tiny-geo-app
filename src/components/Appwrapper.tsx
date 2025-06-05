export const AppWrapper = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center py-10 px-4 text-center">
      <div className="flex flex-col items-center w-full">{props.children}</div>
    </div>
  );
};
