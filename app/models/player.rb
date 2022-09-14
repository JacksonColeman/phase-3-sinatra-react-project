class Player < ActiveRecord::Base
    belongs_to :position
    belongs_to :team

    def full_name
        "#{self.first_name} #{self.last_name}"
    end
end