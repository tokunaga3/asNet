#!/usr/bin/env bash
# exit on error
set -o errexit

# cron
# bundle exec whenever --update-crontab
bundle exec rake  db:migrate
# bundle exec rake db:seed
bundle exec puma -C config/puma.rb
exec "$@"