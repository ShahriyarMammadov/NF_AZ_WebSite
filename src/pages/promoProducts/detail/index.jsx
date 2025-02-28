import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants/index";
import "./index.scss";
import SiteNavigation from "../../../components/navigation";
import { Button, Carousel, Image, Spin } from "antd";
import { Helmet } from "react-helmet";

const PromoProductsDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const products =
    location.state?.promoProducts ||
    JSON.parse(sessionStorage.getItem("promoProducts")) ||
    [];

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    getProductByID();

    if (location.state?.promoProducts) {
      sessionStorage.setItem(
        "promoProducts",
        JSON.stringify(location?.state?.promoProducts?.slice(0, 10))
      );
    }
  }, [id]);

  const getProductByID = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${BASE_URL}promoProducts/${id}`);
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div id="productDataByID">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data?.title}</title>
        <link
          rel="shortcut icon"
          href="../../assets/td logo 1.png"
          type="image/x-icon"
        />
      </Helmet>

      <div className="container">
        {loading ? (
          <div
            style={{
              width: "100%",
              height: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <>
            <SiteNavigation
              navigationData={{
                category: "Promo məhsullar",
                navigate: "home",
                nav: "promo-products",
                subCategory: data?.name,
              }}
            />

            <div className="productContent">
              <div className="carousel">
                <Carousel arrows infinite={true} draggable>
                  {data?.images?.map((image, index) => (
                    <div key={index}>
                      <Image.PreviewGroup
                        items={data?.images?.map((img) => `${img}`)}
                      >
                        <Image src={`${image}`} />
                      </Image.PreviewGroup>
                    </div>
                  ))}
                </Carousel>

                <p className="reviewCount">
                  Bu məhsula {data?.review_count} dəfə baxılıb
                </p>
              </div>

              <div className="desc">
                <h2 className="title">{data?.name}</h2>

                <p
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: data?.description,
                  }}
                ></p>

                <div className="detail">
                  <p className="price">Qiymət: {data?.price} ₼</p>
                  <p className="available">
                    Stokda {data?.available} ədəd mövcüddur.
                  </p>
                </div>

                <div className="orderBtn">
                  <Button>Sifariş et</Button>
                </div>
              </div>
            </div>

            <h2 className="otherProducts">Digər məhsullar</h2>

            <div className="products-grid">
              {products?.slice(0, 10)?.map((product) => (
                <Link
                  className="product-card"
                  key={product?._id}
                  to={{
                    pathname: `/promo-products/${product?._id}`,
                    state: { promoProducts: products },
                  }}
                >
                  <img
                    src={`${product?.cover_image}`}
                    alt={product?.name}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-name">{product?.name}</h3>

                    <p className="product-category">
                      Stokda {product?.available} ədəd var
                    </p>

                    <span className="product-price">
                      Qiymət: {product?.price} AZN
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PromoProductsDetailPage;
