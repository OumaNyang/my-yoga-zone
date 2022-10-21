class Tutorial < ApplicationRecord
    belongs_to :trainer
    
    validates :description, length: {minimum:20, maximum:1000}
end
