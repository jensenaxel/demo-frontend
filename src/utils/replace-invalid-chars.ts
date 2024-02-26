import { removeEmojis } from './remove-emojis';

const replaceInvalidCharacters = (str = ''): string =>
    // Strip special characters: The client has requested these specifically.
    // We're not stripping any other unicode for now.
     removeEmojis(
        str
            .replace(/\t/g, ' '.repeat(4)) // Convert tab to 4 spaces
            .replace(/[\u2018-\u201b]/g, "'") // Single smart quote
            .replace(/[\u201c-\u201f]/g, '"') // Double smart quote
            .replace(/[\u2013-\u2015\u2017]/g, '-') // EN-Dash, EM-Dash, Horizontal Bar
            .replace(/[\u2b9a\u2714\u00b7\u2022\u25aa\u26aa\uf0b7\u2981]/g, '-') // Bullets of various descriptions
            .replace(/[\uf0d8\uf0a7\uf076\uf0fc]/g, '-') // Word special bullets from bullet library
            .replace(/\u2026/g, '...') // Ellipsis
    );
export { replaceInvalidCharacters };
