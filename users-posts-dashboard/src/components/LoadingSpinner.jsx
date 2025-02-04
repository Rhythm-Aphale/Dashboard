import { ClockIcon } from '@heroicons/react/24/outline';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <ClockIcon className="h-12 w-12 animate-spin text-blue-500" />
    </div>
  );
}