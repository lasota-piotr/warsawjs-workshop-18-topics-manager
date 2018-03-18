import hello from 'hellojs';

hello.init({
  github: 'f79961fa5aeebfd0458a'
}, { redirect_uri: 'http://localhost:3000' });

const github = hello('github');

export const login = () => {
  return github.login()
    .then(() => {
      github.api('/me').then((data) => {
        console.log(data);
        return data
      })
    }, (e) => {
      alert('Signin error: ' + e.error.message);
    })
};

export const logout = () => {
  return github.logout()
    .then(() => {
      console.log('signed out');
      return Promise.resolve();
  }, (e) => {
      console.log('Signed out error: ' + e.error.message);
    })
};

const isValid = function(session) {
  const currentTime = (new Date()).getTime() / 1000;
  return session && session.access_token && session.expires > currentTime;
};

const githubGetAuthResponse = github.getAuthResponse();

const getAccessToken = () =>
  JSON.parse(localStorage.getItem('hello')).github.access_token;

export const getUserData = () => {
  const isOnline = isValid(githubGetAuthResponse);
  if (!isOnline) {
    return Promise.resolve(false);
  }
  const accessToken = getAccessToken();
  return fetch(`https://api.github.com/user?access_token=${accessToken}`)
    .then(res => res.json())
};


