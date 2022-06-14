import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterData, filterOption} = props
  const {language} = languageFilterData
  const navButtonClassName =
    filterOption === languageFilterData.id
      ? 'nav-item-button active-nav-btn'
      : 'nav-item-button'
  return (
    <li className="nav-item">
      <button type="button" className={navButtonClassName}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
