# API

All functions return the same kind of object if an error is thrown:

```
{
  error: "Some error message"
}
```

## `/api/crypto/hash` (POST)

Returns the SHA-512 hash of a given string. For more info about the hash function, check out its implementation [here](https://github.com/jrc03c/js-crypto-helpers/blob/main/src/hash.js).

Expects as the request body:

```
{
  text: "Some text to hash"
}
```

And returns:

```
{
  hashed: "abc123..."
}
```
