import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ localizer, date }) => {
  return (
    <div className="header-label">
      <span className="day-label">{localizer.format(date, 'dd')}</span>
      <span className="day-week-label"> {localizer.format(date, 'ddd')} </span>
    </div>
  )
}

Header.propTypes = {
  localizer: PropTypes.object,
  date: PropTypes.any,
}

export default Header
