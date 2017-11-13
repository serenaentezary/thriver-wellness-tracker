class AddForeignKeyToJournals < ActiveRecord::Migration[5.1]
  def change
    add_reference :journals, :entry, index: true
    add_foreign_key :journals, :entries
  end
end
