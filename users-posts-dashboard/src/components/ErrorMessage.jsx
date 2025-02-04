import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ErrorMessage({ message }) {
  return (
    <div className="flex items-center justify-center p-4 bg-red-100 rounded-lg text-red-700">
      <ExclamationTriangleIcon className="h-6 w-6 mr-2" />
      <span>{message}</span>
    </div>
  );
}