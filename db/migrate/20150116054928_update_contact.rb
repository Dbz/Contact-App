class UpdateContact < ActiveRecord::Migration
  def change
    change_column :contacts, :image, :string, default: "https://www.etsy.com/images/avatars/default_avatar_75px.png"
  end
end
