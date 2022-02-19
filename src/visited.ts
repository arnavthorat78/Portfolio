import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/**
 * Firebase configuration object.
 */
const firebaseConfig = {
	apiKey: "AIzaSyAHkeQcGDQEU93OLbpThYRezvSN5yom9Qc",
	authDomain: "portfolio-ce7c8.firebaseapp.com",
	projectId: "portfolio-ce7c8",
	storageBucket: "portfolio-ce7c8.appspot.com",
	messagingSenderId: "1078891670722",
	appId: "1:1078891670722:web:8516d8be67cefd66955f5b",
};
initializeApp(firebaseConfig);

const db = getFirestore();

/**
 * A constant key which specifies the name of the visited key that should be used in local storage.
 *
 * @constant
 */
const LOCAL_STORAGE_VISITED_KEY = "visited";

/**
 * Check if the user has already visited the webpage.
 *
 * **Key**
 *
 * `true` - The user has already visited.
 *
 * `false` - The user hasn't visited yet.
 *
 * @returns A boolean specifing if the user has or hasn't visited the webpage yet. See the key above.
 */
const checkIfVisited = (): boolean => {
	return localStorage.getItem(LOCAL_STORAGE_VISITED_KEY) ? true : false;
};
