#!/usr/bin/env ruby
#
# Get OAuth 2.0 access token
#
# Require: Google Cloud Platform account (YouTube Data API v3 enabled)

require "oauth2"
require "json"

if !ENV["OAUTH2_CLIENT_ID"] || !ENV["OAUTH2_CLIENT_SECRET"]
  STDERR.puts "Set OAUTH2_CLIENT_ID and OAUTH2_CLIENT_SECRET"
  exit
end

client = OAuth2::Client.new(ENV["OAUTH2_CLIENT_ID"], ENV["OAUTH2_CLIENT_SECRET"], site: "https://accounts.google.com", authorize_url: "/o/oauth2/auth", token_url: "/o/oauth2/token")
uri = client.auth_code.authorize_url(redirect_uri: "urn:ietf:wg:oauth:2.0:oob", scope: "https://www.googleapis.com/auth/youtube.force-ssl")

puts "Please open the following URL and allow access:"
puts uri

puts
print "Copy the code and enter: "
code = gets.chomp

token = client.auth_code.get_token(code, redirect_uri: "urn:ietf:wg:oauth:2.0:oob")
puts
puts "Token: #{token.to_hash.to_json}"

