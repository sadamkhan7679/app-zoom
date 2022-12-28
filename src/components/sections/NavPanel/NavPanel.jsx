import React from 'react'
import PropTypes from 'prop-types'
import classConcat from '../../../util/ClassConcat'
import styles from './NavPanel.module.css'
import NavPanelLink from './NavPanelLink/NavPanelLink'
import CtaButton from '../../common/CtaButton/CtaButton'
import useIsInView from '../../../hooks/useIsInView'
import FadeTransition, { FADE_DIRECTION } from '../../common/FadeTransition/FadeTransition'

const NavPanel = ({ links }) => {
  // Hooks
  const ref = React.createRef()
  const isInView = useIsInView(ref)
  // Render
  return (
    <section className={styles.navPanel} ref={ref}>
      <FadeTransition
        tag="nav"
        delay="0.2s"
        show={isInView}
        className={classConcat(
          'container',
          styles.container,
        )}
      >
        <div className={classConcat(
          'row',
          styles.row,
        )}
        >
          {links.map(({ to, icon, text }, index) => (
            <div
              key={to}
              className={classConcat(
                'col-sm-6',
                'py-3',
                styles.col,
              )}
            >
              <NavPanelLink
                index={index}
                to={to}
                icon={icon}
                show={isInView}
              >
                {text}
              </NavPanelLink>
            </div>
          ))}
        </div>
      </FadeTransition>
      <FadeTransition
        tag="div"
        delay="0.66s"
        show={isInView}
        direction={FADE_DIRECTION.NONE}
        className={classConcat(
          'container',
          styles.btnContainer,
        )}
      >
        <CtaButton
          to="/contact-us"
          children= "Contact Us"
          className={styles.bookingBtn}
          show
        />
      </FadeTransition>
    </section>
  )
}
NavPanel.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default NavPanel
