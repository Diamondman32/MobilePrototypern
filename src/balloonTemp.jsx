import "./balloon.css";
import { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

function OrientedElement() {
  const [orientation, setOrientation] = useState(null);
  useEffect(() => {
    checkOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange,
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners(subscription);
    };
  }, []);
  const checkOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(orientation);
  };
  const handleOrientationChange = (o) => {
    setOrientation(o.orientationInfo.orientation);
  };

  if (orientation === "PORTRAIT") {
    // portrait
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
        <h1>We Build Official College Off-Campus Communities</h1>
        <p>
          We connect students with landlords and property management groups in a
          closed software ecosystem in partnership with colleges, creating a
          transparent process for landlords and students.
        </p>
      </div>
    );
  }
  return (
    // landscape
    <div className="balloon">
      <div id="img">
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
      </div>
      <div id="text">
        <h1>We Build Official College Off-Campus Communities</h1>
        <p>
          We connect students with landlords and property management groups in a
          closed software ecosystem in partnership with colleges, creating a
          transparent process for landlords and students.
        </p>
      </div>
    </div>
  );
}

export default function Balloon() {
  return <OrientedElement />;
}
