# SMS Portal Script

This script demonstrates how to use the `ssdportal` library to interact with an SMS service. It includes examples of retrieving profile information and sending an SMS using a predefined template.

## Prerequisites

- Node.js installed on your machine.
- Access to the `ssdportal` library.
- An API key for authentication.

## Installation

1. Clone the repository or download the script.
2. Install the required dependencies by running:

   ```bash
   npm install ssdportal
   ```

## Usage

1. Replace `'xxxxxxx'` with your actual API key in the script.
2. Update the phone number and other parameters as needed.

### Example Code
```javascript
const ssd = require('ssdportal');

sms = new ssd(apiKey='xxxxxxx');

sms.getProfileInfo().then((result) => {
    console.log(result);
});

sms.sendSMS(
    template='OTP', 
    senderId='SSDPortal', 
    phoneNumber='+211928000000', 
    {
        'code': '123456',
        'expiry': '10 mins'
    }
).then((result) => {
    console.log(result);
});
```

### Explanation

- **Get Profile Info**: The script retrieves and logs the profile information associated with the API key.
- **Send SMS**: The script sends an SMS using the 'OTP' template. The message includes a code and an expiry time.

## Notes

- Ensure that the phone number is in the correct format.
- The `template`, `senderId`, and other parameters should be configured according to your service provider's requirements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.