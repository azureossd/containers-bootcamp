require 'sinatra'
require "sinatra/json"
require 'socket'

get '/' do
    response = {
        "Message": "My ruby container is running...",
        "Hostname": Socket.gethostname,
        "Ruby version": ENV['RUBY_DESCRIPTION'] || '2.6.2',
        "Request Headers": headers
      }
    json response
end