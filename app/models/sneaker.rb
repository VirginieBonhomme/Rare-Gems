class Sneaker < ApplicationRecord
  has_many :reviews, dependent: :destroy
end
