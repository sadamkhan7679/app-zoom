import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import useInnerVh from "../hooks/useInnerVh";
import styles from "../components/buildPhases/buildPhases.module.css";
import VideoSection from "../components/buildPhases/VideoSection/VideoSection";
import HeaderPlaceholder from "../components/common/HeaderPlaceholder/HeaderPlaceholder";
import PhasesSection from "../components/buildPhases/PhasesSection/PhasesSection";
import DesignSection from "../components/buildPhases/DesignSection/DesignSection";
import BuildingSection from "../components/buildPhases/BuildingSection/BuildingSection";
import MaintenanceSection from "../components/buildPhases/MaintenanceSection/MaintenanceSection";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";
import { test } from "../library/api/pageLoad";
import settings from "../library/settings";

const BuildPhasesPage = ({ location }) => {
  // Hooks
  useInnerVh();
  useEffect(() => {
    // console.log(process.argv);
    // test({
    //   env: settings[process.argv && process.argv[2]],
    //   uid: process.argv && process.argv[3],
    // });
  }, []);
  // Render
  return (
    <>
      <Head />
      <Header pageId={location.pathname} />
      <article className={styles.article}>
        <HeaderPlaceholder />
        <VideoSection />
        <PhasesSection />
        <DesignSection />
        <BuildingSection />
        <MaintenanceSection />
      </article>
      <FreeFooter />
    </>
  );
};

BuildPhasesPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default BuildPhasesPage;
