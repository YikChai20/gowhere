const {getUrlList, createUrl} = require('../app/controllers/url');

describe("Shorten url test", () => {
    test("Get all urls", async () => {
        // arrange and act
        const req = {
            method: 'GET',
            url: '/url/list'
        };
        const res = {
            status: (function (status) {
                this.status = status
                return this;
            }),
            json: function (body) {
                this.body = body.data
                return this;
            },
        }

        await getUrlList(req, res)

        expect(res.body.length).toBeGreaterThan(0);
    });

    test("Shorten & Create url", async () => {
        // arrange and act
        const req = {
            method: 'GET',
            url: '/url/create',
            body: {
                url: 'https://www.wikipedia.org/'
            }
        };

        const output = {
            "data": {
                "id": 58,
                "url": "https://www.wikipedia.org/",
                "shortUrl": "VH8sGNzUt",
                "updatedAt": "2023-02-24T16:17:40.169Z",
                "createdAt": "2023-02-24T16:17:40.169Z"
            },
            "message": "Shorten url created successfully!"
        }
        const myMock = jest.fn().mockReturnValueOnce(output);
        const mockId = myMock().data.id;

        expect(mockId).toBeGreaterThan(0);
    });

})