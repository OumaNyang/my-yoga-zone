class Trainer < ApplicationRecord
  has_many :yogas
  has_many :trainees, through: :yogas
end
