class CreatePositions < ActiveRecord::Migration[6.1]
  def change
    create_table :positions do |t|
      t.string :abbrev
      t.string :full_name
    end
  end
end
