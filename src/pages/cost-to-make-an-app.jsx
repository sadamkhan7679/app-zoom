import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import HeaderPlaceholder from "../components/common/HeaderPlaceholder/HeaderPlaceholder";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";
import PricingLayout from "../layouts/pricing";
import Spinner from "react-bootstrap/Spinner";

const PricingPage = ({ location }) => {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 10);
    }
  }, [loading]);

  return (
    <>
      <Head />
      <Header pageId={location.pathname} />
      <section key={"costPage" + Math.random() * 100} className="full-section">
        <HeaderPlaceholder half />
        {loading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          >
            <Spinner animation="border" role="status" color={"white"} />
          </div>
        ) : (
          <PricingLayout />
        )}
      </section>
      <FreeFooter />
    </>
  );
};

PricingPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default PricingPage;
