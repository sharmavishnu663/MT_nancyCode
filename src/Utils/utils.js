import parse from 'html-react-parser';

export const parseHtml = (data) => {
    if (!data) return "";
    return parse(data);
}

export const getCommonApiHeader = () => {
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
}