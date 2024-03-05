import "./dontMissOut.css";

export default function DontMissOutSection() {
  return (
    <div className="App">
      <img draggable="false" src="images/image.png" alt="People on campus" />
      <div id="dontMissOutText">
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
    </div>
  );
}
