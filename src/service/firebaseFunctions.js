import { app } from '../service/firebaseConfig'
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import ErrorManager from './firebaseErrorManager'

const auth = getAuth()
const db = getFirestore(app)
const collection_ref = collection(db, 'users')
const manager = new ErrorManager()

export const firebaseInsert = async (obj) => {
  const data = await addDoc(collection_ref, obj)
}

export const firebaseCreateUser = (data, action) => {
  createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    updateProfile(user, {
      displayName: data.name + ' ' + data.surname,
    })

    delete data.password
    delete data.check_password
    
    firebaseInsert(data)
    action()
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(manager.errorMessage(errorCode))
    // ..
  });
}

export const FirebaseLoginUser = (email, password, action) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    action()
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(manager.errorMessage(errorCode))
  });
}

export const LogOut = () => {

  signOut(auth).then(() => {
    console.log('Deslogado com sucesso')
  }).catch((error) => {
    console.log('Erro ao deslogar')
    // alert(manager.errorMessage(error))
  })
}