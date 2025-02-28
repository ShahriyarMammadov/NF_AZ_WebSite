import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { Helmet } from "react-helmet";
import SiteNavigation from "../../components/navigation";
import { Spin } from "antd";
import { Link } from "react-router-dom";

const PromoProducts = () => {
  const [promoProducts, setPromoProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductsData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}promoProducts`);
      setPromoProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div id="promoProducts">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Təbiət Dostları Azərbaycan | Promo Məhsullar</title>
        <link
          rel="shortcut icon"
          href="../../assets/td logo 1.png"
          type="image/x-icon"
        />
      </Helmet>

      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Promo məhsullar",
            navigate: "home",
            nav: "promo-products",
          }}
        />

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
          <div className="products-grid">
            {promoProducts?.map((product) => (
              <Link
                className="product-card"
                key={product?._id}
                to={`/promo-products/${product?._id}`}
                state={{ promoProducts }}
              >
                <img
                  src={`${product?.cover_image}`}
                  alt={product?.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-name">{product?.name}</h3>
                  {/* <p className="product-category">
                    {product?.category?.join(", ")}
                  </p> */}
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
        )}
      </div>
    </div>
  );
};

export default PromoProducts;
