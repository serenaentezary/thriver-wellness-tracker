class AddEntryToUserEmotionsJournalsGoals < ActiveRecord::Migration[5.1]
  def change
    add_reference :user_emotions, :entry, foreign_key: true
    add_reference :journals, :entry, foreign_key: true
    add_reference :goals, :entry, foreign_key: true
  end
end
