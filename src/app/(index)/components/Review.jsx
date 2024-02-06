"use client";
import Slider from "react-slick";

const ReviewList = [
  {
    id: "1",
    avatar: "images/avatars/1.png",
    review: <>&quot;Uitstekend geholpen bij het aanbrengen van een betonvloer.&quot;</>,
    review_count: "5",
    name: "Angelo White",
    stars: "5",
  },
  {
    id: "2",
    avatar: "images/avatars/2.png",
    review: (
      <>&quot;Ben erg tevreden met mijn betonlook gietvloer in de woonkamer&quot;</>
    ),
    review_count: "5",
    name: "Rafael H",
    stars: "7",
  },
  {
    id: "3",
    avatar: "images/avatars/2.png",
    review: <>&quot;Uitstekend geholpen van een betonvloer.&quot;</>,
    review_count: "5",
    name: "Angelo White",
    stars: "1",
  },
  {
    id: "4",
    avatar: "images/avatars/1.png",
    review: <>&quot;Ben erg tevreden met mijn betonlook.&quot;</>,
    review_count: "5",
    name: "Rafael H",
    stars: "15",
  },
];

export default function Review() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="review">
      <div className="auto__container">
        <div className="review__inner">
          <div className="review__image">
            <img src="images/icons/review.png" alt="" />
          </div>
          <div className="review__items">
            <Slider {...settings}>
              {ReviewList.map((item, index) => {
                return <ReviewItem itemData={item} key={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

const ReviewItem = ({ itemData }) => {
  return (
    <div className="review__item">
      <div className="review__item-image">
        <img src={itemData.avatar} alt="" />
      </div>
      <div className="review__item-content">
        <p className="extrasm">{itemData.review}</p>
        <div className="review__item-body">
          <h5 className="bold">{itemData.name}
          </h5>
          <div className="review__item-row">
            <h5 className="sm">
              {itemData.review_count}{" "}
              {parseInt(itemData.review_count) > 1 ? "Reviews" : "Review"}
            </h5>
            <div className="stars">
              <img src="images/stars.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
