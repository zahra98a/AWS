const Responses = require('../common/API_Responses');

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        // failed without an ID
        return Responses._400({ message: 'missing the ID from the path' });
    }

    let ID = event.pathParameters.ID;

    if (data[ID]) {
        // return the data
        return Responses._200(data[ID]);
    }

    //failed as ID not in the data
    return Responses._400({ message: 'no ID in the file data' });
};

const data = {
    1233: { studentName: 'Anna Jones',  courseCode: 's001233', course: 'computing' },
    1333: { studentName: 'Anna Smith', courseCode: 's001333', course: 'computing' },
    7833: { studentName: 'Chris Smith', courseCode: 's007833', course: 'software' },
    5133: { studentName: 'Tom Hague', courseCode: 's005133', course: 'ux' },
};