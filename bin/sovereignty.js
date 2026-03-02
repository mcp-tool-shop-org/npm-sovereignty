#!/usr/bin/env node
"use strict";

// Pure JSON config — npm-launcher derives asset names from convention:
//   binary:    sovereignty-1.4.6-linux-x64
//   checksums: checksums-1.4.6.txt
process.env.MCPTOOLSHOP_LAUNCH_CONFIG = JSON.stringify({
  toolName: "sovereignty",
  owner: "mcp-tool-shop-org",
  repo: "sovereignty",
  version: "1.4.6",
  tag: "v1.4.6",
});

require("@mcptoolshop/npm-launcher/bin/mcptoolshop-launch.js");
