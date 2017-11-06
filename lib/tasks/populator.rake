namespace :populator do
  task :fetch => :environment do
    require 'open-uri'
    url = 'https://store.samhsa.gov/api/r/xml/productlist?start=1&pagelength=10&terms=Alcohol!Alcohol%20Abuse&sortBy=relevance&ascending=false'
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
