class CreateUserDiagnoses < ActiveRecord::Migration[5.1]
  def change
    create_table :user_diagnoses do |t|
      t.belongs_to :user, null: false
      t.belongs_to :diagnosis, null: false

      t.timestamps
    end
  end
end
