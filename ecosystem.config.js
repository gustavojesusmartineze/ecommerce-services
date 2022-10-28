module.exports = {
  apps : [
    {
      name: 'api-service',
      script: 'api/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      out_file: "/tmp/api-service.log",
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'mysql-service',
      script: 'mysql/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      out_file: "/tmp/mysql-service.log",
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'cache-service',
      script: 'cache/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      out_file: "/tmp/cache-service.log",
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'product-service',
      script: 'products/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      out_file: "/tmp/product-service.log",
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'review-service',
      script: 'reviews/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      out_file: "/tmp/review-service.log",
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
