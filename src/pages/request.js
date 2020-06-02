import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import RequestRide from "../components/Request/RequestRide";

const RequestPage = ({ data }) => (
  <Layout>
    <SEO title="Request a Ride" keywords={[`gatsby`, `application`, "react"]} />
    <RequestRide />
  </Layout>
);

export default RequestPage;
