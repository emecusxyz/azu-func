const { app } = require('@azure/functions');

app.http('dm', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route:'nameofday',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        let day = weekday[d.getUTCDay()];

        const name = request.query.get('name') || await request.text() || day;

        return { body: `Hello, ${name}!` };
    }
});
