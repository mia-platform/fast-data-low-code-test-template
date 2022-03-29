# Introduction 

This repository is a template you can use to start testing your Fast Data Low Code configurations.

## How this repository is organized
 
- /configurations: this folder contains the Fast Data Low Code configurations
    - aggregation.ts: contains the aggregation schema
    - erSchema.ts: contains the er schema
    - additional custom function files (with .js extension)
- /tests:
    - /aggregator: contains the test cases for the aggregator
        - /{case name}: aggregator test case
            - expected.ts: the single view you expected to have in this test case
            - fixtures.ts: this file contains the fixtures (projections) you need for the aggregation
            - identifier.ts: it contains just the identifier of the projection change being tested for the current test case
    - /validator: contains the test case of your validator tests
      - /invalid: contains all the single view instances tha you expect your validator to consider invalid
      - /valid: contains all the single view instances tha you expect your validator to consider valid
  
You can add more test cases to both the aggregator and the validator folders. Make sure to import your new test cases into the `tests/aggregator/index.ts` and `tests/validator/index.ts` files.
      
## Prerequisites

This library uses `@mia-platform-internal/fast-data-automation-lib` which is an internal library of Mia-Platform. To install it successfully, you have to login to Mia-Platform's npm private repository.   
If you're not authenticated, ask your Mia-Platform referent to assist you with this matter.

## Testing the Configurations

```bash
nvm install
npm ci
npm test
```

## Compiling The Configurations

This repository leverages Typescript to perform type checking on the configurations. To compile the configurations declared in Typescript (`aggregation.ts`, `erSchema.ts`) to `json` you need to run the following command:

```bash
npm run compile-config
```

This will output the following files in the `config-out` directory:
- aggregation.json
- erSchema.json
- validator.js
- {customFx}.js: copy of each of your custom functions.

Once the configurations are compiled, you can upload them to your Fast Data Low Code instance.

## Additional Notes

If you pass `MONGODB_URL` as environment variable, this connection string will be used to connect to MongoDB. Otherwise, a `mongo:4.4` container will be automatically created and used.
