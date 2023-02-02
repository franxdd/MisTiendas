const { sign } = require("jsonwebtoken");
const createTokens = (user) => {
  const accessToken = sign(
    JSON.stringify({
      username: user.dataValues.username,

      isAdmin: user.dataValues.isAdmin,
    }),
    "jwtsecretcambiar"
  );

  return accessToken;
};
module.exports = {
  createTokens,
};
