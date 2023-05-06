import { getFirestore, doc, setDoc, collection, addDoc, query} from 'firebase/firestore';
import { db, auth } from '../Firebase'
/*import { firebaseApp } from '../App';

const db = getFirestore(firebaseApp);
*/

// ADD CRYPTO TO FAVORITES

export const addCryptoToFavorites = async (crypto) => {
  try {
    const cryptoRef = collection(db, 'cryptos');
    await addDoc(cryptoRef, crypto);
    console.log('Favorited crypto', crypto);
  } catch (error) {
    console.error(error);
  }
};

// GET FAVORITE CRYPTOS FROM DATABASE

export const getCryptos = async () => {
  try {
    const userId = auth.currentUser.uid;
    const cryptoRef = collection(db, 'cryptos');
    const snapshot = await query(cryptoRef, where('userId', '==', userId));
    const fetchedCryptos = [];
    snapshot.forEach((doc) => {
      const fetchedCrypto = { id: doc.id, ...doc.data() };
      fetchedCryptos.push(fetchedCrypto);
    });
    return fetchedCryptos;
  } catch (error) {
    console.log(error);
  }
};