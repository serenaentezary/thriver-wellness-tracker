class CreateLinkCaches < ActiveRecord::Migration[5.1]
  def change
    create_table :link_caches do |t|
      t.string :link
      
      t.timestamps
    end
  end
end
