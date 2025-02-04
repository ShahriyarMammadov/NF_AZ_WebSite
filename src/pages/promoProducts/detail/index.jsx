import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants/index";
import "./index.scss";
import SiteNavigation from "../../../components/navigation";
import { Carousel, Image, Spin } from "antd";
import { Helmet } from "react-helmet";

const PromoProductsDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductByID();
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, []);

  const getProductByID = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}promoProducts/${id}`);
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  console.log(data);

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
                <Carousel arrows infinite={true}>
                  {data?.images?.map((image, index) => (
                    <div key={index}>
                      <Image.PreviewGroup
                        items={data?.images?.map(
                          (img) =>
                            `https://nfazcloudrailway.up.railway.app/uploads/${img}`
                        )}
                      >
                        <Image
                          src={`https://nfazcloudrailway.up.railway.app/uploads/${image}`}
                        />
                      </Image.PreviewGroup>
                    </div>
                  ))}
                </Carousel>
                <p className="reviewCount">
                  Bu məhsula {data?.review_count} dəfə baxılıb
                </p>
              </div>

              <div className="desc">
                <h2>{data?.name}</h2>
                <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>

                <div className="detail">
                  <p className="price">Qiymət: {data?.price} ₼</p>
                  <p className="available">{data?.available} ədəd mövcüddur</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PromoProductsDetailPage;
