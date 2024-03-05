import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { getAllJSDocTagsOfKind } from "typescript";

import BackgroundSearch from "./backgroundSearch";
import DontMissOutSection from "./dontMissOutSection";
import Balloon from "./balloon";
import Neighborhood2 from "./neighborhood";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BackgroundSearch />
    <Balloon />
    <DontMissOutSection />
    <Neighborhood2 />
  </StrictMode>,
);
