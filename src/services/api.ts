type Url = string;
type Body = object | null;
type Headers = object | undefined;

const defaultHeaders = {
    'Content-Type': 'application/json'
};

const api = {
    get: async (url : Url, headers? : Headers) => {
        return await makeRequest(url, 'GET', headers);
    },
    post: async (url : Url, body : Body, headers? : Headers) => {
        return await makeRequest(url, 'POST', headers, body);
    },
    put: async (url : Url, body : Body, headers? : Headers) => {
        return await makeRequest(url, 'PUT', headers, body);
    },
    delete: async (url : Url, headers? : Headers) => {
        return await makeRequest(url, 'DELETE', headers);
    }
};

async function makeRequest(url : Url, method : string = 'GET', headers? : object, body? : Body) {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                ... defaultHeaders,
                ... headers
            },
            body: body ? JSON.stringify(body) : null,
            credentials: 'include'
        });

        if (! response.ok && response.status >= 500) {
            throw new Error('An error occurred. Please try again.');
        }

        const res = await response.json();
        return {
            ... res,
            status: response.status
        };
    } catch (err) { // @TODO: Handle errors in client
    }
}

export default api;
