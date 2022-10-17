class User < ApplicationRecord
has_secure_password

belongs_to :trainer
has_many :tutorials, through: :trainer

validates :username, presence: true, uniqueness: true
validates :email, presence: true, uniqueness: true
validates :email, presence: true, uniqueness: true

end