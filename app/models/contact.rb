class Contact < ActiveRecord::Base
  validates :first_name, :last_name, :phone_number, presence: true
  validates :phone_number, uniqueness: { scope: [:first_name, :last_name] }
  before_save :add_default_image
  
  def add_default_image
    self.image = "https://www.etsy.com/images/avatars/default_avatar_75px.png" if self.image.empty?
  end 
end
