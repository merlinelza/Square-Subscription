const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const createCustomer = async (req, res) => {
    const method = 'post';
    const url = 'https://connect.squareupsandbox.com/v2/customers';
    try {
        const payload = {
            idempotency_key: uuidv4(),
            given_name: 'mad',
            family_name: 'Erien',
            email_address: 'Amelia.Earhart@example.com',
            address: {
                address_line_1: '500 Electric Ave',
                address_line_2: 'Suite 600',
                locality: 'New York',
                administrative_district_level_1: 'NY',
                postal_code: '10003',
                country: 'US',
            },
            phone_number: '+1-212-555-4240',
            reference_id: 'YOUR_REFERENCE_ID',
            note: 'a customer',
        };
        const squareData = await squareRequest(method, url, payload);
        res.send(squareData);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};
const readCustomer = async (req, res) => {
    const method = 'post';
    const url = ' https://connect.squareupsandbox.com/v2/customers';
    try {
        const payload = {
            family_name: 'Erien',
        };
        const squareData = await squareRequest(method, url, payload);
        res.send(squareData);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};
const createsubPaln = async (req, res) => {
    const method = 'post';
    const url = ' https://connect.squareupsandbox.com/v2/catalog/object  ';
    try {
        const payload = {
            idempotency_key: uuidv4(),
            object: {
                type: 'SUBSCRIPTION_PLAN',
                id: '#plan',
                subscription_plan_data: {
                    name: 'Multiphase Gym Membership',
                    phases: [
                        {
                            cadence: 'WEEKLY',
                            periods: 6,
                            recurring_price_money: {
                                amount: 0,
                                currency: 'USD',
                            },
                        },
                        {
                            cadence: 'MONTHLY',
                            recurring_price_money: {
                                amount: 6000,
                                currency: 'USD',
                            },
                        },
                    ],
                },
            },
        };
        const squareData = await squareRequest(method, url, payload);
        res.send(squareData);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};
const createsub = async (req, res) => {
    const method = 'post';
    const url = 'https://connect.squareupsandbox.com/v2/subscriptions';
    try {
        const payload = {
            idempotency_key: uuidv4(),
            location_id: 'LPWMA7NY60W6Q',
            plan_id: 'OVWUNKECH3FB76PSEZKISZCF',
            customer_id: 'J0JPWX796C4JNX2KGRK3MV3PN4',
            start_date: '2023-10-23',
            tax_percentage: '5',
            price_override_money: {
                amount: 100,
                currency: 'USD',
            },
            timezone: 'America/Los_Angeles',
            source: {
                name: 'My App',
            },
        };
        const squareData = await squareRequest(method, url, payload);
        res.send(squareData);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};
const squareRequest = async (method, url, payload) => {
    try {
        const headerData = {
            authorization: process.env.SQUARE_API_KEY,
            'Content-Type': 'application/json',
            'Square-Version': '2023-04-19',
        };

        const response = await axios({
            method: method,
            url: url,
            data: payload,
            headers: headerData,
        })
            .then((res) => {
                //console.log('res', res);
                return res.data;
            })
            .catch((error) => {
                console.log('error', error);
                return false;
            });
        return response;
    } catch (error) {
        return false;
    }
};
module.exports = {
    createCustomer,
    readCustomer,
    createsubPaln,
    createsub,
};
