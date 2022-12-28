import React from 'react'
import PropTypes from 'prop-types'
import Head from '../../components/Head/Head'
import Header from '../../components/Header/Header'
import BookingModal from '../../components/BookingModal/BookingModal'
import HeaderPlaceholder from '../../components/common/HeaderPlaceholder/HeaderPlaceholder'
import FreeFooter from '../../components/common/Footer/FreeFooter/FreeFooter'
import PricingSignUpLayout from '../../layouts/pricing/question/zero'

const PricingSignUpPage = ({ location }) => (
    <>
        <Head />
        <Header
            pageId={location.pathname}
        />
        <section className="full-section">
            <HeaderPlaceholder />
            <PricingSignUpLayout />
        </section>
    </>
)

PricingSignUpPage.propTypes = {
    location: PropTypes.shape({
        key: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
    }).isRequired,
}

export default PricingSignUpPage

