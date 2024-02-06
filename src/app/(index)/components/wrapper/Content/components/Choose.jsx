import React from "react";

const ChooseList = [
  {
    id: "1",
    title: "Kwaliteit en service",
    icon: "images/icons/quality.png",
    desc: (
      <>
        Bij <strong>Betonvloeren.nl</strong> staan kwaliteit en service voorop.
        Wij werken alleen met de beste materialen en vakmensen, en wij zorgen
        voor een klantgerichte en persoonlijke aanpak.
      </>
    ),
  },
  {
    id: "2",
    title: "Ervaring en expertise",
    icon: "images/icons/service.png",
    desc: (
      <>
        Bij <strong>Betonvloeren.nl</strong> staan kwaliteit en service voorop.
        Wij werken alleen met de beste materialen en vakmensen, en wij zorgen
        voor een klantgerichte en persoonlijke aanpak.
      </>
    ),
  },
  {
    id: "3",
    title: "Nazorg en garantie",
    icon: "images/icons/life-insurance.png",
    desc: (
      <>
        Bij Betonvloer.nl laten wij u niet in de steek na de plaatsing van uw
        betonvloer. Wij bieden u een nazorg en onderhoud van uw betonvloer, en
        een garantie van 5 jaar op uw betonvloer.
      </>
    ),
  },
];

export default function Choose({domain}) {
  return (
    <div className="content__choose">
      <h2>Kiest u voor voor {domain}</h2>
      <p className="extra">
        Bent u op zoek naar een betrouwbare, ervaringsrijke partner voor uw
        betonvloer? Bij <strong>Betonvloeren.nl</strong> bent u aan het juiste
        adres.
      </p>
      <p className="extra">
        Wij leveren kwaliteit en service op maat, tegen een scherpe prijs. Voor
        zowel particulier als zakelijk. Bij ons kunt u rekenen op:
      </p>
      <div className="content__choose-items">
        {ChooseList.map((item, index) => {
          return <ChooseItem itemData={item} key={index} />;
        })}
      </div>
      <button type="button" className="button bluebt">
        Vrijblijvende offerte aanvragen
      </button>
    </div>
  );
}
const ChooseItem = ({ itemData }) => {
  return (
    <div className="content__choose-item">
      <div className="content__choose-item-icon">
        <img src={itemData.icon} alt="" />
      </div>
      <div className="content__choose-item-content">
        <h3 className="sm">{itemData.title}</h3>
        <p className="xbig">{itemData.desc}</p>
      </div>
    </div>
  );
};
