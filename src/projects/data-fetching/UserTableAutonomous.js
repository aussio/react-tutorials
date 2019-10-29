import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Table.css';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

function rowClassNameFormat(row, rowIdx) {
  return rowIdx % 2 === 0 ? 'Gold-Row' : 'Silver-Row';
}

class UserTableAutonomous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.timer = setInterval(() => this.fetchUsers(), 5000);
  }

  fetchUsers = () => {
    this.setState({ isFetching: true });
    setTimeout(() => { // Fake 1000ms delay for viewability
      fetch(USER_SERVICE_URL)
        .then(response => response.json())
        .then(result => {
          this.setState({ users: result, isFetching: false });
        })
        .catch(e => {
          console.log(e);
          this.setState({ isFetching: false });
        });
    }, 1000);
  };

  componentDidUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    const { users } = this.state;
    const { isFetching } = this.state;
    return (
      <div>
        <BootstrapTable
          data={users}
          trClassName={rowClassNameFormat}
          options={{ noDataText: " " }}
        >
          <TableHeaderColumn
            isKey
            dataField='id'
          />
          <TableHeaderColumn dataField='name' />
          <TableHeaderColumn dataField='username' />
        </BootstrapTable>
        <p>{isFetching ? 'Fetching users...' : ''}</p>
      </div>
    );
  }
}

export default UserTableAutonomous;