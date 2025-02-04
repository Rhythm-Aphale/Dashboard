import { useState } from 'react';
import useSWR from 'swr';
import { fetchUsers, fetchUserPosts } from '../utils/api';
import UserCard from '../components/UserCard';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/globals.css';

export default function Dashboard() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");

  // Fetch users
  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useSWR('/users', fetchUsers);

  // Fetch posts when a user is selected
  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
  } = useSWR(
    selectedUserId ? `/users/${selectedUserId}/posts` : null,
    () => fetchUserPosts(selectedUserId)
  );

  // Filter users based on the search term
  const filteredUsers = users?.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort users based on the selected sort option
  const sortedUsers = filteredUsers?.sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "company") {
      return a.company.name.localeCompare(b.company.name);
    }
    if (sortOption === "id") {
      return a.id - b.id;
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-4 bg-black text-white min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-8 text-gray-200 space-x-8">
        <span>Users</span>
        <span>Dashboard</span>
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-6 mx-16 justify-start">
        {/* Users Section */}
        <section className={selectedUserId ? "w-[80%]" : "flex-col"}>
          <h2 className="text-2xl font-semibold text-gray-300">Users</h2>
          <div className="sm:flex sm:gap-3 mt-10">
            <input
              type="text"
              placeholder="Search by name or email..."
              className="p-2 bg-gray-800 text-white border border-gray-600 rounded mb-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="p-2 bg-gray-800 text-white border border-gray-600 rounded mb-4"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="company">Sort by Company</option>
              <option value="id">Sort by ID</option>
            </select>
          </div>

          {usersLoading && <LoadingSpinner />}
          {usersError && <ErrorMessage message="Failed to load users" />}
          <div className="flex gap-5 flex-wrap mt-14 w-full">
            {sortedUsers?.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                isSelected={user.id === selectedUserId}
                onClick={() => setSelectedUserId(user.id)}
                selectedUserID={selectedUserId}
              />
            ))}
          </div>
        </section>

        {/* Posts Section */}
        {selectedUserId && (
          <section>
            <h2 className="text-2xl font-semibold mb-12 text-gray-300">Posts</h2>
            {postsLoading && <LoadingSpinner />}
            {postsError && <ErrorMessage message="Failed to load posts" />}
            <div className="h-[100vh] overflow-y-auto shadow-2xl flex flex-col gap-6">
              {posts?.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
