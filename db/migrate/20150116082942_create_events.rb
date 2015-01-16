class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :type
      t.integer :times, default: 0

      t.timestamps
    end
    add_index :events, :type, unique: true
  end
end
