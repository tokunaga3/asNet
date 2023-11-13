#!/usr/bin/env bash
# exit on error
set -o errexit

# rm -f tmp/pids/server.pid
# tail -f /dev/null
# cron
# bundle exec whenever --update-crontab
bundle exec rake  db:migrate
# bundle exec rake db:seed
# mkdir -p ./tmp/sockets
pwd
# bundle exec puma -C config/puma.rb
exec "$@"