import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategoryInFormData, filterForm } from "../../../actions/action";

const SelectDropDown = ({ data, fromFilterTable }) => {
  const [select, setSelect] = useState();
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  useEffect(() => {
    if (!fromFilterTable) {
      dispatch(addCategoryInFormData(select));
    } else {
      dispatch(filterForm(select));
    }
  }, [dispatch, select, fromFilterTable]);

  return (
    <div>
      <select value={select} onChange={handleSelect}>
        {data.map((item) => {
          return (
            <option key={item.id}>
              {item.file ? (
                <img
                  width={10}
                  height={10}
                  src={URL.createObjectURL(item.file)}
                  alt={item.name}
                />
              ) : null}
              <span>{item.name}</span>
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SelectDropDown;
