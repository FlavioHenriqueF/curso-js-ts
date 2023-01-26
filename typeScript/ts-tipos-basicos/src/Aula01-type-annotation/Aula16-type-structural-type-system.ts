type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const user1 = { username: 'Flavio', password: '12345' };
const user2 = { username: 'Flavio', password: '12345' };
const loggedIn = verifyUser(user1, user2);
console.log(loggedIn);
