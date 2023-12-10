import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const colorClasses = [css.color1, css.color2, css.color3, css.color4];
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage },index) => (
          <li key={id} className={`${css.item} ${colorClasses[index % colorClasses.length]}`}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Statistics };
