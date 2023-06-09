export const initialState = {
  formData: {
    list: [],
    categoryList: [
      {
        id: Math.floor(Math.random() * 100),
        name: "default",
      },
    ],
    category: "default",
    isEdit: false,
    editId: "",
  },
};
