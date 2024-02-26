const removeEmojis = (str: string): string =>
    // TODO: Change to /[^\p{L}\p{N}\p{P}\p{Z}\p{Sm}\p{Sc}\p{Sk}\n]/gu
    // This currently filters characters like `<>|=
    // If we want those filtered, it should happen elsewhere.
     str.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$+\n]/gu, '');
export { removeEmojis };
