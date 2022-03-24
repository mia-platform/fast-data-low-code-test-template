# Introduction 

This repository is a template you can use to start to test your Fast Data Low Code configurations.

## How this repository is organized
 
- /configurations: in this folder you can place your configurations files
    - aggregation.json: the aggregation configuration file
    - erSchema.json: the ER-Schema configuration file
    - additional custom function files
- /tests:
    - /aggregator: contains the test cases of your aggregator tests
        - /{case name}: aggregator test case
            - expected.json: the single view you expected to have in this test case
            - fixtures.json: this file contains the fixtures (projections) you need for the aggregation
            - identifier.json: it contains just the identifier of the projection change being tested for the current test case
    - /validator: contains the test case of your validator tests
      - /invalid: contains all the single view instances tha you expect your validator to consider invalid
      - /valid: contains all the single view instances tha you expect your validator to consider valid

## Prerequisites

This library uses `@mia-platform-internal/fast-data-automation-lib` which is an internal library of Mia-Platform. To be able to install it successfully, you have to login to npm private repository.   
Ask to your Mia-Platform referent to do that.

## Test

```bash
nvm install
npm ci
npm test
```

### Note

If you pass `MONGODB_URL` as environment variable, this connection string will be used to connect to MongoDB. Otherwise, a `mongo:4.4` container will be automatically created and used.
