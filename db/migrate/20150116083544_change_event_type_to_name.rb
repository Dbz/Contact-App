class ChangeEventTypeToName < ActiveRecord::Migration
  def change
    remove_column :events, :type
    add_column :events, :name, :string, unique: true
  end
end
