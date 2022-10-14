class Trainee < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  belongs_to :yoga
end
