class AddForeignKeyToUserEmotions < ActiveRecord::Migration[5.1]
  def change
    add_reference :user_emotions, :entry, index: true
    add_foreign_key :user_emotions, :entries
  end
end
