import React from "react";
import Topsection from "./Topsection";
import CardsData from "./CardsData";
import Card from "./Card";
import "../index.css";
export default function App() {
  const cardElement = CardsData.map((Elem) => {
    return (
      <Card
        key={Elem.id}
        heading={Elem.heading}
        para={Elem.para}
        svg={Elem.svg}
        bordercolcor={Elem.bordercolor}
      />
    );
  });
  return (
    <div className="content">
      <Topsection />
      <div className="allcards">
        {cardElement[0]}
        <div className="midcards">
          {cardElement[1]}
          {cardElement[2]}
        </div>
        {cardElement[3]}
      </div>
    </div>
  );
}
