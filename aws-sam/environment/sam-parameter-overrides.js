const { writeFileSync } = require(`fs`);
const { join } = require(`path`);

const paramOverrideKeys = [
  `applicationPrefix`,
  `ENV`,
  `domainName`,
  `hostedZoneId`,
  `PriceClass`,
  `apigwId`,
  `apigwRegion`,
  `apigwCertificateArn`
];
const paramOverrides = {};
paramOverrideKeys.forEach((key) => {
  if (process.env[key]) {
    paramOverrides[key] = process.env[key];
  }
});

writeFileSync(
  join(__dirname, `./sam-parameter-overrides.json`),
  JSON.stringify(paramOverrides, null, 2)
);
