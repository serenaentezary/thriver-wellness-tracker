class CreateJournals < ActiveRecord::Migration[5.1]
  def change
    create_table :journals do |t|
      t.string :journal_entry
      t.belongs_to :user, null: false
      t.belongs_to :entry, null: false
      
      t.timestamps
    end
  end
end
