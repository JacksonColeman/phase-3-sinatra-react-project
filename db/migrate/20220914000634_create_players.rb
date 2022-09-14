class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.string :image
      t.integer :age
      t.decimal :batting_average
      t.integer :position_id
      t.integer :team_id
    end
  end
end
