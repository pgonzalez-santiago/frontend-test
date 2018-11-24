import React from 'react'
import PropTypes from 'prop-types'
// Languages
import I18n from '../assets/lang'

const RepositoryDetail = ({ repoName }) => (
  <div id="page-wrap" style={{ padding: 100 }}>
    <p>{I18n.t('sampleText')}</p>
    <p>{ repoName }</p>
  </div>
)

export default RepositoryDetail

RepositoryDetail.propTypes = {
  repoName: PropTypes.string,
}
