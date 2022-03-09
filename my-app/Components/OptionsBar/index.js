import css from "../../styles/optionsbar.module.css";
import SubmitModal from "../SubmitModal";
import LocationSelect from "../LocationSelect";

function OptionsBar({ handleOnChange }) {
  return (
    <div className={css.options}>
      <LocationSelect handleOnChange={handleOnChange} />
      {/* <p>All</p>
      <p>For Sale</p>
      <p>For Free</p>
      <SubmitModal /> */}
    </div>
  );
}

export default OptionsBar;
