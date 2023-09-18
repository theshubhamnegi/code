import styles from "../styles/FilterButton.module.css";

const FilterButton = ({ value, checked, onChange, children, tag }) => {
  return (
    <label className={styles.filterButton}>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        id={tag}
      />
      {children}
      <span key={tag} className={tag}>
        {tag}
      </span>
    </label>
  );
};

export default FilterButton;
