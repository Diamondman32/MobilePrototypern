import styled from "styled-components";
export default function Neighborhood2() {
  const Image = styled.img`
    width: 100vw;
    object-fit: contain;
  `;

  return (
    <div className="neighborhood2">
      <Image
        draggable="false"
        id="neighborhood2"
        src="images/otherNeighborhood.png"
        alt="temporary search bar"
      />
    </div>
  );
}
