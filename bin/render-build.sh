#!/usr/bin/env bash
# exit on error
set -o errexit
bundle install
# bundle exec rake assets:precompile
# bundle exec rake assets:clean
npm i
bundle exec rake db:migrate
mkdir -p ./tmp/sockets
bundle exec puma -C config/puma.rb

exec "$@"