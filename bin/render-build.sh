#!/usr/bin/env bash
# exit on error
set -o errexit
# bundle install # rails-asnetでコメント解除
# bundle exec rake assets:precompile
# bundle exec rake assets:clean
# npm i　# rails-asnetでコメント解除
bundle exec rake db:migrate
mkdir -p ./tmp/sockets
mkdir -p tmp/pids
bundle exec puma -C config/puma.rb # rails-asnetでコメント

exec "$@"