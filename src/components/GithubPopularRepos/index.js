import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GithubPopularRepos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    repoItemsList: [],
    filterOption: 'ALL',
  }

  componentDidMount = () => {
    this.getRepoItemsList()
  }

  getRepoItemsList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/popular-repos'
    const response = await fetch(url)
    const data = await response.json()

    if (response.ok) {
      this.setState({
        repoItemsList: data.popular_repos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  inProgressView = () => (
    <div className="loader-container">
      <div testid="loader">
        <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
      </div>
    </div>
  )

  successView = () => {
    const {repoItemsList} = this.state
    return (
      <ul className="view-container">
        {repoItemsList.map(eachRepo => (
          <RepositoryItem repoDetails={eachRepo} key={eachRepo.id} />
        ))}
      </ul>
    )
  }

  failureView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-text">Something Went Wrong</h1>
    </div>
  )

  navBarContainer = () => {
    const {filterOption} = this.state
    return (
      <ul className="nav-container">
        {languageFiltersData.map(eachFilterLanguage => (
          <LanguageFilterItem
            languageFilterData={eachFilterLanguage}
            filterOption={filterOption}
          />
        ))}
      </ul>
    )
  }

  renderMainContainerView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.inProgressView()
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="github-popular-repos-bg-container">
        <h1 className="main-heading">Popular</h1>
        {this.navBarContainer()}
        {this.renderMainContainerView()}
      </div>
    )
  }
}

export default GithubPopularRepos
