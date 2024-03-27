import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  return (
    <div style={{ width: "19px", height: "19px" }}>
      <ClipLoader color="#fff" size={19} />
    </div>
  );
}

export default Spinner;
