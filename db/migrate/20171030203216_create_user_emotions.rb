class CreateUserEmotions < ActiveRecord::Migration[5.1]
  def change
    create_table :user_emotions do |t|
      t.belongs_to :user, null: false
      t.belongs_to :emotion, null: false
      t.integer :rating

      t.timestamps
    end
  end
end
