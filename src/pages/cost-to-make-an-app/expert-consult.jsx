import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "../../components/Head/Head";
import Header from "../../components/Header/Header";
import HeaderPlaceholder from "../../components/common/HeaderPlaceholder/HeaderPlaceholder";
import PricingMoreLayout from "../../layouts/pricing/question/more";
import PricingEstimateLayout from "../../layouts/pricing/estimate";
import { useSelector } from "react-redux";
import { navigate } from "gatsby";


const ExpertConsultSignUpPage = ({ location }) => {
    const state = useSelector((state) => state.Pricing);
    useEffect(() => {

    }, []);

    return (
        <>
            <Head />
            <Header pageId={location.pathname} />
            <section className="full-section">
                <HeaderPlaceholder />
                <PricingMoreLayout PricingEstimateLayout={PricingEstimateLayout} section={3} route={location.pathname} />
            </section>
        </>
    );
};

ExpertConsultSignUpPage.propTypes = {
    location: PropTypes.shape({
        key: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
    }).isRequired,
};

export default ExpertConsultSignUpPage;
