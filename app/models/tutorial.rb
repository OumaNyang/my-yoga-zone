class Tutorial < ApplicationRecord
belongs_to :trainer

validates :name, presence: true
validates :url, presence: true, uniqueness: true
validates :description,presence: true,  length: { minimum: 50 }

end