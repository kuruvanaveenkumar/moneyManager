import './index.css'

const TransactionItem = props => {
  const {transactionItems, deleteUser} = props
  const {id, title, amount, text} = transactionItems
  const onDelete = () => {
    deleteUser(id, text, amount)
  }
  return (
    <li className="transaction-history">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{text}</p>
      <button
        type="button"
        className="delete-button "
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
