import React from "react";

const InterestedList = [
  {
    id: "1",
    title: "Vul het offerte formulier in",
    icon: "images/icons/contact-form.png",
    desc: (
      <>
        Om een offerte op maat te versturen hebben wij enkele gegevens van u
        nodig zoals het aantal m2 en de ondergrond.
      </>
    ),
  },
  {
    id: "2",
    title: "Ontvang direct een offerte",
    icon: "images/icons/quote-request.png",
    desc: (
      <>
        Binnen 1 minuut ontvangt u van ons een offerte op maat voor uw project.
        Deze offerte is uiteraard geheel gratis en vrijblijvend.
      </>
    ),
  },
  {
    id: "3",
    title: "Plan een afspraak",
    icon: "images/icons/coffee-cup.png",
    desc: (
      <>
        Indien gewenst plannen we samen een afspraak in op onze showroom onder
        het genot van een kopje heerlijke koffie.
      </>
    ),
  },
];

export default function Interested({domain}) {
  return (
    <section className="interested">
      <div className="interested__element">
        <img src="images/wrapperElement.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="interested__inner">
          <div className="interested__title">
            <h2 className="big">Interesse in {domain}</h2>
            <h3 className="sm reg">Vraag een vrijblijvende offerte aan</h3>
          </div>
          <div className="interested__items">
            {InterestedList.map((item, index) => {
              return <InterestedItem key={index} itemData={item} />;
            })}
          </div>
          <button className="button bluebt">
            Vul hier het offerte formulier in
          </button>
          <h3 className="big">7000 klanten gingen u voor</h3>
        </div>
      </div>
    </section>
  );
}

const InterestedItem = ({ itemData }) => {
  return (
    <div className="interested__item">
      <div className="interested__item-image">
        <img src={itemData.icon} alt="" />
      </div>
      <h3 className="sm">{itemData.title}</h3>
      <p className="extra">{itemData.desc}</p>
    </div>
  );
};
