#!/usr/bin/env ruby
#
# Get video information and comments
#
# Require: Google Cloud Platform account (YouTube Data API v3 enabled)

require 'net/http'
require 'uri'
require 'json'

if ARGV.size != 1
  STDERR.puts "Usage: ./#{File.basename(__FILE__)} URL..."
  STDERR.puts ""
  STDERR.puts "Environment variables:"
  STDERR.puts " GCP_API_KEY   Required. Set the API key generated by Google Cloud Platform."
  STDERR.puts " COMMENT_PAGES Optional. Number of pages to get comments (100 per page)."
  exit
end

if !ENV['GCP_API_KEY']
  STDERR.puts "Set GCP_API_KEY"
  exit
end

API_KEY = ENV['GCP_API_KEY']
COMMENT_PAGES = ENV['COMMENT_PAGES'].to_i || 10

ARGV.each { |video_id|
  if video_id =~ /v=([^&]+)/
    video_id = $1
  end

  # Videos
  response = Net::HTTP.get_response(URI.parse("https://www.googleapis.com/youtube/v3/videos?key=#{API_KEY}&part=id,snippet,contentDetails,status&id=#{video_id}"))
  if response.code.to_i != 200
    throw "API response error: HTTP #{response.code} #{response.message} (#{response.body})"
  end
  video = JSON.parse(response.body)["items"].first

  # CommentThreads
  comments = []
  token = ""

  1.upto(COMMENT_PAGES) { |i|
    response = Net::HTTP.get_response(URI.parse("https://www.googleapis.com/youtube/v3/commentThreads?key=#{API_KEY}&part=id,replies,snippet&videoId=#{video_id}&order=relevance&maxResults=100" + (token ? "&pageToken=#{token}" : "")))
    if response.code.to_i == 403
      STDERR.puts "video #{video_id}: disabled comments."
      break
    elsif response.code.to_i != 200
      throw "API response error: HTTP #{response.code} #{response.message} (#{response.body})"
    end
    json = JSON.parse(response.body)
    comments += json["items"]

    if json["nextPageToken"]
      token = json["nextPageToken"]
    else
      break
    end
  }

  puts ({ video: video, comments: comments }).to_json
}

