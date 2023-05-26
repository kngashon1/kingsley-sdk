# DESIGN OF SDK

#### Create folders and files as per the below structure
```
.
└── kingsley-sdk/
    ├── src/
    │   ├── resources/
    │   │   ├── base.ts
    │   │   ├── movies/
    │   │   │   ├── index.ts
    │   │   │   └── types.ts
    │   │   └── quotes/
    │   │       ├── index.ts
    │   │       └── types.ts
    │   └── index.ts
    ├── tsconfig.json
    └── package.json
```

#### Setting up Repository and Configuration
```
npm init -y
npm install microbundle --save-dev
npm install isomorphic-unfetch
```

#### Read more about `microbundle`
`https://github.com/developit/microbundle`

#### Read more about `isomorphic-unfetch`
`https://github.com/developit/unfetch/tree/main/packages/isomorphic-unfetch`

