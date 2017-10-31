class CreateEmotions < ActiveRecord::Migration[5.1]
  def change
    create_table :emotions do |t|
      t.string :feeling

      t.timestamps
    end
  end
end
