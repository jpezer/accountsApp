import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AccoountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";


function App() {
    /* state = {
        accounts: [
            { id: 1, name: "Josip", lastname: "Pezer", phone: "22-2-222", email: "j@gmail.com" },
            { id: 2, name: "Niko", lastname: "Nikic", phone: "33-33-33", email: "n@gmail.com" },
        ]
    } */
    const [accounts, setAccounts] = useState([
        { id: 1, name: "Josip", lastname: "Pezer", phone: "22-2-222", email: "j@gmail.com" },
        { id: 2, name: "Niko", lastname: "Nikic", phone: "33-33-33", email: "n@gmail.com" },
    ])

    /* const addNewAccountToState = (acc) => {
        this.setState({
            accounts: [...this.state.accounts, acc]
        })
    } */
    const addNewAccountToState = (acc) => {
        setAccounts([...accounts, acc])
    }

    /* const deleteAccount = (id) => {
        const accountsCopy = [...this.state.accounts];
        const newCopyAccount = accountsCopy.filter(account => account.id !== id);
        this.setState({ accounts: newCopyAccount });
    } */
    const deleteAccount = (id) => {
        const newCopyAccount = accounts.filter(account => account.id !== id);
        setAccounts(newCopyAccount);
    }

    /* const editAccount = (acc) => {
        const copyAccounts = [...this.state.accounts]
        let accountPossition = copyAccounts.map(account => account.id).indexOf(acc.id);
        copyAccounts[accountPossition] = acc;
        this.setState({ accounts: copyAccounts })
    } */
    const editAccount = (acc) => {
        let accountPossition = accounts.map(account => account.id).indexOf(acc.id);
        accounts[accountPossition] = acc;
        setAccounts(accounts)
    }


    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact>
                {/* <AccoountsTable accounts={this.state.accounts} /> */}
                <AccoountsTable accounts={accounts} />
            </Route>
            <Route path="/add">
                {/* <AddAccount addNewAccountToState={this.addNewAccountToState} /> */}
                <AddAccount addNewAccountToState={addNewAccountToState} />
            </Route>
            <Switch>
                <Route path="/edit/:id">
                    {/* <EditAccount accounts={this.state.accounts} editAccount={this.editAccount} /> */}
                    <EditAccount accounts={accounts} editAccount={editAccount} />
                </Route>
                <Route path="/edit">
                    {/* <EditTable accounts={this.state.accounts} deleteAccount={this.deleteAccount} /> */}
                    <EditTable accounts={accounts} deleteAccount={deleteAccount} />
                </Route>
            </Switch>

        </BrowserRouter>

    )
}
export default App;