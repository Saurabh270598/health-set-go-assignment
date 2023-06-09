import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editForm } from "../../actions/action";
import "./style.css";

const Table = () => {
  const [openSelectDropDown, setOpenSelectDropDown] = useState(false);
  const [select, setSelect] = useState("");
  const dispatch = useDispatch();
  const store = {
    list: useSelector((state) => state.formData.list),
    categoryList: useSelector((state) => state.formData.categoryList),
  };

  const filterList = () => {
    return store.list.filter((item) => {
      if (select === "") {
        return item;
      } else {
        return item.category === select;
      }
    });
  };

  const handleEditForm = (item) => {
    dispatch(editForm(item.id));
  };
  const FilterTable = () => {
    const store = {
      categoryList: useSelector((state) => state.formData.categoryList),
    };
    return (
      <div>
        {openSelectDropDown ? (
          <select value={select} onChange={(e) => setSelect(e.target.value)}>
            {store.categoryList.map((item) => {
              return <option key={item.id}>{item.name}</option>;
            })}
          </select>
        ) : (
          <button className="btn" onClick={() => setOpenSelectDropDown(true)}>
            Filter Table
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    filterList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select, store.list]);

  return (
    <div className="table-wrappper">
      <table border={1} cellPadding={10} width="30%">
        <tr>
          <td>S.No</td>
          <td>Name</td>
          <td>Email</td>
          <td>UID</td>
          <td>Phone Number</td>
          <td>Description</td>
          <td>{FilterTable()}</td>
        </tr>

        {filterList().map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <th>{item.email}</th>
              <th>{item.uid}</th>
              <th>{item.phoneNumber || "-"}</th>
              <th>{item.description || "-"}</th>
              <th>{item.category}</th>
              <button className="btn" onClick={() => handleEditForm(item)}>
                Edit
              </button>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
