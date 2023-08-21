
const searchConsole = require('@googleapis/searchconsole');
const { format, subWeeks } = require('date-fns');

export async function GET(request) {
    let credentials = JSON.parse(process.env.keyfile)
    const auth = await searchConsole.auth.getClient({
        credentials,
        scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const client = searchConsole.searchconsole({
        version: 'v1',
        auth,
    });
    const today = new Date();
    const weekBefore = subWeeks(today, 1);
    const formattedToday = format(today, 'yyyy-MM-dd');
    const formattedWeekBefore = format(weekBefore, 'yyyy-MM-dd');
    const response = await client.searchanalytics
        .query({
            siteUrl: 'sc-domain:pipetobaccosearch.com',
            startDate: formattedWeekBefore,
            endDate: formattedToday,
        })
    return new Response(JSON.stringify(response.data))

}