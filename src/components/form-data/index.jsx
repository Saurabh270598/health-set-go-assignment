import CategoriesElement from "../Categories";
import Table from "../Table";
import InputElement from "./inputs";
import "./style.css";

const FormData = () => {
  return (
    <div className="form-data-wrapper">
      <InputElement />
      <CategoriesElement />
      <Table />
    </div>
  );
};
export default FormData;
