#!/usr/bin/env bash
# exit on error
set -o errexit
bundle install
bundle exec rake assets:precompile
bundle exec rake assets:clean
rm -rf babelrc
bin/webpack
bundle exec rake db:migrate
bundle exec puma -C config/puma.rb

exec "$@"