import "./balloon.css";
export default function Balloon() {
  return (
    <div className="balloon">
      <img
        id="balloonImg"
        draggable="false"
        src="images/balloon.png"
        alt="balloonImg"
      />
      <img
        id="neighborhoodImg"
        draggable="false"
        src="images/neighborhood.png"
        alt="an image of a neighborhood"
      />
      <h1>We Build Official College Off-Campus Housing Communities</h1>
      <p>
        We connect students with landlords and property management groups in a
        closed software ecosystem in partnership with colleges, creating a
        transparent process for landlords and students.
      </p>
    </div>
  );
}
