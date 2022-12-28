import React from 'react'
import PropTypes from 'prop-types'
import styles from './Quote.module.css'
import classConcat from '../../../../util/ClassConcat'
import short from 'short-uuid'

const Quote = ({ selectedIndex }) => {
  // Constants
  const quotes = [
    {
      quote: (
        <>
          Our crash rates are down tenfold,
          and our users are happier than ever.
        </>
      ),
      quotee: 'CPO Reflectly',
    },
    {
      quote: (
        <>
          Creating apps is just faster and more
          fun with Flutter.
        </>
      ),
      quotee: 'Product Officer, Hamilton',
    },
    {
      quote: (
        <>
          Another advantage of Flutter is that
          apps made with this technology have
          native performance
        </>
      ),
      quotee: 'Project Manager, MusicTutor',
    },
    {
      quote: (
        <>
          Debugging was simple
        </>
      ),
      quotee: 'Developer, SLMC',
    },
  ]
  // Pure Functions
  const renderQuote = (quote, selected) => (
    <p key={short.generate()} className={classConcat(
      styles.quote,
      selected ? styles.selected : null,
    )}
    >
      <em>{quote.quote}</em>
      <br />
      <strong>
        {quote.quotee}
      </strong>
    </p>
  )
  // Render
  return (
    <div className={styles.container}>
      {quotes.map((quote, index) => renderQuote(
        quote, index === selectedIndex,
      ))}
    </div>
  )
}

Quote.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
}

export default Quote
