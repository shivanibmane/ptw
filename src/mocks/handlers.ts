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
      {return HttpResponse.json({course:"E-STA",
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
          detectionData: [{ detectionTitle: "Bandage Detection", detectionValue: 95},
            { detectionTitle: "Cotton Detection", detectionValue: 86 },
            { detectionTitle: "Ointment Detection", detectionValue: 67 },
            { detectionTitle: "Antiseptic Detection", detectionValue: 87 },],
            finalAnalysis: "Compliance",
            reason: "All item are deceted"
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
http.post('/ne-voltage-check', async ({request}:any)=> {
    const requestBody = await request.json();
    console.log(requestBody)
    return HttpResponse.json({
      extaractedVoltage:117.0,
      voltageValidation:true,
      finalAnalysis: 'Compliance',
      reason: 'voltage detected',
    })
  }),
];
