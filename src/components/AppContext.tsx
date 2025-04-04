import { createContext, useState } from "react";
import { toast } from "sonner";
export const AppContext = createContext(null)

const AppProvider = ({ children }: any) => {
  const [selectedVerificationCheckpoint, setSelectedVerificationCheckpoint] = useState(null);
  // ID Card Verification
  const [idCardImageFile, setIdCardImageFile] = useState(null)
  const [rawFaceImageFile, setRawFaceImageFile] = useState(null)
  const [idCardImageUrl, setIdCardImageUrl]: any = useState(null)
  const [rawFaceImageUrl, setRawFaceImageUrl]: any = useState(null);
  const [isSelectedVerificationFile, setIsSelectedVerificationFile]: any = useState(false)
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedCheckboxValue, setSelectedCheckboxValue]: any = useState(false)

  // Firstaid Box
  const [firstAidKitImageFile, setfirstAidKitImageFile] = useState(null)
  const [firstAidKitImageUrl, setfirstAidKitImageUrl]: any = useState(null)

  // Barricade Sites
  const [barricadeSiteFile, setBarricadeSiteFile] = useState(null)
  const [barricadeSiteImageUrl, setBarricadeSitetImageUrl]: any = useState(null)

  // Voltage Check
  const [nevoltageCheckFile, setNEVoltageCheckFile] = useState(null)
  const [nevoltageCheckUrl, setNEVoltageCheckUrl]: any = useState(null)


  const [verificationOutputValues, setVerificationOutputValues]: any = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = (
    event: any,
    setFile: Function,
    setUrl: Function
  ) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setUrl(URL.createObjectURL(file));
      event.target.value = "";
    }
  };

  const handleFileDelete = (
    setFile: Function,
    setUrl: Function
  ) => {
    setFile(null);
    setUrl(null);
    setIsSelectedVerificationFile(null)
  };

  const handleCheckboxChange = (type: any) => {
    setSelectedVerificationCheckpoint((prev) => (prev === type ? null : type)); // Toggle selection
  };


  const verificationInputData = async (endpoint: any, enpointPostData: any) => {
    setIsSelectedVerificationFile(true)
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(enpointPostData)
      })
      const data = await response.json()
      setVerificationOutputValues(data)
      console.log(data)
      setIsLoading(false)
      if (data.finalAnalysis === "Compliance") {
        toast.success("Reason", {
          description: data.reason
        });
      } else {
        toast.error("Reason", {
          description: data.reason
        });
      }

    } catch (e) { console.log(e) }
  }

  const value: any = {
    // ID Card Verification
    setIdCardImageFile,
    setRawFaceImageFile, handleFileDelete,
    setIdCardImageUrl,
    setRawFaceImageUrl,
    idCardImageFile, rawFaceImageFile, idCardImageUrl, rawFaceImageUrl, isSelectedVerificationFile, setIsSelectedVerificationFile, handleFileUpload,
    verificationInputData,
    selectedVerificationCheckpoint, setSelectedVerificationCheckpoint, handleCheckboxChange,
    selectedCheckbox, setSelectedCheckbox,
    selectedCheckboxValue, setSelectedCheckboxValue,
    // Firstaid Box
    firstAidKitImageFile, setfirstAidKitImageFile, firstAidKitImageUrl, setfirstAidKitImageUrl,

    // Barricaded Sites
    barricadeSiteFile, setBarricadeSiteFile, barricadeSiteImageUrl, setBarricadeSitetImageUrl,

    // Voltage Check
    nevoltageCheckFile, setNEVoltageCheckFile,
    nevoltageCheckUrl, setNEVoltageCheckUrl,

    // Data handling
    isLoading, verificationOutputValues
  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export default AppProvider;