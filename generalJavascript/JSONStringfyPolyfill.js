/*
JSON.stringify:
    1. Converts a javascript value to s JSOn string, optionally replacing values,
    if a replacer is specified or optionally including only the specified values if
    an array is provided.
    Syntax: JSON.stringify(value, replacer, space)
    replacer: can be a function that returns an array or an array.
    space: max value of 10 if greater than 10 it is clamped to 10.

    Limitations: TypeError is thrown if circular references are detected or 
    BigInt value is encountered.

    2. If undefined, Symbol or function are provided as values, they will not be
    included in the resulting string. If these values are found on object they are
    omitted and if they are found in array they are converted into null.

    3. NAN, NULL and infinty are not ignored, they get converted to null.
    4. toJSON method defines what data will be serialized.
    5. Date values are not lost, they are parsed as strings.

    Use cases:
    1. Can be used to compare object by converting them to string.
*/

function JSONStringify(object) {

}