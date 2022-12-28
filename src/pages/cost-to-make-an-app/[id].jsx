import React, { useEffect } from "react";
import PropTypes from "prop-types";
import path from "path";
import Head from "../../components/Head/Head";
import Header from "../../components/Header/Header";
import BookingModal from "../../components/BookingModal/BookingModal";
import HeaderPlaceholder from "../../components/common/HeaderPlaceholder/HeaderPlaceholder";
import FreeFooter from "../../components/common/Footer/FreeFooter/FreeFooter";
import PricingQuestionLayout from "../../layouts/pricing/question";
import QUESTIONS from "../../constants/pricing/questions";
import { test } from "../../library/api/pageLoad";
import settings from "../../library/settings";

const PricingQuestionPage = ({ location }) => {
  const questionId = path.basename(location.pathname);
  const question = QUESTIONS.find(({ id }) => id === questionId);


  useEffect(() => {
    // console.log(process.argv);
    // test({
    //   env: settings[process.argv && process.argv[2]],
    //   uid: process.argv && process.argv[3],
    // });
  }, []);

  return (
    <>
      <Head />
      <Header pageId={location.pathname} />
      <section key={"namePage" + Math.random() * 100} className="full-section">
        <HeaderPlaceholder />
        <PricingQuestionLayout question={question} />
      </section>
      {/*<FreeFooter />*/}
    </>
  );
};

PricingQuestionPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default PricingQuestionPage;
