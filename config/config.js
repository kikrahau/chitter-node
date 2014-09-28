var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'chitter-node'
    },
    port: 3000,
    db: 'postgres://localhost/chitter-node-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'chitter-node'
    },
    port: 3000,
    db: 'postgres://localhost/chitter-node-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'chitter-node'
    },
    port: 3000,
    db: 'postgres://localhost/chitter-node-production'
    
  }
};

module.exports = config[env];
