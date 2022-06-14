import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterData, filterOption, onChangeFilter} = props
  const {id, language} = languageFilterData
  const navButtonClassName =
    filterOption === languageFilterData.id
      ? 'nav-item-button active-nav-btn'
      : 'nav-item-button'

  const onSelectingFilter = () => {
    onChangeFilter(id)
  }

  return (
    <li className="nav-item">
      <button
        type="button"
        className={navButtonClassName}
        onClick={onSelectingFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
