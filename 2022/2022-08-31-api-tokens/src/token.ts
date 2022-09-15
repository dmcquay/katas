import * as fs from "fs";
import * as jwt from "jsonwebtoken";

const privateKey = fs.readFileSync("private.pem");
const publicKey = fs.readFileSync("public.pem");

type JwtPayloadWithClient = jwt.JwtPayload & {
  client: string;
};

function isJwtPayloadWithClient(
  payload: jwt.JwtPayload
): payload is JwtPayloadWithClient {
  return typeof (payload as JwtPayloadWithClient).client === "string";
}

export const createToken = async (
  client: string,
  key = privateKey
): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { client },
      key,
      { algorithm: "RS256" }, // add expiresIn property here if desired, e.g. '1 year' or '90 days'
      (err, token) => {
        if (err) reject(err);
        else if (token === undefined) {
          reject(new Error("token should not be undefined"));
        } else [resolve(token)];
      }
    );
  });
};

export const verifyToken = async (
  token: string
): Promise<JwtPayloadWithClient> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, publicKey, (err, decoded) => {
      if (err) {
        reject(err);
      } else if (typeof decoded === "string") {
        reject(new Error("did not expect string result"));
      } else if (decoded === undefined) {
        reject(new Error("did not expect undefined result"));
      } else if (isJwtPayloadWithClient(decoded)) {
        resolve(decoded);
      } else {
        reject(new Error("expected payload to be a JwtPayloadWithClient"));
      }
    });
  });
};
