import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase';

const signUpWithEmailAndPassword = async (email, password) => {
  const auth = getAuth(app);
  try {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCred;

  } catch (error) {
    console.log(error);
  }
};

export default signUpWithEmailAndPassword;
