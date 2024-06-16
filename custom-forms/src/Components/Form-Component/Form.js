import { AppContext } from "../../AppContext";

const Form = ({}) => {
  return (
    <AppContext.Provider
      value={{
        onSubmit: onSubmit,
        formData,
        uploading,
        loadingText,
      }}
    >
      <div>lets start....</div>
    </AppContext.Provider>
  );
};

export default Form;
