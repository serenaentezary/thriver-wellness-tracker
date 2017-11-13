class AddCompletedToGoals < ActiveRecord::Migration[5.1]
  def change
    add_column :goals, :completed, :boolean, default: false
  end
end
