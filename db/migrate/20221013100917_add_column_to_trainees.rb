class AddColumnToTrainees < ActiveRecord::Migration[6.1]
  def change
    add_column :trainees, :yoga_id, :integer
  end
end
