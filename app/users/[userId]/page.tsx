async function fetchUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    return null;
  }
  const user = await res.json();
  return user;
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await fetchUser(userId);

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.username}</h1>
    </div>
  );
}
