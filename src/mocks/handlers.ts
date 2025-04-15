import {http, HttpResponse} from "msw"
export const handlers = [

http.post('/id-card-verification', async ({request}:any)=> {
    const requestBody = await request.json();
    const type = requestBody.type
    if(type ==="Face Verification")
      {return HttpResponse.json({
          faceMatchingDistance: 1,
          finalAnalysis: 'Non-Compliance',
          reason: 'ID card and face not matched'
        })}
    else if(type==="ID Card Verification")
      {return HttpResponse.json({
            course:"E-STA",
            designation:"SUPERVISOR",
            validationUpto:"12-03-24",
            dataValidation:true,
            finalAnalysis:"Compliance"
            ,reason:"ID card is valid"
          })
  }}),
http.post('/first-aid-kit', async ({request}:any)=> {
    const requestBody = await request.json();
    console.log(requestBody)
    return HttpResponse.json({
          detectionData: [{ detectionTitle: "Bandage Detection", detectionValue: 97},
            { detectionTitle: "Cotton Detection", detectionValue: 0 },
            { detectionTitle: "Ointment Detection", detectionValue: 0 },
            { detectionTitle: "Antiseptic Detection", detectionValue: 87 },],
            finalAnalysis: "Non-Compliance",
            reason: "Some item are not deceted"
        })
  }),
  
http.post('/barricade-site', async ({request}:any)=> {
    const requestBody = await request.json();
    console.log(requestBody)
    return HttpResponse.json({
      barricadeDetection:true,
      barricadeDetectionValue:12,
      finalAnalysis: 'Compliance',
      reason: 'Barricade detected',
    })
  }),
// http.post('/ne-voltage-check', async ({request}:any)=> {
//     const requestBody = await request.json();
//     console.log(requestBody)
//     return HttpResponse.json({
//       extaractedVoltage:117.0,
//       voltageValidation:true,
//       finalAnalysis: 'Compliance',
//       reason: 'voltage detected',
//     })
//   }),
// http.post('/tools-safety', async ({request}:any)=> {
//     const requestBody = await request.json();
//     console.log(requestBody)
//     return HttpResponse.json({
//       "processedImageUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...", 
//       "detectionData": [
//         {
//           "detection_status": false,
//           "detection_cls": "non-insulated-tool",
//           "detection_id": 1,
//           "detection_conf": 0.88
//         },
//         {
//           "detection_status": false,
//           "detection_cls": "insulated-tool",
//           "detection_id": 2,
//           "detection_conf": 0.92
//         }
//       ],
//       "insulated_tools": 1,
//       "non_insulated_tools": 1,
//       "avg_detection_conf": 90.0,
//       "finalAnalysis": "Non-Compliance",
//       "reason": "Found 1 non-insulated tools which violates safety requirements.",
//       "is_insulated_tools_detected": true
//     })
//   }),
  http.post('/derrick', async ({request}:any)=> {
    const requestBody = await request.json();
    console.log(requestBody)
    return HttpResponse.json({
      derrick:{count:3,
      valid:true,avgDetectionConf:12},
      pole:{count:0,
        valid:false,avgDetectionConf:0},
      finalAnalysis: 'Compliance',
      reason: 'Poles are detected',
    })
  }),
  // http.post('/earthing-check', async ({request}:any)=> {
  //   const requestBody = await request.json();
  //   console.log(requestBody)
  //   return HttpResponse.json({
  //     earthingDetection:{detetionCount:5,isDetected:false,avgDetection:0},
  //     finalAnalysis: 'Non-Compliance',
  //     reason: 'Earthing is not detected',
  //   })
  // }),
  http.post('/fall-restraint', async ({request}:any)=> {
    const requestBody = await request.json();
    console.log(requestBody)
    return HttpResponse.json({
     isRope:true,
     avgDetection:98,
     finalAnalysis: 'Compliance',
      reason: 'Rope is detected',
    })
  }),
  http.post('/roof-edge-protection', async ({request}:any)=> {
    const requestBody = await request.json();
    console.log(requestBody)
    return HttpResponse.json({
     roofWallDetection:{isTrue:true,value:98},
     roofRaillingDetection:{isTrue:true,value:98},
     finalAnalysis: 'Compliance',
      reason: 'Rope is detected',
    })
  }),
  
];
