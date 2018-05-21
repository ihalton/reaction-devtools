{
  "apps" : [{
    "name"        : "reaction-ret",
    "script"      : "build/bundle/main.js",
    "watch"       : false,
    "env": {
      "NODE_ENV": "production",
      "MONGO_URL": "mongodb://<mongoURL>:27017/ret",
      "ROOT_URL": "http://localhost.com",
      "PORT": 4000,
      "METEOR_SETTINGS": "{ \"kadira\": { \"appId\": \"<kadiraAppID>\", \"appSecret\": \"<kadiraAppsecret>\", \"options\": { \"endpoint\": \"http://172.31.31.15:11011\" } }, \"cdnPrefix\": \"<cdnURL>\" }",
      "KADIRA_PROFILE_LOCALLY":0,
      "SKIP_FIXTURES": true
    },
    "interpreter_args": "--max_old_space_size=32768",
    "max_memory_restart": "3G",
    "log_date_format": "YYYY-MM-DD HH:mm:ss.SSS Z"
  }]
}
