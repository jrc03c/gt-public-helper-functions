if (!globalThis.crypto) {
  globalThis.crypto = require("node:crypto")
}

const { hash } = require("@jrc03c/js-crypto-helpers")

module.exports = async (request, response) => {
  try {
    return response.send(await hash(request.body))
  } catch (e) {
    return response.status(500).send({ message: e.toString() })
  }
}
