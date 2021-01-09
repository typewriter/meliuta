#!/usr/bin/env ruby
#
# Extract timed comments from get_comments.rb outputs
#
# Format:
#  YouTube URL,Title,PublishedAt,Thumbnail URL,Comment (partial),Comment

require 'json'
require 'csv'

body = JSON.parse(STDIN.read)

csv = CSV.generate do |csv|
  # print video
  video = body["video"]
  base_line = [
    "https://www.youtube.com/watch?v=#{video["id"]}",
    video["snippet"]["title"],
    video["snippet"]["publishedAt"],
    video.dig("snippet", "thumbnails", "standard", "url") || video.dig("snippet", "thumbnails", "high", "url")
  ]
  csv << base_line

  # print timed comments
  comments = body["comments"]
  comments.map { |comment|
    text = comment.dig("snippet", "topLevelComment", "snippet", "textOriginal")

    timed_texts = text.scan(/(\d+:\d+|\d+:\d+:\d+)( .+)/)
    timed_texts.map { |timed_text|
      if timed_text[0] =~ /(\d+):(\d+):(\d+)/
        second = $1.to_i * 60 * 60 + $2.to_i * 60 + $3.to_i
        [second, timed_text.join, text.gsub(/\n/, " ")]
      elsif timed_text[0] =~ /(\d+):(\d+)/
        second = $1.to_i * 60 + $2.to_i
        [second, timed_text.join, text.gsub(/\n/, " ")]
      else
        []
      end
    }
  }.flatten(1).reject(&:empty?).sort_by { |e| e[0] }.each { |comment|
    csv << base_line.dup.tap { |e| e[0] += "&t=#{comment[0]}"; e } + comment[1..2]
  }
end

puts csv

