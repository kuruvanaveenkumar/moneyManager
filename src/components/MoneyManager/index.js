import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    selectType: 'INCOME',
    transactionList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onAddSubmit = event => {
    event.preventDefault()

    const {title, amount, selectType} = this.state

    const selectItem = transactionTypeOptions.filter(
      each => each.optionId === selectType,
    )

    const newList = {
      id: uuidv4(),
      text: selectItem[0].displayText,
      title,
      amount,
    }

    if (title !== '' && amount !== '') {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newList],
        title: '',
        amount: '',
        selectType: 'INCOME',
      }))
    }
  }

  enterTitle = event => {
    this.setState({title: event.target.value})
  }

  enterAmount = event => {
    this.setState({amount: event.target.value})
  }

  onSelectType = event => {
    this.setState({selectType: event.target.value})
  }

  onAddButton = () => {
    const {title, amount, selectType} = this.state

    if (title !== '' && amount !== '') {
      const {balance, income, expenses} = this.state
      if (selectType === 'INCOME') {
        this.setState({balance: balance + parseInt(amount)})
        this.setState({income: income + parseInt(amount)})
      } else {
        this.setState({balance: income - parseInt(amount)})
        this.setState({expenses: expenses + parseInt(amount)})
      }
    }
  }

  deleteUser = (id, text, amount) => {
    const {transactionList} = this.state
    const filterList = transactionList.filter(each => each.id !== id)
    this.setState({transactionList: filterList})

    const {balance, income, expenses} = this.state

    if (text === 'Income') {
      this.setState({balance: amount - income})
      this.setState({income: income - amount})
    } else {
      this.setState({expenses: amount - expenses})
      this.setState({balance: balance + expenses})
    }
  }

  render() {
    const {
      title,
      amount,
      selectType,
      transactionList,
      balance,
      income,
      expenses,
    } = this.state

    return (
      <div className="bg-container">
        <div className="card-content">
          <div className="bg-image">
            <h1 className="main-heading">Hi,Richard</h1>
            <p className="text">
              Welcome back to your
              <span className="span-style">Money Manager</span>
            </p>
          </div>

          <MoneyDetails balance={balance} income={income} expenses={expenses} />

          <div className="transaction-container">
            <div className="transaction-card">
              <h1 className="transaction-heading ">Add Transaction</h1>
              <form onSubmit={this.onAddSubmit}>
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  type="text"
                  id="title"
                  placeholder="TITLE"
                  onChange={this.enterTitle}
                  value={title}
                />
                <br />
                <label htmlFor="amount">AMOUNT</label>
                <br />
                <input
                  type="text"
                  id="amount"
                  placeholder="AMOUNT"
                  onChange={this.enterAmount}
                  value={amount}
                />
                <br />
                <label htmlFor="type">TYPE</label>
                <br />
                <select value={selectType} onChange={this.onSelectType}>
                  <option value="INCOME">Income</option>
                  <option value="EXPENSES">Expenses</option>
                </select>
                <br />
                <button
                  className="add-button"
                  type="submit"
                  onClick={this.onAddButton}
                >
                  Add
                </button>
              </form>
            </div>
            <div className="history-card">
              <h1 className="transaction-heading ">History</h1>
              <div className="history-ul-list ">
                <p className="list-text ">Title</p>
                <p className="list-text ">Amount</p>
                <p className="list-text ">Type</p>
                <p>{undefined}</p>
              </div>
              <ul className="transaction-li">
                {transactionList.map(each => (
                  <TransactionItem
                    transactionItems={each}
                    key={each.id}
                    deleteUser={this.deleteUser}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
