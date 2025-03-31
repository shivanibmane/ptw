// src/mocks/handlers.js
import {http, HttpResponse} from "msw"

export const handlers = [
  

  http.get('/id-card-verification', async ()=> {
   return HttpResponse.json({
// Face Verification
    faceMatchingDistance: 1,
    finalAnalysis: 'Non-Complinaces',
    reason: 'ID card and face not matched',

// ID Card Verification 
    // course:"E-STAC",
    // designation:"SUPERVISOR",
    // validationUpto:"21 Dec 2025",
    // dataValidation:true,
    // finalAnalysis:"Compliance"
    // ,reason:"ID card is valid"
  })
  }),

http.post('/id-card-verification', async ({request}:any)=> {
    const requestBody = await request.json();
    return HttpResponse.json({
      message:"Mock verification successful",
      receiveData:requestBody
    })
  }),

];
