class Trainer < ApplicationRecord
    has_many :tutorials
    has_many  :users
end
