import UserList from "./UserList";

function App() {
  const users = [
    { id: 1, name: "hamse", email: "hamse2@653u.com" },
    { id: 2, name: "mac", email: "mac@47u.com" },
  ];
  return <UserList users={users} />;
}
export default App;
