import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { login, logout, getUserData } from './service/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      topics: JSON.parse(localStorage.getItem('topics')) || [
        {
          id: '1',
          title: 'First',
          users: [
            {
              name: 'Tati'
            },
            {
              name: 'Piotr'
            }
          ]
        }
      ],
    };
    this.getUserData = this.getUserData.bind(this);
    this.loginHandle = this.loginHandle.bind(this);
    this.logoutHandle = this.logoutHandle.bind(this);
    this.addUserHandle = this.addUserHandle.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    getUserData().then((userData) => {
      this.setState({
        userData
      })
    })
  }

  loginHandle() {
    login()
    .then(() => {
      this.getUserData()
    })
  }

  logoutHandle() {
    logout().then(() => {
      this.setState({ userData: {} })
    })
  }

  addUserHandle(topicId) {
    const { userData, topics } = this.state;
    const { id: userDataId, name: userDataName } = userData;
    this.setState({
      topics: topics.map(topic => {
        console.log('in add user', topic);
        if (topic.id !== topicId) {
          return topic;
        }

        if (topic.users.some(user => user.id === userDataId)) {
          return topic;
        }
        return {
          ...topic,
          users: [...topic.users, {
            name: userDataName,
            id: userDataId,
          }]
        }
      })
    }, () => {
      localStorage.setItem('topics', JSON.stringify(this.state.topics));
    })
  }

  render() {
    const { userData, topics } = this.state;
    return (
      <div className="App">
        <Header
          userData={userData}
          loginHandle={this.loginHandle}
          logoutHandle={this.logoutHandle}
        />
        <Main topics={topics} userData={userData} addUser={this.addUserHandle} />
      </div>
    );
  }
}

export default App;
