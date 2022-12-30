import Button from "../elements/button/button";
import Select from "../elements/input/select";
import "./alert.css";
import { useState, useEffect } from "react";
import RangeInput from "../elements/range-input";
import Header from "../elements/header/header";
import Main from "../elements/main/main";

const Alert = ({ type, message, position, duration }) => {
  const alert_position = "alert-" + position.y + "-" + position.x;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => setIsVisible(false), 5000);

    return () => clearTimeout(timeOutId);
  }, []);
  console.log("alert-container " + type + " " + alert_position.toLowerCase());

  return (
    <>
      {isVisible && (
        <div
          className={
            "alert-container " + type + " " + alert_position.toLowerCase()
          }
        >
          <div className="alert-message">{message}</div>
          <div className="alert-close-btn">
            <span>&times;</span>
          </div>
        </div>
      )}
    </>
  );
};

const Toasts = ({ toasts }) => {
  const toastList = toasts?.map(({ id, message, timeout, position }) => (
    <Alert
      key={id}
      type={"alert-" + "success"}
      message={message}
      position={position}
    />
  ));

  return <div>{toastList}</div>;
};

const AlertPage = () => {
  const [position, setPosition] = useState({ x: "Left", y: "Top" });
  const [type, setType] = useState("success");
  const [isVisible, setIsVisible] = useState(false);
  const [duration, setDuration] = useState(5);
  const [toastId, setToastId] = useState(0);
  const [selected, setSelected] = useState({
    position_x: "Left",
    position_y: "Top",
    type: "",
  });

  const [toast, setToasts] = useState([]);

  const handleShowToast = () => {
    setToastId(toastId + 1);
    setToasts([
      ...toast,
      {
        id: toastId,
        message: "hello world",
        timeout: 5000,
        position: position,
      },
    ]);
  };

  return (
    <>
      <Header title="Toast Popup" />
      <Main>
        <Select
          label="Position"
          options={[
            { label: "Left", value: "Left" },
            { label: "Right", value: "Right" },
          ]}
          selected={selected.position_x}
          handleChange={(e) => {
            setPosition({ ...position, x: e.target.value });
            setSelected({ ...selected, position_x: e.target.value });
          }}
        />
        <Select
          label="Position"
          options={[
            { label: "Top", value: "Top" },
            { label: "Bottom", value: "Bottom" },
          ]}
          selected={selected.position_y}
          handleChange={(e) => {
            setPosition({ ...position, y: e.target.value });
            setSelected({ ...selected, position_y: e.target.value });
          }}
        />
        <Select
          label="Type"
          options={[
            { label: "Success", value: "success" },
            { label: "Error", value: "error" },
            { label: "Warning", value: "warning" },
            { label: "Info", value: "info" },
          ]}
          selected={selected.type}
          handleChange={(e) => {
            setType(e.target.value);
            setSelected({ ...selected, type: e.target.value });
          }}
        />
        <div className="alert-duration">
          <span>Duration</span>
          <RangeInput
            value={duration}
            min="3"
            max="10"
            handleChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <Button handleClick={handleShowToast} className="btn">
          show toast
        </Button>
        <Toasts toasts={toast} />
      </Main>
    </>
  );
};

export default AlertPage;
