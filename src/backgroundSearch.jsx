import "./searchBar.css";
import SearchBar from "./searchBar";
export default function BackgroundSearch() {
  return (
    <div className="background-search">
      <img
        draggable="false"
        id="apartments"
        src="images/hero.png"
        alt="apartments"
      />
      <SearchBar />
    </div>
  );
}
