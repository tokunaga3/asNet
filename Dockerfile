# ベースとなるDockerイメージの指定
FROM rubylang/ruby:3.0.6-focal

# 必要なパッケージのインストール
RUN env DEBIAN_FRONTEND=noninteractive apt-get update && \
  env DEBIAN_FRONTEND=noninteractive apt-get install -y build-essential \
  libpq-dev \
  postgresql-client \
  file \
  nodejs \
  curl \
  cron

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
  env DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  env DEBIAN_FRONTEND=noninteractive apt-get update && \
  env DEBIAN_FRONTEND=noninteractive apt-get install -y yarn

# ワークディレクトリの設定
RUN mkdir /app
WORKDIR /app

# システム依存性のインストール
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install


# アプリケーションのコピー
COPY . /app

# COPY entrypoint.sh /usr/bin
RUN npm install

RUN chmod +x bin/render-build.sh

RUN mkdir -p ./tmp/sockets
#ENTRYPOINT ["entrypoint.sh"]

# RUN bundle exec rake assets:precompile
# RUN bundle exec rake assets:clean
ENV RAILS_ENV "production"
# タイムゾーン変更
RUN cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
