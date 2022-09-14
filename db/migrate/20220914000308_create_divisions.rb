class CreateDivisions < ActiveRecord::Migration[6.1]
  def change
    create_table :divisions do |t|
      t.string :name
      t.integer :founded
      t.integer :league_id
    end
  end
end
