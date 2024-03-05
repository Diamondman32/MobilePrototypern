import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img src="image.png" />
      <h1>Don't Miss Out On The Best Location.</h1>
      <p>
        Our Renters Guide lays out every step you need to take to secure
        off-campus housing by your school: Budgets, Renters Insurance, credit,
        security deposits, scholarships and more.
      </p>
      <button
        onClick={() => window.open("https://www.edurain.org/srg-redesign")}
      >
        GO
      </button>
    </div>
  );
}
