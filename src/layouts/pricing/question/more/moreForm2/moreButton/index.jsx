import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { Link } from 'gatsby'

const MoreButton = () => {
  // Render
  return (
    <div className={clsx("container-fluid", "py-2", styles.container)}>


      <Link to={'/cost-to-make-an-app/estimate'}>
        <button
          type="button"
          className={clsx(styles.button)}
        >
          Break Down
          </button>
      </Link>
    </div>
  );
};

export default MoreButton
