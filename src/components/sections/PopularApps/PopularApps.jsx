import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import useQuantisedScroller from '../../../hooks/useQuantisedScroller'
import styles from './PopularApps.module.css'
import classConcat from '../../../util/ClassConcat'
import AppDemo from './AppDemo/AppDemo'
import FadeTransition, { FADE_DIRECTION } from '../../common/FadeTransition/FadeTransition'
import StoreLinks from './StoreLinks/StoreLinks'
import ScrollIndicator from '../../common/ScrollIndicator/ScrollIndicator'
import Quote from './Quote/Quote'
import useOrientation, { ORIENTATION } from '../../../hooks/useOrientation'
import HeaderPlaceholder from '../../common/HeaderPlaceholder/HeaderPlaceholder'

const PopularApps = ({ groupIndex, hash }) => {
  // Refs
  const ref = React.createRef()
  // Constants
  const stepIds = [
    '',
    'hamilton',
    'music-tutor',
    'cryptomaniac',
  ]
  const storeLinks = [
    {
      apple: 'https://apps.apple.com/us/app/reflectly-mindfulness-journal/id1241229134',
      play: 'https://play.google.com/store/apps/details?id=com.reflectlyApp',
    },
    {
      apple: 'https://apps.apple.com/us/app/hamilton-the-official-app/id1255231054',
      play: 'https://play.google.com/store/apps/details?id=com.hamilton.app&e=-EnableAppDetailsPageRedesign',
    },
    {
      apple: null,
      play: 'https://play.google.com/store/apps/details?id=com.jsplash.musictutor',
    },
    {
      apple: null,
      play: 'https://play.google.com/store/apps/details?id=com.fadden.slmc',
    },
  ]
  // Redux
  const { stepIndices, navId } = useSelector((state) => state.QuantisedScroller)
  // Hooks
  const orientation = useOrientation()
  // useQuantisedScroller(hash, groupIndex, stepIds, ref)
  // Computations
  const navStep = stepIndices.get(navId) || { group: 0, index: 0 }
  const navIndex = navStep.index
  const isNav = (navStep.group === groupIndex)
  // Render
  return (
    <>
      <section
        className={classConcat('container-fluid', styles.section)}
        ref={ref}
      >
        <HeaderPlaceholder />
        <div className={classConcat(
          'row',
          'align-items-center',
          styles.row,
        )}
        >
          {
            orientation === ORIENTATION.LANDSCAPE
              ? <div className="col-2 col-lg-3 px-0" /> : null
          }
          <div
            className={classConcat(
              orientation === ORIENTATION.LANDSCAPE
                ? 'col-4 col-lg-3' : 'col-12',
              'px-0',
              styles.middleCol,
            )}
          >
            <div className={styles.headingContainer}>
              <FadeTransition
                tag="h1"
                direction={FADE_DIRECTION.NONE}
                delay="0.4s"
                show={isNav}
                className={classConcat('section__h1', styles.heading)}
              >
                Reflectly
            </FadeTransition>
              {
                orientation === ORIENTATION.PORTRAIT
                  ? (
                    <FadeTransition
                      tag="div"
                      direction={FADE_DIRECTION.NONE}
                      delay="0.6s"
                      show={isNav}
                      className={classConcat('section__h3', styles.subheading)}
                    >
                      <strong>
                        Built with flutter
                    </strong>
                      <br />
                    One code for iOS, Android and Web
                    </FadeTransition>
                  ) : null
              }
            </div>
            <FadeTransition
              tag="div"
              direction={FADE_DIRECTION.TOP}
              delay="0.05s"
              show={isNav}
              className={styles.appDemoContainer}
            >
              <AppDemo navIndex={0} />
            </FadeTransition>
          </div>
          <div className={classConcat(
            orientation === ORIENTATION.LANDSCAPE
              ? 'col-6 col-lg-5' : 'col-12',
            'px-0',
          )}
          >
            {
              orientation === ORIENTATION.LANDSCAPE
                ? (
                  <FadeTransition
                    tag="div"
                    direction={FADE_DIRECTION.NONE}
                    delay="0.6s"
                    show={isNav}
                    className={classConcat(
                      'section__h3',
                      styles.subheading,
                      styles.subheadingLandscape,
                    )}
                  >
                    <p className={classConcat(
                      styles.subheading1Landscape,
                    )}
                    >
                      <strong>
                        Built with flutter
                    </strong>
                    </p>
                    <p className={classConcat(
                      styles.subheading2Landscape,
                    )}
                    >
                      One code for iOS, Android and Web
                  </p>
                  </FadeTransition>
                ) : null
            }
            <Quote selectedIndex={0} />
            <StoreLinks
              show={isNav}
              navIndex={0}
              appleStoreUrl={isNav ? storeLinks[0].apple : null}
              playStoreUrl={isNav ? storeLinks[0].play : null}
            />
          </div>
        </div>
        {/* <ScrollIndicator
        count={4}
        navIndex={navIndex}
        show={isNav}
      /> */}
      </section>
      <section
        className={classConcat('container-fluid', styles.section)}
        ref={ref}
      >
        <HeaderPlaceholder />
        <div className={classConcat(
          'row',
          'align-items-center',
          styles.row,
        )}
        >
          {
            orientation === ORIENTATION.LANDSCAPE
              ? <div className="col-2 col-lg-3 px-0" /> : null
          }
          <div
            className={classConcat(
              orientation === ORIENTATION.LANDSCAPE
                ? 'col-4 col-lg-3' : 'col-12',
              'px-0',
              styles.middleCol,
            )}
          >
            <div className={styles.headingContainer}>
              <FadeTransition
                tag="h1"
                direction={FADE_DIRECTION.NONE}
                delay="0.4s"
                show={true}
                className={classConcat('section__h1', styles.heading)}
              >
                Hamilton
          </FadeTransition>
              {
                orientation === ORIENTATION.PORTRAIT
                  ? (
                    <FadeTransition
                      tag="div"
                      direction={FADE_DIRECTION.NONE}
                      delay="0.6s"
                      show={isNav}
                      className={classConcat('section__h3', styles.subheading)}
                    >
                      <strong>
                        Built with flutter
                  </strong>
                      <br />
                  One code for iOS, Android and Web
                    </FadeTransition>
                  ) : null
              }
            </div>
            <FadeTransition
              tag="div"
              direction={FADE_DIRECTION.TOP}
              delay="0.05s"
              show={isNav}
              className={styles.appDemoContainer}
            >
              <AppDemo navIndex={1} />
            </FadeTransition>
          </div>
          <div className={classConcat(
            orientation === ORIENTATION.LANDSCAPE
              ? 'col-6 col-lg-5' : 'col-12',
            'px-0',
          )}
          >
            {
              orientation === ORIENTATION.LANDSCAPE
                ? (
                  <FadeTransition
                    tag="div"
                    direction={FADE_DIRECTION.NONE}
                    delay="0.6s"
                    show={isNav}
                    className={classConcat(
                      'section__h3',
                      styles.subheading,
                      styles.subheadingLandscape,
                    )}
                  >
                    <p className={classConcat(
                      styles.subheading1Landscape,
                    )}
                    >
                      <strong>
                        Built with flutter
                  </strong>
                    </p>
                    <p className={classConcat(
                      styles.subheading2Landscape,
                    )}
                    >
                      One code for iOS, Android and Web
                </p>
                  </FadeTransition>
                ) : null
            }
            <Quote selectedIndex={1} />
            <StoreLinks
              show={isNav}
              navIndex={1}
              appleStoreUrl={isNav ? storeLinks[1].apple : null}
              playStoreUrl={isNav ? storeLinks[1].play : null}
            />
          </div>
        </div>
        {/* <ScrollIndicator
      count={4}
      navIndex={navIndex}
      show={isNav}
    /> */}
      </section>
      <section
        className={classConcat('container-fluid', styles.section)}
        ref={ref}
      >
        <HeaderPlaceholder />
        <div className={classConcat(
          'row',
          'align-items-center',
          styles.row,
        )}
        >
          {
            orientation === ORIENTATION.LANDSCAPE
              ? <div className="col-2 col-lg-3 px-0" /> : null
          }
          <div
            className={classConcat(
              orientation === ORIENTATION.LANDSCAPE
                ? 'col-4 col-lg-3' : 'col-12',
              'px-0',
              styles.middleCol,
            )}
          >
            <div className={styles.headingContainer}>
              <FadeTransition
                tag="h1"
                direction={FADE_DIRECTION.NONE}
                delay="0.4s"
                show={isNav}
                className={classConcat('section__h1', styles.heading)}
              >
                MusicTutor
        </FadeTransition>
              {
                orientation === ORIENTATION.PORTRAIT
                  ? (
                    <FadeTransition
                      tag="div"
                      direction={FADE_DIRECTION.NONE}
                      delay="0.6s"
                      show={isNav}
                      className={classConcat('section__h3', styles.subheading)}
                    >
                      <strong>
                        Built with flutter
                </strong>
                      <br />
                One code for iOS, Android and Web
                    </FadeTransition>
                  ) : null
              }
            </div>
            <FadeTransition
              tag="div"
              direction={FADE_DIRECTION.TOP}
              delay="0.05s"
              show={isNav}
              className={styles.appDemoContainer}
            >
              <AppDemo navIndex={2} />
            </FadeTransition>
          </div>
          <div className={classConcat(
            orientation === ORIENTATION.LANDSCAPE
              ? 'col-6 col-lg-5' : 'col-12',
            'px-0',
          )}
          >
            {
              orientation === ORIENTATION.LANDSCAPE
                ? (
                  <FadeTransition
                    tag="div"
                    direction={FADE_DIRECTION.NONE}
                    delay="0.6s"
                    show={isNav}
                    className={classConcat(
                      'section__h3',
                      styles.subheading,
                      styles.subheadingLandscape,
                    )}
                  >
                    <p className={classConcat(
                      styles.subheading1Landscape,
                    )}
                    >
                      <strong>
                        Built with flutter
                </strong>
                    </p>
                    <p className={classConcat(
                      styles.subheading2Landscape,
                    )}
                    >
                      One code for iOS, Android and Web
              </p>
                  </FadeTransition>
                ) : null
            }
            <Quote selectedIndex={2} />
            <StoreLinks
              show={isNav}
              navIndex={2}
              appleStoreUrl={isNav ? storeLinks[2].apple : null}
              playStoreUrl={isNav ? storeLinks[2].play : null}
            />
          </div>
        </div>
        {/* <ScrollIndicator
    count={4}
    navIndex={navIndex}
    show={isNav}
  /> */}
      </section>
    </>
  )
}

PopularApps.propTypes = {
  groupIndex: PropTypes.number.isRequired,
  hash: PropTypes.string.isRequired,
}

export default PopularApps
