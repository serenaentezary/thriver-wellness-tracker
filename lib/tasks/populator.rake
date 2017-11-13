namespace :populator do
  task :fetch => :environment do
    require 'open-uri'
    url = 'http://content.samhsa.gov/ext/api/items?q-text=Treatment&pagelength=100'
    puts LinkCache.count
    LinkCache.delete_all
    doc = Nokogiri::HTML(open(url, :redirect => true))
    doc.xpath("//pub").each do |match|
      link = match.xpath("text()").last.text
      title = match.css("title").text
      LinkCache.create(link: link, title: title)
    end
    puts LinkCache.count
  end
end
