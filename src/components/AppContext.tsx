import { createContext, useState } from "react";
export const AppContext = createContext(null)

const AppProvider = ({ children }: any) => {
  // ID Card Verification
  const [idCardImageFile, setIdCardImageFile] = useState(null)
  const [rawFaceImageFile, setRawFaceImageFile] = useState(null)
  const [idCardImageUrl, setIdCardImageUrl]: any = useState(null)
  const [rawFaceImageUrl, setRawFaceImageUrl]: any = useState(null);
  const [isSelectedVerificationFile, setIsSelectedVerificationFile]: any = useState(false)
  const [selectedVerificationCheckbox, setSelectedVerificationCheckbox] = useState(null);

  const [selectedCheckboxValue, setSelectedCheckboxValue]: any = useState(false)
  // Firstaid Box
  const [firstAidKitImageFile, setfirstAidKitImageFile] = useState(null)
  const [firstAidKitImageUrl, setfirstAidKitImageUrl]: any = useState(null)

  const handleFileUpload = (
    event: any,
    setFile: Function,
    setUrl: Function
  ) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setUrl(URL.createObjectURL(file));
    }
  };

  const handleFileDelete = (
    setFile: Function,
    setUrl: Function
  ) => {
    setFile(null);
    setUrl(null);
  };



  const handleCheckboxChange = (type: any) => {
    setSelectedVerificationCheckbox((prev) => (prev === type ? null : type)); // Toggle selection
  };

  const fetchIdCardVerificationData = async () => {
    const response = await fetch("https://abc.com/id-verification", {
      method: "POST",
      headers: {
        "Accepte": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type: selectedVerificationCheckbox, idCardImage: idCardImageUrl,
        rawFaceImage: rawFaceImageUrl,
      })
    })
    console.log(response)
  }

  const value: any = {
    // ID Card Verification
    setIdCardImageFile,
    setRawFaceImageFile, handleFileDelete,
    setIdCardImageUrl,
    setRawFaceImageUrl,
    idCardImageFile, rawFaceImageFile, idCardImageUrl, rawFaceImageUrl, isSelectedVerificationFile, setIsSelectedVerificationFile, handleFileUpload,
    fetchIdCardVerificationData,
    selectedVerificationCheckbox, setSelectedVerificationCheckbox, handleCheckboxChange,
    selectedCheckboxValue, setSelectedCheckboxValue,
    // Firstaid Box
    firstAidKitImageFile, setfirstAidKitImageFile, firstAidKitImageUrl, setfirstAidKitImageUrl
  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export default AppProvider;