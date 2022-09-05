// node src/scripts/dumpResumeJson.mjs

process.env.NODE_ENV = "production";

import resumeData from "../assets/resumeData.mjs";

console.log(JSON.stringify(resumeData, null, 2));
