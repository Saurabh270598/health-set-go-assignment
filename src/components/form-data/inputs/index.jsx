import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editFormData, validateForm } from "../../../actions/action";
import SelectDropDown from "../../Categories/select-dropdown";
import "./style.css";
const InputElement = () => {
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    uid: "",
    phoneNumber: "",
    description: "",
    id: "",
    category: "",
  });
  const [openSelectDropDown, setOpenSelectDropDown] = useState(false);
  const store = {
    categoryList: useSelector((state) => state.formData.categoryList),
    category: useSelector((state) => state.formData.category),
    isEdit: useSelector((state) => state.formData.isEdit),
    list: useSelector((state) => state.formData.list),
    editId: useSelector((state) => state.formData.editId),
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (store.editId === formData.id && store.isEdit) {
      formData.category = store.category;
      dispatch(editFormData(formData));
      setFormData({
        name: "",
        email: "",
        uid: "",
        phoneNumber: "",
        description: "",
        id: "",
        category: "",
      });
      setOpenForm(false);
    }
    if (
      formData.id === "" &&
      formData.name.trim().length &&
      formData.email.trim().length &&
      formData.uid.trim().length
    ) {
      formData.id = Math.floor(Math.random() * 100);
      formData.category = store.category;
      dispatch(validateForm(formData));
      setFormData({
        name: "",
        email: "",
        uid: "",
        phoneNumber: "",
        description: "",
        id: "",
        category: "",
      });
      setOpenForm(false);
    } else if (
      !formData.name.trim().length &&
      !formData.email.trim().length &&
      !formData.uid.trim().length
    ) {
      alert("Please fill required fields");
    }
  };

  const handleSelectCategory = () => {
    setOpenSelectDropDown(true);
  };

  useEffect(() => {
    if (store.isEdit) {
      setOpenForm(true);
      store.list.filter((item) => {
        return item.id === store.editId ? setFormData(item) : item;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.isEdit, store.editId]);

  return (
    <div className="input-element-container">
      {!openForm ? (
        <button onClick={() => setOpenForm(true)}>Create Form</button>
      ) : (
        <div className="form-wrapper">
          <label>Name*</label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            required={true}
          />
          <label>Email*</label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            required
          />
          <label>UID*</label>
          <input
            value={formData.uid}
            onChange={(e) => setFormData({ ...formData, uid: e.target.value })}
            type="text"
            required
          />
          <label>Phone Number</label>
          <input
            maxLength={10}
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            type="number"
          />
          <label>Description</label>
          <input
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            type="text"
          />
          {openSelectDropDown ? (
            <SelectDropDown data={store.categoryList} fromFilterTable={false} />
          ) : (
            <button className="btn" onClick={handleSelectCategory}>
              Select Category
            </button>
          )}
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default InputElement;
