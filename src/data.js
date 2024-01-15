import { ref, onValue } from "firebase/database";
import { database } from "./firebase";
const db = database;
const starCountRef = ref(db, "app");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  updateStarCount(postElement, data);
});
const updateStarCount = (postElement, data) => {
  console.log(data);
};
const AllData = () => {};
