import * as R from "ramda";

const qualifyChar = `"`;
const delimitChar = ",";
const escapeChar = "\\";

const replaceAll =
  (find: string, replace: string) =>
  (input: string): string => {
    return input.split(find).join(replace);
  };

const escape = (x: string): string =>
  R.pipe(
    replaceAll(escapeChar, escapeChar + escapeChar),
    replaceAll(qualifyChar, escapeChar + qualifyChar)
  )(x);

const qualify = (x: string): string => qualifyChar + x + qualifyChar;

export const encode = (settings: string[]): string => {
  return settings.map(escape).map(qualify).join(delimitChar);
};

type DecodeState = "initial" | "qualified" | "escaped" | "expecting-delimiter";

export const decode = (encodedSettings: string): string[] => {
  let state: DecodeState = "initial";
  let setting = "";
  const settings: string[] = [];

  for (let i = 0; i < encodedSettings.length; i++) {
    const c = encodedSettings[i];

    switch (state) {
      case "initial":
        if (c !== qualifyChar)
          throw new Error(`Expected qualifier, but found "${c}".`);
        state = "qualified";
        break;
      case "qualified":
        if (c === qualifyChar) {
          settings.push(setting);
          setting = "";
          state = "expecting-delimiter";
        } else if (c === escapeChar) {
          state = "escaped";
        } else {
          setting += c;
        }
        break;
      case "escaped":
        setting += c;
        state = "qualified";
        break;
      case "expecting-delimiter":
        if (c !== delimitChar)
          throw new Error(
            `Non-delimiter "${c}" found after closing delimiter.`
          );
        state = "initial";
        break;
    }
  }

  return settings;
};
