class User < ApplicationRecord
  has_one :car
  has_one :location
  has_one :account
end
