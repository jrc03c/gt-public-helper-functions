if (!globalThis.crypto) {
  globalThis.crypto = require("node:crypto")
}

const { hash } = require("@jrc03c/js-crypto-helpers")

module.exports = async (request, response) => {
  try {
    return response.send({ hashed: await hash(request.body.text) })
  } catch (e) {
    return response.status(500).send({ error: e.toString() })
  }
}
