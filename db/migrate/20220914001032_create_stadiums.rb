class CreateStadiums < ActiveRecord::Migration[6.1]
  def change
    create_table :stadia do |t|
      t.string :name
      t.string :location
      t.string :image
      t.integer :built
      t.integer :capacity
      t.string :team_id
    end
  end
end
