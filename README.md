Users & Posts Dashboard

🚀 Overview

The Users & Posts Dashboard is a Next.js application that fetches and displays user profiles along with their posts. The dashboard provides a seamless UI for selecting users and viewing their corresponding posts.

🔹 Fetches user data from JSONPlaceholder Users API🔹 Fetches posts data from JSONPlaceholder Posts API🔹 Displays users in a stylish, responsive card layout🔹 Shows posts dynamically when a user is selected🔹 Includes search, sorting, and error handling for an enhanced experience

📌 Features

✅ Fetch & display users and their related posts dynamically✅ User selection highlights corresponding posts✅ Optimized state management using SWR for caching & performance✅ Search functionality to filter users by name or email✅ Sorting options for users by Name, Company, and ID✅ Fully responsive design with a clean and modern UI✅ Loading indicators & error handling for smooth UX✅ Modular component-based architecture

🛠️ Tech Stack

Frontend: Next.js, React.js, Tailwind CSS,JavaScript

State Management: React Hooks, SWR (for data fetching & caching)

UI Components: Custom React components for Users & Posts

API: JSONPlaceholder (mock API for users & posts)


🔧 Installation & Setup

Follow these steps to run the project locally:

1️⃣ Clone the Repository

git clone https://github.com/Rhythm-Aphale/Dashboard.git

cd users-posts-dashboard

2️⃣ Install Dependencies

npm install
# or
yarn install

3️⃣ Run the Development Server

npm run dev
# or
yarn dev

🔗 Open http://localhost:3000 in your browser.



🔄 API Endpoints

📌 Fetch Users

GET https://jsonplaceholder.typicode.com/users

Response Sample:

[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "leanne@example.com",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    },
    "company": { "name": "Romaguera-Crona" }
  }
]

📌 Fetch Posts by User

GET https://jsonplaceholder.typicode.com/posts?userId={id}

Response Sample:

[
  {
    "userId": 1,
    "id": 1,
    "title": "Sample Post Title",
    "body": "Post content goes here..."
  }
]

🛡️ Error Handling

✔️ Displays a loading spinner while fetching data✔️ Shows an error message if an API request fails✔️ Handles empty API responses gracefully

📊 Performance Optimizations

SWR (Stale-While-Revalidate): Ensures efficient data fetching with caching & revalidation

Debounced Search: Prevents excessive API calls while typing

Minimized Re-renders: Optimized React state management

🚀 Bonus Features

✨ Search Users: Filter users by name or email✨ Sort Users: By Name, Company and ID✨ Pagination/Infinite Scroll: Optimized post loading


