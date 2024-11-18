class ssdportal {
    constructor(apiKey) {
        this.headers = {
            'Content-Type': 'application/json',
            'apiKey': apiKey
        }
        this.version = 'v1'
        this.apiUrl = 'https://ssdportal.com/api/' + this.version;
    }

    async getProfileInfo() {
        try {
            const response = await fetch(`${this.apiUrl}/user`, {
                method: 'GET',
                headers: this.headers
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data['data'];
        } catch (error) {
            console.error('Error fetching profile information:', error);
            throw error;
        }
    }

    async sendSMS(template, senderId, phoneNumber, attr) {
        try {
            const response = await fetch(`${this.apiUrl}/messaging`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    "template": template,
                    "senderId": senderId,
                    "phoneNumber": phoneNumber,
                    "content": attr,
                    "schedule": None
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error sending SMS:', error);
            throw error;
        }
    }
}

module.exports = ssdportal;
