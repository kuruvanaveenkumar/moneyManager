import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {balance, income, expenses} = this.props

    return (
      <div className="money-container">
        <div className="money-card-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="money-icon-image"
          />
          <div>
            <p className="balance-style">Your Balance</p>
            <p data-testid="balanceAmount" className="rs-style">
              Rs {balance}
            </p>
          </div>
        </div>

        <div className="money-card-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="money-icon-image"
          />
          <div>
            <p className="balance-style">Your Income</p>
            <p data-testid="incomeAmount" className="rs-style">
              Rs {income}
            </p>
          </div>
        </div>

        <div className="money-card-3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="money-icon-image"
          />
          <div>
            <p className="balance-style">Your Expenses</p>
            <p data-testid="expensesAmount" className="rs-style">
              Rs {expenses}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
