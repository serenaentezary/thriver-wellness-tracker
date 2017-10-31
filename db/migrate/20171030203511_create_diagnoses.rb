class CreateDiagnoses < ActiveRecord::Migration[5.1]
  def change
    create_table :diagnoses do |t|
      t.string :type, null: false
      
      t.timestamps
    end
  end
end
