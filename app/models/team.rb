class Team < ActiveRecord::Base
    has_many :players
    belongs_to :division
    has_one :stadium
end