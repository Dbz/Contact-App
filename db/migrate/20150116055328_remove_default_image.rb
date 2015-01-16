class RemoveDefaultImage < ActiveRecord::Migration
  def change
    change_column_default(:contacts, :image, nil)
  end
end
