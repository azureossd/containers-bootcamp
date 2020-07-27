FROM ruby:2.6.2

ARG RACK_ENV=production

RUN apt-get update

RUN apt-get install -y build-essential

RUN mkdir /app

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

EXPOSE 4567

CMD ["bundle", "exec", "ruby", "index.rb","-o","0.0.0.0"]