import Logo from "./Logo";
import SearchBar from "./SearchBar";
import TaskBtn from "./TaskBtn";

function Header({ onSearch, onAddTask }) {
  return (
    <header className="header">
      <Logo />
      <SearchBar search={onSearch} />
      <TaskBtn onTaskCreated={onAddTask} />
    </header>
  );
}

export default Header;
