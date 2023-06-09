import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../actions/action";
import "./style.css";

const CategoriesElement = () => {
  const [newCategoryUpload, setNewCategoryUpload] = useState(false);
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
    file: undefined,
    id: "",
  });
  const dispatch = useDispatch();
  const handleFile = (event) => {
    setCategoryData({ ...categoryData, file: event.target.files[0] });
  };
  const handleAddNewCategory = () => {
    if (categoryData.name.trim().length) {
      categoryData.id = Math.floor(Math.random() * 100);
      if (categoryData.file === undefined) {
        categoryData.file = "";
      }
      if (categoryData.description === "") {
        categoryData.description = "";
      }
      dispatch(addCategory(categoryData));
      setNewCategoryUpload(false);
      setCategoryData({
        name: "",
        description: "",
        file: undefined,
        id: "",
      });
    }
  };
  return (
    <div className="category-wrapper">
      {newCategoryUpload ? (
        <div className="form-wrapper">
          <label>Icon</label>
          <input type="file" name="file" onChange={handleFile} />
          <label>Name*</label>
          <input
            required
            type="text"
            value={categoryData.name}
            onChange={(e) =>
              setCategoryData({ ...categoryData, name: e.target.value })
            }
          />
          <label>Description</label>
          <input
            type="text"
            value={categoryData.description}
            onChange={(e) =>
              setCategoryData({
                ...categoryData,
                description: e.target.value,
              })
            }
          />
          <button className="btn" onClick={handleAddNewCategory}>
            Add
          </button>
        </div>
      ) : (
        <>
          <button className="btn" onClick={() => setNewCategoryUpload(true)}>
            Add New Category
          </button>
        </>
      )}
    </div>
  );
};
export default CategoriesElement;
