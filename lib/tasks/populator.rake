namespace :populator do
  task :fetch => :environment do
    require 'open-uri'
    url = 'http://content.samhsa.gov/ext/api/items?q-text=Treatment'
    puts LinkCache.count
    LinkCache.delete_all
    doc = Nokogiri::HTML(open(url, :redirect => true))
    doc.xpath("//product").each do |product|
      link = product.xpath("text()").last
      LinkCache.create(link: link)
    end
    puts LinkCache.count
  end
end
