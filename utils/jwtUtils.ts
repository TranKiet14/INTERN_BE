import { config } from "configs";
const jwt = require("jsonwebtoken");

const jwtUtils = {
  sign: (userId: number, userRole: any) => {
    const access_token = jwt.sign(
      {
        userId: userId,
        role: userRole,
      },
      config.jwt.secret,
      {
        expiresIn: config.jwt.ttl,
      }
    );

    return access_token;
  },
  signRefreshToken: (userId: number, userRole: any) => {
    const refresh_token = jwt.sign(
      {
        userId: userId,
        role: userRole,
      },
      config.jwt.secret,
      {
        expiresIn: "1y",
      }
    );

    return refresh_token;
  },
};
export default jwtUtils
