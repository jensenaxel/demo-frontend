const RESTRICT_REGEX = {
    EMAIL: /[a-zA-Z0-9.+_'-]/g,
    PHONE: /[0-9-() ]/g,
    LETTERS_NUMBERS_ONLY: /[A-Za-z0-9]/g,
    NAME_CASE: /[a-zA-Z-\s]/g, // This is based off of what was in the flex code.  Space was allowed for name in case look up.
    NUMBERS_ONLY: /[0-9]*/g,
    NUMERIC: /\d+\.?\d*/, // allows decimals
    ZIP_CODE: /^[0-9]{5}(?:-[0-9]{4})?$/,
};

export {
    RESTRICT_REGEX,
};
