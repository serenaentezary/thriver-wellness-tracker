class CreateGoals < ActiveRecord::Migration[5.1]
  def change
    create_table :goals do |t|
      t.string :goal_item
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
