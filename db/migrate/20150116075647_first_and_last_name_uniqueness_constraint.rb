class FirstAndLastNameUniquenessConstraint < ActiveRecord::Migration
  def change
    add_index :contacts, [:first_name, :last_name, :phone_number], unique: true
  end
end
