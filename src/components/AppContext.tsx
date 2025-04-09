import { createContext, useState } from "react";
import { toast } from "sonner";
export const AppContext = createContext(null)

const AppProvider = ({ children }: any) => {
  const [selectedVerificationCheckpoint, setSelectedVerificationCheckpoint] = useState(null);
  // ID Card Verification
  const [idCardImageFile, setIdCardImageFile] = useState(null)
  const [rawFaceImageFile, setRawFaceImageFile] = useState(null)
  const [idCardImageUrl, setIdCardImageUrl] = useState(null)
  const [rawFaceImageUrl, setRawFaceImageUrl] = useState(null);
  const [isSelectedVerificationFile, setIsSelectedVerificationFile] = useState(false)
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedCheckboxValue, setSelectedCheckboxValue] = useState(false)

  // Firstaid Box
  const [firstAidKitImageFile, setfirstAidKitImageFile] = useState(null)
  const [firstAidKitImageUrl, setfirstAidKitImageUrl] = useState(null)

  // Barricade Sites
  const [barricadeSiteFile, setBarricadeSiteFile] = useState(null)
  const [barricadeSiteImageUrl, setBarricadeSitetImageUrl] = useState(null)

  // Voltage Check
  const [nevoltageCheckFile, setNEVoltageCheckFile] = useState(null)
  const [nevoltageCheckUrl, setNEVoltageCheckUrl] = useState(null)


  // Tools Safety
  const [toolsSafetyFile, setToolsSafetyFile] = useState(null)
  const [toolsSafetyUrl, setToolsSafetyUrl] = useState(null)

  // Derrick 
  const [derrickFile, setDerrickFile] = useState(null)
  const [derrickUrl, setDerrickUrl] = useState(null)

  // Earthing Check
  const [earthingCheckFile, setEarthingCheckFile,] = useState(null)
  const [earthingCheckUrl, setEarthingCheckUrl,
  ] = useState(null)

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
    setIsSelectedVerificationFile(false)
  };

  const handleFileDelete = (
    setFile: Function,
    setUrl: Function
  ) => {
    setFile(null);
    setUrl(null);
    setIsSelectedVerificationFile(false)
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

    // Tools Safety
    toolsSafetyFile, setToolsSafetyFile,
    toolsSafetyUrl, setToolsSafetyUrl,

    // Derrcik
    derrickFile, setDerrickFile,
    derrickUrl, setDerrickUrl,

    // Earthing Check
    earthingCheckFile, setEarthingCheckFile,
    earthingCheckUrl, setEarthingCheckUrl,

    // Data handling
    isLoading, verificationOutputValues
  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export default AppProvider;