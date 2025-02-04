export default function UserCard({
  user,
  isSelected,
  onClick,
  selectedUserID
}) {
  const formattedAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

  return (
    <div
      className={`mb-8 ${selectedUserID ? "sm:w-[70%]" : "sm:w-[30%]"} w-[100vw]  
      p-6 rounded-lg shadow-md cursor-pointer transition-all 
      ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:shadow-lg'}`}
      onClick={onClick}
    >
      <p className="text-sm text-gray-400 mb-1">ID: {user.id}</p> 
      <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
      <p className="text-sm mb-1">{user.email}</p>
      <p className="text-sm mb-1">{formattedAddress}</p>
      <p className="text-sm font-medium">{user.company.name}</p>
    </div>
  );
}
