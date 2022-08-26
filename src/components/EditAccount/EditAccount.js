import React, { useState } from "react";
import { withRouter } from "react-router-dom";

/* class EditAccount extends Component { */
function EditAccount(props) {
   /*  state = {
        account: {
            id: "",
            name: "",
            lastname: "",
            phone: "",
            email: ""
        }
    } */

    const [account, setAccount] = useState(props.accounts.filter(acc => acc.id === props.match.params.id)[0]);

    /*  componentDidMount() {
         const accountForEdit = this.props.accounts.filter(acc => acc.id == this.props.match.params.id)[0];
         this.setState({ account: accountForEdit });
     } */

    /* changeAccount = (event) => {
        const copyOfAccounts = { ...this.state.account };
        copyOfAccounts[event.target.id] = event.target.value;
        this.setState({ account: copyOfAccounts })
    } */

    /* editAccount = () => {
        this.props.editAccount(this.state.account);
        this.props.history.push("/");
    } */
    const editAccount = () => {
        props.editAccount(account);
        props.history.push("/");
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="display-4 m-4">Edit Account</div>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input onChange={e => { setAccount({ ...account, name: e.target.value }) }} type="text" id="name" className="form-control" value={account.name} /><br />
                            <input onChange={e => { setAccount({ ...account, lastname: e.target.value }) }} type="text" id="lastname" className="form-control" value={account.lastname} /><br />
                            <input onChange={e => { setAccount({ ...account, phone: e.target.value }) }} type="text" id="phone" className="form-control" value={account.phone} /><br />
                            <input onChange={e => { setAccount({ ...account, email: e.target.value }) }} type="text" id="email" className="form-control" value={account.email} /><br />
                            <button onClick={editAccount} className="form-control btn btn-info">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(EditAccount);