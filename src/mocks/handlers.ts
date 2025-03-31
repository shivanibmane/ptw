// src/mocks/handlers.js
import {http, HttpResponse} from "msw"

export const handlers = [
  
  http.get('/id-card-verification', async ()=> {
   return HttpResponse.json({
    faceMatchingDistance: 1,
    finalAnalysis: 'Non-Complinaces',
    reason: 'ID card and face not matched',
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
