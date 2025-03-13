
import { createContext, useState } from "react";

export const AppContext = createContext(null)

const AppProvider = ({ children }: any) => {
  const [idCardImageFile, setIdCardImageFile] = useState(null)
  const [rawFaceImageFile, setRawFileImage] = useState(null)
  const idCardImageFileUpload = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      setIdCardImageFile(file)
    }
  };
  const rawFaceImageFileUpload = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      setRawFileImage(file)
    }
  };
  const value: any = {
    idCardImageFileUpload,
    rawFaceImageFileUpload,
    idCardImageFile, rawFaceImageFile,
  }
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export default AppProvider;