/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const result = {};
    const keys = Object.keys(obj);
    for(const key of keys) {
        if(!fields.includes(key)) {
            result[key] = obj[key]
        }
    }
    return result;
};