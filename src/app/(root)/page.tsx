import { fetchUsers } from './action';

interface User {
  id: string;
  name: string | null;
  email: string | null;
}

export default async function Home() {
  let users: User[] = [];
  let error: string | null = null;

  try {
    users = await fetchUsers();
  } catch (e) {
    error = 'Failed to fetch users';
    console.error('Error fetching users:', e);
  }

  return (
    <div>
      <h1>Users</h1>
      {error && <p>Error: {error}</p>}
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}