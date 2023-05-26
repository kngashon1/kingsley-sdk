# KINGSLEY-SDK

## Development Setup
```
npm install -g typescript
```

## Clone Github repo
```
https://github.com/kngashon1/kingsley-sdk
```

## Run the SDK (please use git bash)
```
npm run build
```

## Test SDK creating node project
- Create nodejs Typescript project
- Install sdk package from npm registry `npm i sdk-typescript-trial`
- You can consume the package using below code :
```typescript
import { Library } from 'sdk-typescript-trial';

const client = new Library({
  authToken: 'XGyPMmM2g1XPU46RbLSC',
  baseUrl: 'https://the-one-api.dev/v2'
});


client.movies.getMovies().then((res: any) => console.log(`Movies are listed below: ${res?.docs}`) );
client.quotes.getQuotes().then((res: any) => console.log(`Quotes are listed below: ${res?.docs}`) );
```

#### Options to add in tsconfig.json file
```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "experimentalDecorators": true
  }
}
```
#### Run local
```
tsc
node dist/run.js
```

