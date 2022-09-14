# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_14_001032) do

  create_table "divisions", force: :cascade do |t|
    t.string "name"
    t.integer "founded"
    t.integer "league_id"
  end

  create_table "leagues", force: :cascade do |t|
    t.string "name"
    t.integer "founded"
  end

  create_table "players", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "age"
    t.decimal "batting_average"
    t.integer "position_id"
    t.integer "team_id"
  end

  create_table "positions", force: :cascade do |t|
    t.string "abbrev"
    t.string "full_name"
  end

  create_table "stadia", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.integer "built"
    t.integer "capacity"
    t.string "team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.integer "founded"
    t.integer "division_id"
  end

end
