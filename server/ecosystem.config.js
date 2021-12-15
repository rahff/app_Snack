module.exports = {
  apps : [{
    script: './bin/www',
    watch: true,
    instances: 'max',
    autorestart: true,
    watch: true,
    ignore_watch: ["logs"],
    env: {
      NODE_ENV : "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }
],
};