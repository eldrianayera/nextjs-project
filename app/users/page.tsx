export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);

  return (
    <div>
      {users.map((user: { id: number; name: string }) => (
        <h1>{user.name}</h1>
      ))}
    </div>
  );
}
