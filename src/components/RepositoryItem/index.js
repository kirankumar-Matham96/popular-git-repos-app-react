import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const updatedRepoDetails = {
    avatarUrl: repoDetails.avatar_url,
    forksCount: repoDetails.forks_count,
    id: repoDetails.id,
    issuesCount: repoDetails.issues_count,
    name: repoDetails.name,
    starsCount: repoDetails.stars_count,
  }

  return (
    <li className="repository-item-container">
      <div className="repo-title-container">
        <img
          src={updatedRepoDetails.avatarUrl}
          alt={updatedRepoDetails.name}
          className="repo-icon"
        />
        <h1 className="repo-name">{updatedRepoDetails.name}</h1>
      </div>
      <div className="repo-data-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="repo-data-icon"
        />
        <p className="repo-data-description">
          {updatedRepoDetails.starsCount} stars
        </p>
      </div>
      <div className="repo-data-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="repo-data-icon"
        />
        <p className="repo-data-description">
          {updatedRepoDetails.forksCount} forks
        </p>
      </div>
      <div className="repo-data-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="repo-data-icon"
        />
        <p className="repo-data-description">
          {updatedRepoDetails.issuesCount} open issues
        </p>
      </div>
    </li>
  )
}

export default RepositoryItem
