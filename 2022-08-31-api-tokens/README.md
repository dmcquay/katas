## Dependencies

- jsonwebtoken
- bcryptjs

## Generate a new signing key

Generate the keys needed for these tests.

```
openssl genrsa 4096 > private.pem
openssl rsa -in private.pem -pubout -outform PEM > public.pem

openssl genrsa 4096 > private-invalid.pem
```
