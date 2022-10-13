class Yoga < ApplicationRecord
  belongs_to :trainer
  has_many :trainees, dependent: :destroy
end
