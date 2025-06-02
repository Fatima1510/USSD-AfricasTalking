const AfricasTalking = require("africastalking");

// Initialize Africa's Talking SDK
const africastalking = AfricasTalking({
    apiKey: "YOUR_AFRICAS_TALKING_API", // Replace with your Africa's Talking API key
    username: "TEST", // Use 'sandbox' for testing
});


module.exports = async function sendSMS(number, message) {
    // TODO: Send message
    try {
        const result=await africastalking.SMS.send({
          to: number, 
          message: message,
          
        });
        console.log(result);
      } catch(ex) {
        console.error(ex);
      } 
};
// Function to send SMS
