class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :location
      t.integer :founded
      t.integer :division_id
    end
  end
end
