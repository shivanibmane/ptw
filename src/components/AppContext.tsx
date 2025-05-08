import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
export const AppContext = createContext(null)

const AppProvider = ({ children }: any) => {
  const [selectedVerificationCheckpoint, setSelectedVerificationCheckpoint] = useState(null);
  const [isSelectedVerificationFile, setIsSelectedVerificationFile] = useState(false)

  // ID Card Verification
  const [idCardImageFile, setIdCardImageFile] = useState(null)
  const [idCardImageUrl, setIdCardImageUrl] = useState(null)

  // Face Verification
  const [personImageUrl, setPersonImageUrl] = useState(null);
  const [personImageFile, setPersonImageFile] = useState(null)
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedCheckboxValue, setSelectedCheckboxValue] = useState(false)

  // Firstaid Box
  const [firstAidKitImageFile, setFirstAidKitImageFile] = useState(null)
  const [firstAidKitImageUrl, setfirstAidKitImageUrl] = useState(null)

  // Barricade Sites
  const [barricadeSiteFile, setBarricadeSiteFile] = useState(null)
  const [barricadeSiteImageUrl, setBarricadeSiteImageUrl] = useState(null)

  // Voltage Check
  const [neutralEarthVoltageCheckFile, setNeutralEarthVoltageCheckFile] = useState(null)
  const [neutralEarthVoltageCheckUrl, setNeutralEarthVoltageCheckUrl] = useState(null)


  // Tools Safety
  const [toolsSafetyFile, setToolsSafetyFile]: any = useState(null)
  const [toolsSafetyUrl, setToolsSafetyUrl]: any = useState(null)

  // Derrick 
  const [derrickFile, setDerrickFile] = useState(null)
  const [derrickUrl, setDerrickUrl] = useState(null)

  // Earthing Check
  const [earthingCheckFile, setEarthingCheckFile,] = useState(null)
  const [earthingCheckUrl, setEarthingCheckUrl,
  ] = useState(null)

  // Fall Restraint
  const [fallRestraintFile, setFallRestraintFile] = useState(null)
  const [fallRestraintUrl, setFallRestraintUrl] = useState(null)

  // Roof-edge Protection
  const [roofEdgeProtectionFile, setRoofEdgeProtectionFile] = useState(null)
  const [roofEdgeProtectionUrl, setRoofEdgeProtectionUrl] = useState(null)

  // Personal Protection Equipment
  const [personalProtectionEquipmentFile, setPersonalProtectionEquipmentFile] = useState(null)
  const [personalProtectionEquipmentUrl, setPersonalProtectionEquipmentUrl] = useState(null)
  const [equipmentCheckPointsValue, setEquipmentCheckPointsValue] = useState<string[]>([])

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

  useEffect(() => {

  }, [verificationOutputValues])

  const verificationInputData = async (endpoint: any, files: any, equipmentCheckPointValue?: []) => {
    setIsSelectedVerificationFile(true)
    try {
      const formData = new FormData()
      if (files instanceof File || files instanceof Blob) {

        formData.append("imageFile", files);
      } else {
        Object.entries(files).forEach(([key, file]) => {
          formData.append(key, file as File);
        });
      }
      if (equipmentCheckPointValue && Array.isArray(equipmentCheckPointValue)) {
        formData.append("equipmentCheckPointValue", JSON.stringify(equipmentCheckPointValue));
      }
      setIsLoading(true)
      const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      await setVerificationOutputValues(data)
      setIsLoading(false)
      if (data.resaon) {
        if (data.resaon) {
          toast.success("Reason", {
            description: data.reason
          });
        } else {
          toast.error("Reason", {
            description: data.reason
          });
        }
      }
    } catch (e) { console.log(e) }
  }

  const value: any = {
    selectedVerificationCheckpoint, setSelectedVerificationCheckpoint,
    handleFileUpload, handleFileDelete,
    isSelectedVerificationFile, setIsSelectedVerificationFile,

    // Data handling
    isLoading, verificationOutputValues,
    verificationInputData,

    // ID Card Verification
    idCardImageFile, setIdCardImageFile,
    idCardImageUrl, setIdCardImageUrl,

    // Face Verification
    personImageFile, personImageUrl,
    setPersonImageFile, setPersonImageUrl,
    handleCheckboxChange, selectedCheckbox, setSelectedCheckbox,
    selectedCheckboxValue, setSelectedCheckboxValue,

    // Firstaid Box
    firstAidKitImageFile, setFirstAidKitImageFile, firstAidKitImageUrl, setfirstAidKitImageUrl,

    // Barricaded Sites
    barricadeSiteFile, setBarricadeSiteFile, barricadeSiteImageUrl, setBarricadeSiteImageUrl,

    // Voltage Check
    neutralEarthVoltageCheckFile, setNeutralEarthVoltageCheckFile,
    neutralEarthVoltageCheckUrl, setNeutralEarthVoltageCheckUrl,

    // Tools Safety
    toolsSafetyFile, setToolsSafetyFile,
    toolsSafetyUrl, setToolsSafetyUrl,

    // Derrcik
    derrickFile, setDerrickFile,
    derrickUrl, setDerrickUrl,

    // Earthing Check
    earthingCheckFile, setEarthingCheckFile,
    earthingCheckUrl, setEarthingCheckUrl,

    // Fall Restraint
    fallRestraintFile, setFallRestraintFile,
    fallRestraintUrl, setFallRestraintUrl,

    //Roof-edge Protecton
    roofEdgeProtectionFile, setRoofEdgeProtectionFile,
    roofEdgeProtectionUrl, setRoofEdgeProtectionUrl,

    // Personal Protection Equipment
    personalProtectionEquipmentFile, setPersonalProtectionEquipmentFile,
    personalProtectionEquipmentUrl, setPersonalProtectionEquipmentUrl,
    equipmentCheckPointsValue, setEquipmentCheckPointsValue

  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export default AppProvider;

