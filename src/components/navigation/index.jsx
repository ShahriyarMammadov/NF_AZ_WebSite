import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const SiteNavigation = ({ navigationData }) => {
  const items = [
    {
      title: (
        <Link to={"/"}>
          <HomeOutlined />
        </Link>
      ),
    },
    {
      title: (
        <Link to={`/${navigationData?.nav}`}>{navigationData?.category}</Link>
      ),
    },
  ];

  if (navigationData?.subCategory != null) {
    items.push({
      title: <div to={"/"}>{navigationData.subCategory}</div>,
    });
  }

  return <Breadcrumb style={{ padding: "20px 5px" }} items={items} />;
};

export default SiteNavigation;
