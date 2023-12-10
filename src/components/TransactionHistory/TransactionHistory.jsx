import css from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency },index) => (
          <tr key={id} className={index % 2 === 0 ? `${css.evenRow}` : `${css.oddRow}`}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
export {TransactionHistory};