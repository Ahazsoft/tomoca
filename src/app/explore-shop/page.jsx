import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import HeaderThree from "@/layout/headers/header-3";
import Footer from "@/layout/footers/footer";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import Image from "next/image";
import Link from 'next/link';
import featured_1 from "@assets/img/product/featured/1.jpg";
import featured_2 from "@assets/img/product/featured/2.jpg";
import featured_3 from "@assets/img/product/featured/3.jpg";
import featured_4 from "@assets/img/product/featured/4.jpg";

export const metadata = {
  title: "Shofy - Category Page",
};

const promo_cards = [
  {
    id: 1,
    title: "200 grm Tin Can",
    discount: "Sale 20% off all store",
    img: featured_1,
    link: "/shop",
  },
  {
    id: 2,
    title: "100 grm",
    discount: "Sale 35% off",
    img: featured_2,
    link: "/shop",
  },
];

const featured_data = [
  {
    id: 1,
    img: featured_1,
    title: "200 grm Tin Can",
    label: "New",
    labelColor: "#DB6C2F",
  },
  {
    id: 2,
    img: featured_2,
    title: "100 grm",
    label: "Limited Release",
    labelColor: "#E14829",
  },
  {
    id: 3,
    img: featured_3,
    title: "375 grm",
    label: "Best Seller",
    labelColor: "#D35F44",
  },
  {
    id: 4,
    img: featured_4,
    title: "500 grm",
    label: "Best Seller",
    labelColor: "#DB6C2F",
  },
];

export default function CategoryPage() {
  return (
    <Wrapper>
      <HeaderThree  />

      {/* Breadcrumb */}
      {/* <ShopBreadcrumb title="Categories" subtitle="Categories" /> */}

      <section className="explore_shop__breadcrumb"
      style={{ backgroundColor: '#D57140' }} // Example color
      >
        {/* <div className="container">
          <h2 className="explore_shop__breadcrumb__title">Categories</h2>
          <ul className="explore_shop__breadcrumb__list">
            <span><Link href="/">Home</Link> •</span>
            <span>Categories</span>
          </ul>
        </div> */}
      </section>

      {/* === Top Promo Section === */}
      {/* <div className="promo__grid">
        {promo_cards.map((card) => (
          <div key={card.id} className="promo__card">
            <div className="promo__content">
              <span className="promo__discount">{card.discount}</span>
              <h3>{card.title}</h3>
              <Link href={card.link} className="promo__link">
                Shop Now →
              </Link>
            </div>
            <div className="promo__img">
              <Image src={card.img} alt={card.title} />
            </div>
          </div>
        ))}
      </div> */}

      {/* Category Grid */}
      <div className="explore_shop__parent container">
        <div className="explore_shop__grid">
          {featured_data.map((item) => (
            <div key={item.id} className="explore_shop__item">
              <div className="explore_shop__img">
                <Image src={item.img} alt={item.title} />
                {item.label && (
                  <span
                    className="explore_shop__label"
                    style={{ backgroundColor: item.labelColor }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
              <h4 className="explore_shop__title">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="container newsletter__content">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get updates about our latest products and offers.</p>
          <form className="newsletter__form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <Footer primary_style={true} />
    </Wrapper>
  );
}
