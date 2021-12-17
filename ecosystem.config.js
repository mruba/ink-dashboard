module.exports = {
  apps : [{
    name: 'ink-dashboard',
    script: "node_modules/next/dist/bin/next",
    args: "start",
    cwd: '/home/pi/ink-dashboard-artifacts/current',
    instances: "max",
    env: { "NODE_ENV": "production", "production": true }
  }]
};
