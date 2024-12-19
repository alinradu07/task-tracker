import NavigationLink from "./NavigationLink";
export default function NavigationMenu() {
  return (
    <aside className="menu">
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/board">Board</NavigationLink>
      <NavigationLink href="/dashboard">Dashboard</NavigationLink>
    </aside>
  );
}
